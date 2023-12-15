class FrameConfigurator {
    constructor(canvasEl, wrapperEl, constants) {
        this.constants = constants
        this.canvasEl = canvasEl
        this.wrapperEl = wrapperEl
        this.isMobile = false
        this.drawings = []
        this.wallSize = 300 // cm
        this.pxPerCm = 10
        this.interface = new Interface(this)
        this.minZoom = 0.1
        this.maxZoom = 10
        this.defaultPaintingPosition = { x: 0, y: 0 }
        this.canvas = new paper.PaperScope
        this.canvas.setup(canvasEl)
        this._undo = []
        this._redo = []
        // frame resize
        this.canvas.resizeObserver = new ResizeObserver((entries) => {
            entries.forEach(entry => {
                let bbox = entry.target.getBoundingClientRect()
                if (this.canvas) {
                    this.canvas.view.setViewSize(new paper.Size(bbox.width, bbox.height - 120))
                    this.fitToScreen()
                }
            })
        })
        this.canvas.resizeObserver.observe(wrapperEl)
        this.initZoom()
        this.initSelection()
    }
    uuidv4() {
        return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        )
    }
    haveArtwork() {
        return this.canvas.project.activeLayer.children.find(child => child.data?.type === 'artwork')
    }
    fitToView(options) {
        this.canvas.view.viewSize = options.viewSize
        this.canvas.view.zoom = options.zoom
        this.canvas.view.center = options.center
        this.canvas.view.update()
    }
    fitToScreen(bounds) {
        this.canvas.view.update()
        let viewBounds = this.canvas.view.bounds
        let layerBounds = bounds ?? this.canvas.project.activeLayer?.firstChild?.bounds
        if (layerBounds?.width > 0) {
            let scaleRatio = Math.min(
                viewBounds.width / layerBounds.width,
                viewBounds.height / layerBounds.height
            )
            this.canvas.view.translate(
                viewBounds.center.subtract(layerBounds.center)
            )
            this.canvas.view.scale(scaleRatio)
        }
        this.updateActiveSelection()
        this.updateThickness()
        return this
    }
    focus() {
        if (!this.activeSelection || !this.activeSelection?.data?.focusable) return
        const uuid = this.activeSelection?.data?.uuid
        this.canvas.project.activeLayer.children.forEach(child => {
            if (child.data?.uuid !== uuid && child.data?.type !== 'handle') {
                child.opacity = 0.3
            }
        })
    }
    unFocus() {
        this.canvas.project.activeLayer.children.forEach(child => {
            if (child !== this.activeSelection && child.data?.type !== 'handle') {
                child.opacity = 1
            }
        })
    }
    updateDrawings() {
        this.drawings = this.canvas.project.activeLayer.children.filter(child => child.data?.type === 'artwork' || child.data?.type === 'frame')
    }
    initZoom() {
        let onPointerDown = {
            zoomDistanceStart: null,
            zoomDistanceEnd: null
        }
        if (!this.canvasEl) throw new Error('No canvas container element')
        this.canvasEl.addEventListener('wheel', (event) => {
            event.preventDefault()
            event.stopImmediatePropagation()
            if (!this.canvas) return
            let zoomFactor = 1.1
            let oldZoom = this.canvas.view.zoom
            let oldCenter = this.canvas.view.center
            let mousePosition = this.canvas.view.viewToProject(new paper.Point(event.offsetX, event.offsetY))
            let step = Math.abs(event.deltaY) > 30 ? event.deltaY < 0 ?
                oldZoom - (oldZoom * zoomFactor) :
                oldZoom - (oldZoom / zoomFactor) : event.deltaY * 0.01
            let zoomValue = this.canvas.view.zoom - step
            this.canvas.view.zoom = Math.max(this.minZoom, Math.min(zoomValue, this.maxZoom))
            if (this.selectionTool) {
                this.selectionTool.minDistance = 1 / Math.max(1, this.canvas.view.zoom)
            }
            this.updateThickness()
            this.canvas.view.center = this.canvas.view.center.add(mousePosition.subtract(oldCenter).multiply(1 - (oldZoom / this.canvas.view.zoom)))
            if (this.activeSelection) {
                this.updateResizeHandles(this.activeSelection)
            }
        })
        this.canvasEl.addEventListener('touchstart', (event) => {
            if (event.touches.length > 1) {
                event.preventDefault()
                event.stopImmediatePropagation()
                this.discardActiveSelection()
                let dx = event.touches[0].pageX - event.touches[1].pageX;
                let dy = event.touches[0].pageY - event.touches[1].pageY;
                onPointerDown.zoomDistanceEnd = onPointerDown.zoomDistanceStart = Math.sqrt(
                    dx * dx + dy * dy
                )
            }
        })
        this.canvasEl.addEventListener('touchmove', (event) => {
            if (event.touches.length > 1) {
                event.preventDefault()
                event.stopImmediatePropagation()
                let dx = event.touches[0].pageX - event.touches[1].pageX
                let dy = event.touches[0].pageY - event.touches[1].pageY
                onPointerDown.zoomDistanceEnd = Math.sqrt(dx * dx + dy * dy)
                let factor =
                    onPointerDown.zoomDistanceStart / onPointerDown.zoomDistanceEnd
                onPointerDown.zoomDistanceStart = onPointerDown.zoomDistanceEnd
                this.canvas.view.zoom = Math.max(this.minZoom, Math.min(this.canvas.view.zoom / factor, this.maxZoom))
                this.updateThickness()
                this.canvas.view.zoom._needsUpdate = true
                this.discardActiveSelection()
                this.canvas.view.zoom.update()
            }
        })
        this.canvasEl.addEventListener('touchend', () => {
            onPointerDown.zoomDistanceStart = onPointerDown.zoomDistanceEnd = 0
        })
        return this
    }
    updateThickness() {
        this.canvas.project.activeLayer.children.forEach(child => {
            if (child.data?.type === 'handle') {
                const size = child.data.size ?? 30
                if (!child.data?.ignoreZoom) {
                    child.scale(size / (child.bounds.width * this.canvas.view.zoom))
                    child.strokeWidth = 1 / this.canvas.view.zoom
                }
                child.fontSize = 15 / this.canvas.view.zoom
            }
        })
    }
    getResizeHandles() {
        return [{
            name: 'topLeft',
            opposite: 'bottomRight',
            cursor: 'nw-resize'
        },
        {
            name: 'topRight',
            opposite: 'bottomLeft',
            cursor: 'ne-resize'
        },
        {
            name: 'bottomRight',
            opposite: 'topLeft',
            cursor: 'se-resize'
        },
        {
            name: 'bottomLeft',
            opposite: 'topRight',
            cursor: 'sw-resize'
        },
        {
            name: 'leftCenter',
            opposite: 'rightCenter',
            cursor: 'w-resize'
        },
        {
            name: 'topCenter',
            opposite: 'bottomCenter',
            cursor: 'n-resize'
        },
        {
            name: 'rightCenter',
            opposite: 'leftCenter',
            cursor: 'e-resize'
        },
        {
            name: 'bottomCenter',
            opposite: 'topCenter',
            cursor: 's-resize'
        }
        ]
    }
    zoomToPainting(painting) {
        if (!(painting instanceof paper.Frame || painting instanceof paper.Artwork) || !this.isMobile) return
        const bounds = painting.frame?.strokeBounds ?? painting.strokeBounds
        this.fitToScreen(new paper.Rectangle(bounds.topLeft.subtract(new paper.Point(bounds.size.width / 2, bounds.size.height / 2)),
            bounds.bottomRight.add(new paper.Point(bounds.size.width / 2, bounds.size.height / 2))))
    }
    setActiveSelection(drawing, force) {
        this.discardActiveSelection()
        if ((drawing instanceof paper.Frame || drawing instanceof paper.Artwork) && this.isMobile) { // && this.isMobile
            this.shouldZoomToPainting = true
            this.shouldZoomFitActionCoords = {
                viewSize: new paper.Size(this.canvas.view.viewSize.width, this.canvas.view.viewSize.height),
                center: new paper.Point(this.canvas.view.center.x, this.canvas.view.center.y),
                zoom: this.canvas.view.zoom
            }
        }
        this.shouldZoomFitAction = false

        if (force) {
            this.activeSelection = drawing
        } else {
            this.activeSelection = (drawing.data?.type === 'artwork' || drawing.data?.type === 'matting') && drawing.frame ? drawing.frame : drawing
        }

        this.activeSelection._selected = true // needed for internal draw logic such as clip region, etc.
        this.createResizeHandles(this.activeSelection)
        this.updateDrawings()
        this.updateActiveSelection()
        this.focus()
        this.interface.updateSelectionPane(this.activeSelection.data?.pane)
        this.interface.updateToolBox()
    }
    updateActiveSelection() {
        if (!this.activeSelection) return
        this.updateResizeHandles(this.activeSelection)
    }
    discardActiveSelection() {
        if (this.activeSelection) {
            this.unFocus()
            this.removeResizeHandles(this.activeSelection)
            this.activeSelection._selected = false // needed for internal draw logic such as clip region, etc.
            if (this.activeSelection.artwork) this.activeSelection.artwork._selected = false // needed for internal draw logic such as clip region, etc.
        }
        this.shouldZoomFitAction = this.activeSelection ? true : false
        this.activeSelection = null
        if (this.interface) this.interface.updateSelectionPane(this.activeSelection)
        if (this.interface) this.interface.updateToolBox()
    }
    createResizeHandles(selection) {
        if (selection?.data?.type === 'line') return
        this.removeResizeHandles(selection)
        if (!selection?.data) return
        if (selection.data?.disableResize) return
        selection._eligibleForHandlesIntersection = false // need for handles intersection hide logic
        selection.onMouseEnter = () => {
            if (this.canvasEl) this.canvasEl.style.cursor = 'grab'
        }
        selection.onMouseUp = () => {
            if (this.canvasEl) this.canvasEl.style.cursor = 'grab'
            if (selection._snapShotDragEvent) {
                this.snapshot()
            }
            delete selection._snapShotDragEvent
        }
        selection.onMouseDrag = () => {
            if (this.canvasEl) this.canvasEl.style.cursor = 'grabbing'
        }
        selection.onMouseLeave = () => {
            if (this.canvasEl) this.canvasEl.style.cursor = 'default'
        }
        selection.mouseDragEvent = (event) => {
            if (selection.data.locked) return
            selection._snapShotDragEvent = true
            selection.applyBoundsTransformation?.(event.delta)
            this.updateResizeHandles(selection)
            this.shouldZoomToPainting = false // need for zooming on mobile
        }
        const isMatting = selection.data?.type === 'matting'
        const handleRadius = isMatting ? 5 : 10
        const handles = this.getResizeHandles()
        if (selection.data?.type === 'artwork') {
            handles.length = 4
        }
        selection._handles = []
        handles.forEach(handle => {
            let handleEl = new paper.Path.Circle({
                center: selection.bounds[handle.name],
                radius: handleRadius / this.canvas.view.zoom,
                fillColor: '#037171',
                strokeColor: '#fff',
                opacity: isMatting ? 0.5 : 1,
                locked: isMatting ? true : false,
                strokeWidth: 1 / this.canvas.view.zoom,
                ref: selection,
                data: {
                    type: 'handle',
                    size: handleRadius * 2
                }
            })
            handleEl.onMouseEnter = () => {
                this.canvasEl.style.cursor = isMatting ? 'not-allowed' : handle.cursor
            }
            handleEl.onMouseLeave = () => {
                this.canvasEl.style.cursor = 'default'
            }
            handleEl.mouseDragEvent = (event) => {
                let isDotCircle = selection.data.type === 'dotCircle' // only allow resizing same aspect ratio
                let isArtwork = selection.data?.type === 'artwork' //(selection.rotation !== 0 || selection.data?.matrixRotation !== 0) || selection.data.type === 'text' // only allow resizing same aspect ratio
                let xHandles = ['topLeft', 'topRight', 'bottomRight', 'bottomLeft', 'leftCenter', 'rightCenter']
                let yHandles = ['topLeft', 'topRight', 'bottomRight', 'bottomLeft', 'topCenter', 'bottomCenter']
                let oppositeXHandles = ['topLeft', 'leftCenter', 'topCenter', 'bottomLeft']
                let centerXHandles = ['leftCenter', 'rightCenter']
                let centerYHandles = ['topCenter', 'bottomCenter']
                let originalBounds = new paper.Rectangle(selection.bounds.topLeft, selection.bounds.bottomRight)
                let handleBounds = oppositeXHandles.includes(handle.opposite) ? event.point.subtract(selection.bounds[handle.opposite]) : selection.bounds[handle.opposite].subtract(event.point)
                let frameLength = selection.data.type === 'frame' ? selection.length + 0.25 : selection.frame ? selection.frame.length + 0.25 : 0
                let maxAvailableSizeX = selection.data.type === 'frame' || !selection.frame ? Math.ceil((this.constants.maxPaintingSize - frameLength) / this.pxPerCm) : Math.max(handleBounds.x, this.constants.minArtworkSize / this.pxPerCm)
                let maxAvailableSizeY = selection.data.type === 'frame' || !selection.frame ? Math.ceil((this.constants.maxPaintingSize - frameLength) / this.pxPerCm) : Math.max(handleBounds.y, this.constants.minArtworkSize / this.pxPerCm)
                let availableLength = selection.data.type === 'frame' ? selection.getAvailableBounds() : selection.bounds
                let diffX = xHandles.includes(handle.name) && Math.min(maxAvailableSizeX, Math.max(handleBounds.x, this.constants.minArtworkSize / this.pxPerCm, Math.abs(availableLength.width - this.constants.minArtworkSize / this.pxPerCm - selection.bounds.width))) / originalBounds.width
                let diffY = yHandles.includes(handle.name) && Math.min(maxAvailableSizeY, Math.max(handleBounds.y, this.constants.minArtworkSize / this.pxPerCm, Math.abs(availableLength.height - this.constants.minArtworkSize / this.pxPerCm - selection.bounds.height))) / originalBounds.height
                const uniScaling = selection.data?.uniScaling
                let maxFrameLimit = false
                if (centerXHandles.includes(handle.name) && diffX) {
                    selection.scale(diffX, uniScaling ? diffX : 1, selection.bounds[handle.opposite])
                    if (selection.artwork && selection.getAvailableBounds().rightCenter.x > selection.artwork.bounds.rightCenter.x) {
                        const diffPosition = selection.getAvailableBounds().rightCenter.x - selection.artwork.bounds.rightCenter.x
                        selection.scale((selection.bounds.width - diffPosition) / selection.bounds.width, 1, selection.bounds[handle.opposite])
                    }
                    if (selection.artwork && selection.getAvailableBounds().leftCenter.x < selection.artwork.bounds.leftCenter.x) {
                        const diffPosition = selection.artwork.bounds.leftCenter.x - selection.getAvailableBounds().leftCenter.x
                        selection.scale((selection.bounds.width - diffPosition) / selection.bounds.width, 1, selection.bounds[handle.opposite])
                    }
                } else if (centerYHandles.includes(handle.name) && diffY) {
                    selection.scale(uniScaling ? diffY : 1, diffY, selection.bounds[handle.opposite])
                    // limit frame to artwork bounds
                    if (selection.artwork && selection.getAvailableBounds().bottomCenter.y > selection.artwork.bounds.bottomCenter.y) {
                        const diffPosition = selection.getAvailableBounds().bottomCenter.y - selection.artwork.bounds.bottomCenter.y
                        selection.scale(1, (selection.bounds.height - diffPosition) / selection.bounds.height, selection.bounds[handle.opposite])
                    }
                    // limit frame to artwork bounds
                    if (selection.artwork && selection.getAvailableBounds().topCenter.y < selection.artwork.bounds.topCenter.y) {
                        const diffPosition = selection.artwork.bounds.topCenter.y - selection.getAvailableBounds().topCenter.y
                        selection.scale(1, (selection.bounds.height - diffPosition) / selection.bounds.height, selection.bounds[handle.opposite])
                    }
                } else {
                    let minAvailableLength = Math.min(Math.abs(availableLength.width - this.constants.minArtworkSize / this.pxPerCm - selection.bounds.width), Math.abs(availableLength.height - this.constants.minArtworkSize / this.pxPerCm - selection.bounds.height))
                    let minAvailableWidth = Math.min(selection.bounds.width, selection.bounds.height)
                    let ratio = Math.min(1, minAvailableWidth / minAvailableLength)
                    if ((diffX ?? diffY) < 1 && ratio < 1) {

                    } else {
                        let diff = diffX ?? diffY
                        let axis = diffX ? { d: 'x', s: 'width' } : { d: 'y', s: 'height' }
                        let eligibleArtworkScale = Math.abs(1 - diff) > 0.0000001
                        if (selection.data?.type === 'artwork' && selection.frame) {
                            let edgeBounds = selection.bounds[handle.name]
                            let availableBounds = selection.frame?.getAvailableBounds()[handle.name] ?? selection.bounds[handle.name]
                            let diffBounds = handle.name === 'bottomRight' || handle.name === 'bottomLeft' ? edgeBounds.subtract(availableBounds) : availableBounds.subtract(edgeBounds)
                            //let scaledDiffBounds = availableBounds.divide(diff).subtract(edgeBounds)
                            if (handle.name === 'topLeft' && diff < 1 &&  (event.point.x > availableBounds.x || diffBounds.y < selection.frame.length / this.pxPerCm / 4)) {
                                console.log('top left trigger')
                                diff = 1
                            }
                            if (handle.name === 'topRight' && diff < 1 &&  (event.point.x < availableBounds.x || diffBounds.y < selection.frame.length / this.pxPerCm / 4)) {
                                console.log('top right trigger')
                                diff = 1
                            }
                            if (handle.name === 'bottomLeft' && diff < 1 &&  (event.point.x > availableBounds.x || diffBounds.y < selection.frame.length / this.pxPerCm / 4)) {
                                console.log('bottom left trigger')
                                diff = 1
                            }
                            if (handle.name === 'bottomRight' && diff < 1 &&  (event.point.x < availableBounds.x || diffBounds.y < selection.frame.length / this.pxPerCm / 4)) {
                                console.log('bottom right trigger')
                                diff = 1
                            }
                        }
                        selection.scale(diff, selection.bounds[handle.opposite])
                        if (selection.artwork && eligibleArtworkScale) {
                            let artworkDiff = oppositeXHandles.includes(handle.opposite) ? event.point.subtract(new paper.Point(selection.cumulativeLength / this.pxPerCm / 2, selection.cumulativeLength / this.pxPerCm / 2)).subtract(selection.getAvailableBounds()[handle.opposite]) : (selection.getAvailableBounds()[handle.opposite]).subtract(event.point.add(new paper.Point(selection.cumulativeLength / this.pxPerCm / 2, selection.cumulativeLength / this.pxPerCm / 2)))
                            selection.artwork.scale(artworkDiff[axis.d] / selection.artwork.clip.size[axis.s], selection.getAvailableBounds()[handle.opposite])
                            // size aici posibil trebuie de sters, si de implementat limita pentru frame limit X si Y separat.
                            if (!selection.artwork.bounds.contains(selection.getAvailableBounds())) {
                                const bounds = new paper.Rectangle(selection.getAvailableBounds().topLeft.subtract(1, 1), selection.getAvailableBounds().bottomRight.add(1, 1))
                                selection.artwork.fitBounds(bounds, true)
                            }
                        }
                    }
                }
                selection.applyBoundsTransformation?.({ x: 0, y: 0 })
                this.updateResizeHandles(selection)
                // update interface size
                this.interface.updateSelectionPane(selection.data?.pane)
                this.shouldZoomToPainting = false // need for zooming on mobile
                selection._selected = true
            }
            handleEl.mouseUpEvent = () => {
                this.snapshot()
            }
            selection._handles.push(handleEl)

        })
    }
    updateResizeHandles(selection) {
        if (Array.isArray(selection._handles)) {
            let handles = this.getResizeHandles()
            let intersection = false
            for (let i = 0; i < selection._handles.length; i++) {
                intersection = selection._handles.find(_handle => _handle !== selection._handles[i] && _handle.bounds.intersects(selection._handles[i].bounds))
                if (intersection) break
            }
            selection._handles.forEach((handle, index) => {
                handle.visible = !selection?.data?.locked && !intersection
                handle.position = selection.bounds[handles[index].name]
            })
        }
        this.interface.updateToolBox()
    }
    removeResizeHandles(selection) {
        if (Array.isArray(selection._handles)) {
            selection._handles.forEach(handle => {
                handle.remove()
            })
        }
    }
    getClosestVisibleBound(selection) {
        if (!selection) return new paper.Point(0, 0)
        const boundsList = [selection.bounds.topRight.add(new paper.Point(45 / this.canvas.view.zoom, -45 / this.canvas.view.zoom)),
        selection.bounds.topLeft.add(new paper.Point(-45 / this.canvas.view.zoom, -45 / this.canvas.view.zoom)),
        selection.bounds.bottomRight.add(new paper.Point(45 / this.canvas.view.zoom, 45 / this.canvas.view.zoom)),
        selection.bounds.bottomLeft.add(new paper.Point(-45 / this.canvas.view.zoom, 45 / this.canvas.view.zoom))]
        const closestVisible = boundsList.find(bound => bound.isInside(this.canvas.view.bounds))
        return closestVisible
    }
    getClosestInternalVisibleBound(selection) {
        if (!selection) return new paper.Point(0, 0)
        const boundsList = [selection.bounds.topRight.add(new paper.Point(-30 / this.canvas.view.zoom, -30 / this.canvas.view.zoom)),
        selection.bounds.topLeft.add(new paper.Point(30 / this.canvas.view.zoom, -30 / this.canvas.view.zoom)),
        selection.bounds.bottomRight.add(new paper.Point(-30 / this.canvas.view.zoom, 30 / this.canvas.view.zoom)),
        selection.bounds.bottomLeft.add(new paper.Point(30 / this.canvas.view.zoom, 30 / this.canvas.view.zoom))]
        const closestVisible = boundsList.find(bound => bound.isInside(this.canvas.view.bounds))
        return closestVisible
    }
    isSelectableDrawing(drawing) {
        if (!drawing?.data) return
        return drawing.data.type === 'artwork' || drawing.data.type === 'frame' || drawing.data.type === 'matting' || drawing.data.type === 'bg-image'
    }
    initSelection() {
        this.selectionTool = new paper.Tool({
            minDistance: 1 / Math.max(1, this.canvas.view.zoom),
            name: 'Selection'
        })

        this.selectionTool.onMouseDown = (event) => {
            this.canvasEl.focus()
            this.selectionTool._mouseDown = true
            let hitResult = this.canvas.project.hitTest(event.point, {
                segments: true,
                stroke: true,
                fill: true,
                tolerance: 5 / Math.max(1, this.canvas.view.zoom)
            })
            this.selectionTool._hitResult = { item: hitResult?.item }
            // if no hit detection, set activeSelectionHandler flag && remove activeSelection if any
            if (!this.selectionTool?._hitResult?.item) {
                this.discardActiveSelection()
                console.log('handle case when no hit detection and/or activeSelection')
                return
            }
            // if hit detection is activeSelection
            if (this.activeSelection && this.activeSelection === this.selectionTool?._hitResult?.item) {
                this.selectionTool._hitResult = {
                    item: this.activeSelection
                }
                console.log('handle case when  hit detection is current activeSelection')
                return
            }
            // if hit detection reference is activeSelection, we use it for handles
            if (this.activeSelection && this.selectionTool?._hitResult?.item?.ref === this.activeSelection) {
                console.log('handle case when  hit detection reference is current activeSelection')
                return
            }
            // handle case when hit detection can be selectable
            if (this.isSelectableDrawing(this.selectionTool?._hitResult?.item)) {
                this.setActiveSelection(this.selectionTool?._hitResult?.item)
                this.selectionTool._hitResult = {
                    item: this.activeSelection
                }
                console.log('handle case when hit detection can be selectable')
                return
            }
            // handle case when hit detection reference can be selectable
            if (this.isSelectableDrawing(this.selectionTool?._hitResult?.item?.ref)) {
                this.setActiveSelection(this.selectionTool?._hitResult?.item?.ref)
                this.selectionTool._hitResult = {
                    item: this.activeSelection
                }
                console.log('handle case when hit detection reference can be selectable')
                return
            }
        }

        this.selectionTool.onMouseDrag = (event) => {
            // handle pan
            if (!this.selectionTool._hitResult?.item && this.selectionTool._mouseDown) {
                this.canvas.view.center = this.canvas.view.center.add(event.downPoint.subtract(event.point))
                this.shouldZoomToPainting = false // need for zooming on mobile
                return
            }
            // trigger internal drawing/handle events
            if (typeof this.selectionTool?._hitResult?.item?.mouseDragEvent === 'function') {
                this.selectionTool._hitResult.item.mouseDragEvent(event)
                return
            }
        }

        this.selectionTool.onMouseUp = (event) => {
            // disable activeSelectionRect flag
            delete this.selectionTool.allowActiveSelectionRect
            // trigger internal drawing/handle events
            if (this.selectionTool._hitResult && this.selectionTool._hitResult.item && typeof this.selectionTool._hitResult.item.mouseUpEvent === 'function') {
                this.selectionTool._hitResult.item.mouseUpEvent(event)
            }
            delete this.selectionTool._hitResult
            delete this.selectionTool._mouseDown
            if (this.shouldZoomToPainting) {
                if (this.shouldZoomFitAction) {
                    this.fitToView(this.shouldZoomFitActionCoords)
                    this.shouldZoomToPainting = false
                    delete this.shouldZoomFitAction
                } else
                    if (this.activeSelection) {
                        this.zoomToPainting(this.activeSelection)
                    }
            }
        }

        this.lineTool = new paper.Tool({
            minDistance: 1 / Math.max(1, this.canvas.view.zoom),
            name: 'Line'
        })
        this.lineTool.onMouseDown = (event) => {
            if (this.scale) this.removeDrawing(this.scale)
        }
        this.lineTool.onMouseDrag = (event) => {
            if (!this.lineTool.path) {
                this.lineTool.path = new paper.Path({
                    segments: [event.point, event.point],
                    strokeColor: '#037171',
                    strokeWidth: 1 / this.canvas.view.zoom,
                    strokeCap: 'round',
                    strokeJoin: 'round',
                    data: {
                        type: 'line'
                    }
                });
                this.createPathHandles(this.lineTool.path, true)
                this.scale = this.lineTool.path
            }
            if (this.lineTool.path) {
                this.hideMeasureInfo()
                this.lineTool.path.lastSegment.point = event.point
                this.updateHandlesPosition(this.lineTool.path)
                this.updatePathText(this.lineTool.path)
            }
        }
        this.lineTool.onMouseUp = () => {
            if (this.lineTool.path) {
                this.setPxPerCm(this.wallSize / this.lineTool.path.length)
                this.updatePathText(this.lineTool.path)
                this.interface.updateSelectionPane('scale')
                this.selectionTool.activate()
                delete this.lineTool.path
            }
        }
    }
    createPathHandles(path) {
        const handleSize = 20
        if (Array.isArray(path._handles)) {
            path._handles.forEach(handle => {
                handle.remove()
            })
        }
        let firstSegmentHandle = new paper.Path.Rectangle({
            point: path.firstSegment.point,
            size: [handleSize / this.canvas.view.zoom, handleSize / this.canvas.view.zoom],
            fillColor: 'rgba(255,255,255, 0.001)',
            strokeColor: path.strokeColor,
            strokeWidth: 1 / this.canvas.view.zoom,
            visible: true,
            ref: path,
            data: {
                type: 'handle',
                size: 20
            }
        })
        firstSegmentHandle.position = path.firstSegment.point
        firstSegmentHandle.onMouseEnter = () => {
            this.canvasEl.style.cursor = 'move'
        }
        firstSegmentHandle.onMouseLeave = () => {
            this.canvasEl.style.cursor = 'default'
        }
        firstSegmentHandle.onMouseDown = () => {
            this.interface.updateSelectionPane('scale')
        }
        firstSegmentHandle.mouseDragEvent = (event) => {
            if (path.data.locked) return
            let position = event.point
            path.firstSegment.point = position
            firstSegmentHandle.position = position
            this.updatePathText(path)
        }
        firstSegmentHandle.mouseUpEvent = () => {
            this.setPxPerCm(this.wallSize / path.length)
        }

        let secondSegmentHandle = new paper.Path.Rectangle({
            point: path.lastSegment.point,
            size: [handleSize / this.canvas.view.zoom, handleSize / this.canvas.view.zoom],
            fillColor: 'rgba(255,255,255, 0.001)',
            strokeColor: path.strokeColor,
            strokeWidth: 1 / this.canvas.view.zoom,
            visible: true,
            ref: path,
            data: {
                type: 'handle',
                size: 20
            }
        })
        secondSegmentHandle.position = path.lastSegment.point
        secondSegmentHandle.onMouseDown = () => {
            this.interface.updateSelectionPane('scale')
        }
        secondSegmentHandle.onMouseEnter = () => {
            this.canvasEl.style.cursor = 'move'
        }
        secondSegmentHandle.onMouseLeave = () => {
            this.canvasEl.style.cursor = 'default'
        }
        secondSegmentHandle.mouseDragEvent = (event) => {
            if (path.data.locked) return
            let position = event.point
            path.lastSegment.point = position
            secondSegmentHandle.position = position
            this.updatePathText(path)
        }
        secondSegmentHandle.mouseUpEvent = () => {
            this.setPxPerCm(this.wallSize / path.length)
        }
        path._handles = [firstSegmentHandle, secondSegmentHandle]
        this.updatePathText(path)
        this.updateThickness()
    }
    updateHandlesPosition(path) {
        if (path._handles) {
            path.segments.forEach((segment, index) => {
                path._handles[index].position = segment.point
            })
        }
    }
    updatePathText(path) {
        if (path.data.type !== 'line') return
        if (path._text) path._text.remove()
        let position = new paper.Point(0, 0)
        path._text = this.canvas.project.activeLayer.insertChild(this.canvas.project.activeLayer.children.length - 1, new paper.PointText({
            point: position,
            content: `${this.wallSize} cm`,
            locked: true,
            fillColor: '#037171', //path.strokeColor,
            fontSize: 20 / this.canvas.view.zoom,
            justification: 'center',
            ref: path,
            visible: path.visible,
            data: {
                type: 'util'
            }
        }))
        if (Array.isArray(path.curves) && path.curves[0]) {
            let vector = path.segments[1].point.subtract(path.segments[0].point)
            path._text.rotate(-path._text.rotation + vector.angle)
            let visibleText = Math.abs(path._text.rotation) > 90
            if (visibleText) {
                path._text.rotate(180)
            }
            let center = path.curves[0].getLocationAtTime(0.5).point
            // y-value measure text
            let vector2 = center.add(new paper.Point(20 / this.canvas.view.zoom, 20 / this.canvas.view.zoom)).subtract(center)
            vector2.angle = visibleText ? vector.angle + 90 : vector.angle - 90
            position = center.add(vector2)
        }
        path._text.position = position

    }
    removeDrawing(drawing) {
        if (Array.isArray(drawing._handles)) {
            drawing._handles.forEach(handle => {
                handle.remove()
            })
        }
        if (drawing._text) drawing._text.remove()
        if (drawing._dot) drawing._dot.remove()
        if (drawing._leftLine) drawing._leftLine.remove()
        if (drawing._rightLine) drawing._rightLine.remove()
        if (drawing._topLine) drawing._topLine.remove()
        if (drawing._bottomLine) drawing._bottomLine.remove()
        drawing.remove()
    }
    setBgImage(src, wallSize, paintingPosition) {
        return new Promise((resolve, reject) => {
            this.discardActiveSelection()
            const oldBgImage = this.canvas.project.activeLayer.children.find(child => child.data?.type === 'bg-image')
            if (oldBgImage) oldBgImage.remove()
            const bgImage = this.canvas.project.activeLayer.insertChild(0, new paper.Raster({
                source: src,
                crossOrigin: 'anonymous',
                locked: true,
                position: [0, 0],
                data: { type: 'bg-image', pane: 'background', focusable: false, disableResize: true }
            }))
            bgImage.on('load', () => {
                this.wallSize = wallSize
                document.getElementById('wall-size').value = wallSize
                this.setPxPerCm(this.wallSize / bgImage.bounds.size.width)
                this.fitToScreen()
                if (paintingPosition) {
                    this.defaultPaintingPosition = {
                        x: -bgImage.bounds.size.width * paintingPosition[0], y: -bgImage.bounds.size.height * paintingPosition[1]
                    }
                }
                resolve()
            })
            bgImage.on('error', () => {
                reject()
            })
        })
    }
    getArtwork() {
        if (this.activeSelection && this.activeSelection.data?.type === 'artwork') return this.activeSelection
        return this.canvas.project.activeLayer.children.find(child => child.data?.type === 'artwork')
    }
    setArtwork(options) {
        const artwork = this.activeSelection?.data?.type === 'artwork' && this.activeSelection
        if (!artwork) {
            this.addArtwork(options)
            return
        }
        const bounds = new paper.Rectangle(artwork.position, new paper.Size(artwork.bounds.size.width, artwork.bounds.size.height))
        artwork.setSrc(options.src, false, () => {
            if (artwork.frame) {
                artwork.fitBounds(artwork.frame.getAvailableBounds(), true)
                // update clip region
                artwork.setClip({
                    size: artwork.frame.getAvailableBounds().size,
                    offset: artwork.frame.position.subtract(artwork.position)
                })
            } else {
                artwork.fitBounds(bounds, true)
            }
            this.updateActiveSelection()
        })
        this.snapshot()
    }
    initArtworkEvents(artwork) {
        artwork.applyBoundsTransformation = (offset) => {
            const frame = artwork.frame
            // handle case when no frame
            if (!frame) {
                artwork.position = artwork.position.add(offset)
                return
            }
            // size
            if (!artwork.bounds.contains(frame.getAvailableBounds())) {
               // const bounds = new paper.Rectangle(frame.getAvailableBounds().topLeft.subtract(1, 1), frame.getAvailableBounds().bottomRight.add(1, 1))
                //artwork.fitBounds(bounds, true)
            }
            // dragging if before mouse up
            if (artwork._validDragBeforeMouseUp) {
                artwork.position = artwork.position.add(offset)
                frame.position = frame.position.add(offset)
                // update matting
                frame.updateMattingsPosition()
                // update clip region
                artwork.setClip({
                    size: frame.getAvailableBounds().size,
                    offset: frame.position.subtract(artwork.position)
                })
                return
            }
            // x axis
            if (artwork.bounds.left + offset.x < frame.getAvailableBounds().left && artwork.bounds.right + offset.x > frame.getAvailableBounds().right) {
                artwork.position = artwork.position.add(new paper.Point(offset.x, 0))
            }
            // y axis
            if (artwork.bounds.top + offset.y < frame.getAvailableBounds().top && artwork.bounds.bottom + offset.y > frame.getAvailableBounds().bottom) {
                artwork.position = artwork.position.add(new paper.Point(0, offset.y))
            }
            // update clip region
            artwork.setClip({
                size: frame.getAvailableBounds().size,
                offset: frame.position.subtract(artwork.position)
            })
        }
    }
    addArtwork(options) {
        const bgImage = this.canvas.project.activeLayer.children.find(child => child.data?.type === 'bg-image')
        const lastAddedArtwork = this.canvas.project.activeLayer.children.filter(child => child.data?.type === 'artwork')?.reverse()?.find(child => child.data?.type === 'artwork')
        const position = lastAddedArtwork ? lastAddedArtwork.position.add(new paper.Point(lastAddedArtwork.bounds.size.width * 0.6, 0)) : this.canvas.view.center.add(new paper.Point(this.defaultPaintingPosition.x, this.defaultPaintingPosition.y))
        const uuid = this.uuidv4()
        const artwork = new paper.Artwork({
            src: options.src,
            position: [0, 0],
            frame: null,
            data: { type: 'artwork', pane: 'frame', focusable: true, uniScaling: true, uuid: uuid, name: `Tablou ${this.getPaintings().length + 1}`, } // pane can be artwork if frame is added
        })
        artwork.on('load', () => {
            // set default size
            artwork.fitBounds(new paper.Rectangle(position, new paper.Size(this.constants.defaultPaintingSize.width / this.pxPerCm, this.constants.defaultPaintingSize.height / this.pxPerCm)))
            this.initArtworkEvents(artwork)
            this.setActiveSelection(artwork)
            this.snapshot()
        })
    }
    getFrame(uuid) {
        if (this.activeSelection?.data?.type === 'frame') return this.activeSelection
        return uuid ? this.canvas.project.activeLayer.children.find(child => child.data?.type === 'frame' && child.data?.uuid === uuid) : this.canvas.project.activeLayer.children.find(child => child.data?.type === 'frame')
    }
    setFrame(options) {
        const frame = this.activeSelection?.data?.type === 'frame' && this.activeSelection
        if (!frame) {
            this.addFrame(options)
            return
        }
        frame.data.asset = options
        frame.setFrame(options)
        frame.updateMattingsPosition()
        frame.artwork.fitBounds(frame.getAvailableBounds(), true)
        // update clip region
        frame.artwork.setClip({
            size: frame.getAvailableBounds().size,
            offset: frame.position.subtract(frame.artwork.position)
        })
        this.updateActiveSelection()
        this.snapshot()
    }
    removeFrame() {
        const frame = this.getFrame()
        if (!frame) return
        this.snapshot()
        frame.mattings.forEach(matting => {
            matting.remove()
        })
        frame.updateMattingsPosition()
        frame.mattings = []
        let artwork = frame.artwork
        frame.remove()
        artwork.frame = null
        artwork.clip = null
        artwork.data.pane = 'frame'
        this.setActiveSelection(artwork)
    }
    initFrameEvents(frame) {
        frame.applyBoundsTransformation = (offset) => {
            frame.position = frame.position.add(offset)
            frame.updateMattingsPosition()
            frame.artwork.position = frame.artwork.position.add(offset)
            // update clip region
            frame.artwork.setClip({
                size: frame.getAvailableBounds().size,
                offset: frame.position.subtract(frame.artwork.position)
            })
            return
        }
        frame.getAvailableBounds = () => {
            let cumulativeLength = frame.cumulativeLength ?? 0 // from matting
            let defaultOffset = 0//frame.mattings.length > 0 ? 0.5 / this.pxPerCm : 0.1 / this.pxPerCm
            return new paper.Rectangle(frame.bounds.topLeft.add(cumulativeLength / 2 / this.pxPerCm - defaultOffset, cumulativeLength / 2 / this.pxPerCm - defaultOffset), frame.bounds.bottomRight.subtract(cumulativeLength / 2 / this.pxPerCm - defaultOffset, cumulativeLength / 2 / this.pxPerCm - defaultOffset))
        }
        frame.updateMattingsPosition = (matting) => {
            if (frame.mattings?.length < 1) {
                frame.cumulativeLength = frame.length
                return
            }
            let cumulativeLength = frame.length
            let availableLength = Math.min(frame.bounds.size.width * this.pxPerCm, frame.bounds.size.height * this.pxPerCm) - this.constants.minArtworkSize
            frame.mattings.forEach(matting => {
                cumulativeLength += matting.length
                matting.setSize(frame.bounds.size.width - Math.min(cumulativeLength, availableLength) / this.pxPerCm, frame.bounds.size.height - Math.min(cumulativeLength, availableLength) / this.pxPerCm)
                matting.position = frame.position
                cumulativeLength += matting.length
            })
            frame.cumulativeLength = cumulativeLength
        }
    }
    calcAvailableMattingLength(frame) {
        if (!frame?.mattings || frame?.mattings?.length < 1) return
        let availableSize = Math.min(frame.getAvailableBounds().size.width, frame.getAvailableBounds().size.height) * this.pxPerCm
        let matting = this.getMatting()
        document.getElementById('matting-length-slider').setAttribute('max', availableSize / 2 + matting.length - this.constants.minArtworkSize / 2)
    }
    addFrame(options) {
        const artwork = (this.activeSelection?.data?.type === 'artwork' && this.activeSelection) ?? this.getArtwork()
        if (!artwork) return
        // add frame
        let frame = new paper.Frame({
            position: artwork.position,
            width: Math.min((this.constants.maxPaintingSize - options.length) / this.pxPerCm, artwork.bounds.width + options.length / this.pxPerCm),
            height: Math.min((this.constants.maxPaintingSize - options.length) / this.pxPerCm, artwork.bounds.height + options.length / this.pxPerCm),
            length: options.length,
            strokeColor: '#000', // temp solution for hitbox, need rework
            strokeWidth: options.length / this.pxPerCm, // temp solution for hitbox, need rework
            pxPerCm: this.pxPerCm,
            artwork: artwork,
            mattings: [],
            glass: {
                src: 'https://i.imgur.com/0Kq6UkP.png',
                opacity: 0.15,
                type: 'plexi',
                pricePerSquareCm: 0
            },
            src: options.src,
            data: { type: 'frame', pane: 'frame', focusable: true, uuid: artwork.data.uuid, name: artwork.data.name, asset: options }
        })
        this.initFrameEvents(frame)
        // change artwork selection pane from frame to artwork
        artwork.data.pane = 'artwork'
        // create frame ref for artwork
        artwork.frame = frame
        // rename artwork name from Tablou-Canvas to Tablou
        frame.updateMattingsPosition()
        frame.artwork.fitBounds(frame.getAvailableBounds(), true)
        frame.artwork.setClip({
            size: frame.getAvailableBounds().size,
            offset: frame.position.subtract(frame.artwork.position)
        })
        // set active selection
        this.setActiveSelection(frame)
        this.snapshot()
    }
    getMatting() {
        if (this.activeSelection?.data?.type === 'matting') return this.activeSelection
        return this.canvas.project.activeLayer.children.find(child => child.data?.type === 'matting' && child.length > 0)
    }
    setMatting(options) {
        const matting = this.activeSelection?.data?.type === 'matting' && this.activeSelection
        if (!matting) {
            this.addMatting(options)
            return
        }
        matting.data.asset = options
        matting.setMatting(options)
        if (matting.length < 1) matting.setLength(10)
        matting.frame?.updateMattingsPosition(matting)
        matting.frame.artwork.fitBounds(matting.frame.getAvailableBounds(), true)
        // update clip region
        matting.frame.artwork.setClip({
            size: matting.frame.artwork.frame.getAvailableBounds().size,
            offset: matting.frame.artwork.frame.position.subtract(matting.frame.artwork.position)
        })
        this.interface.updateToolBox()
        this.snapshot()
    }
    initMattingEvents(matting) {
        matting.applyBoundsTransformation = (offset) => {
            matting.frame.position = matting.frame.position.add(offset)
            matting.frame.updateMattingsPosition()
            matting.frame.artwork.position = matting.frame.artwork.position.add(offset)
            // update clip region
            matting.frame.artwork.setClip({
                size: matting.frame.getAvailableBounds().size,
                offset: matting.frame.position.subtract(matting.frame.artwork.position)
            })
            return
        }
    }
    addMatting(options) {
        const frame = this.getFrame(this.activeSelection?.data?.uuid)
        if (!frame) return
        // add matting
        if (frame.mattings?.length > 2) return
        const index = frame.mattings?.length > 0 ? frame.mattings[frame.mattings.length - 1].index : frame.index
        let matting = this.canvas.project.activeLayer.insertChild(index, new paper.Matting({
            position: frame.position,
            width: frame.bounds.size.width,
            height: frame.bounds.size.height,
            length: this.constants.defaultMattingSize, // default value
            strokeColor: '#000', // temp solution for hitbox, need rework
            strokeWidth: this.constants.defaultMattingSize / this.pxPerCm, // temp solution for hitbox, need rework
            pxPerCm: this.pxPerCm,
            frame: frame,
            src: options.src,
            data: { type: 'matting', pane: 'matting', focusable: true, disableResize: false, uuid: frame.data.uuid, name: frame.data.name, asset: options }
        }))
        frame.mattings.push(matting)
        frame.updateMattingsPosition()
        frame.artwork.fitBounds(frame.getAvailableBounds(), true)
        // update clip region
        frame.artwork.setClip({
            size: frame.getAvailableBounds().size,
            offset: frame.position.subtract(frame.artwork.position)
        })
        this.initMattingEvents(matting)
        // set active selection
        this.setActiveSelection(matting, true)
        this.snapshot()
    }
    removeMatting() {
        const matting = this.getMatting()
        if (!matting) return
        this.snapshot()
        const index = matting.frame.mattings.indexOf(matting)
        if (index > -1) {
            matting.frame.mattings.splice(index, 1)
        }
        this.discardActiveSelection()
        matting.remove()
        matting.frame?.updateMattingsPosition()
        matting.frame.artwork.fitBounds(matting.frame.getAvailableBounds(), true)
        // update clip region
        matting.frame.artwork.setClip({
            size: matting.frame.getAvailableBounds().size,
            offset: matting.frame.position.subtract(matting.frame.artwork.position)
        })
        if (matting.frame.mattings.length > 0) {
            this.setActiveSelection(matting.frame.mattings[index - 1] || matting.frame.mattings[0], true)
        } else {
            this.setActiveSelection(matting.frame)
        }
        this.interface.updateSelectionPane('matting')
    }
    setPxPerCm(value) {
        this.pxPerCm = value
        this.updateFramesPxPerCm()
        this.updateMattingsPxPerCm()
    }
    updateFramesPxPerCm() {
        const frames = this.canvas.project.activeLayer.children.filter(child => child.data?.type === 'frame')
        frames && frames.forEach(frame => {
            frame.pxPerCm = this.pxPerCm
            frame.strokeWidth = frame.length / frame.pxPerCm
            frame._changed(9)
        })
        this.canvas.view.update()
    }
    updateMattingsPxPerCm() {
        const mattings = this.canvas.project.activeLayer.children.filter(child => child.data?.type === 'matting')
        mattings && mattings.forEach(matting => {
            matting.pxPerCm = this.pxPerCm
            matting.strokeWidth = matting.length / matting.pxPerCm
            matting._changed(9)
        })
        this.canvas.view.update()
    }
    updateMattingLength(length) {
        const matting = this.getMatting()
        if (!matting) return
        matting.setLength(length)
        matting.frame?.updateMattingsPosition()
        matting.frame.artwork.fitBounds(matting.frame.getAvailableBounds(), true)
        // update clip region
        matting.frame.artwork.setClip({
            size: matting.frame.getAvailableBounds().size,
            offset: matting.frame.position.subtract(matting.frame.artwork.position)
        })
        this.updateActiveSelection()
    }
    updateGlass(options) {
        const frame = this.getFrame()
        if (!frame) return
        frame.setGlass({
            type: options.type,
            opacity: Number(options.opacity),
            pricePerSquareCm: Number(options.price)
        })
        this.updateActiveSelection()
        this.snapshot()
    }
    showMeasureInfo() {
        const bgImage = this.canvas.project.activeLayer.children.find(child => child.data?.type === 'bg-image')
        if (!bgImage) return
        if (this._measureInfo) this._measureInfo.remove()
        this._measureInfo = new paper.PointText({
            point: bgImage.position,
            content: 'Tap and drag to draw measure line',
            locked: true,
            fillColor: '#037171',
            fontSize: bgImage.bounds.size.width / 20,
            justification: 'center',
            data: {
                type: 'util'
            }
        })
        this.canvas.project.activeLayer.children.forEach(child => {
            if (child !== this._measureInfo) {
                child.opacity = 0.3
            }
        })
    }
    hideMeasureInfo() {
        if (this._measureInfo) this._measureInfo.remove()
        this.canvas.project.activeLayer.children.forEach(child => {
            child.opacity = 1
        })
        delete this._measureInfo
    }
    selectPaintingByPaneType(type) {
        const uuid = this.activeSelection?.data?.uuid
        const painting = this.canvas.project.activeLayer.children.find(child => (child.data?.pane === type || child.data?.type === type) && child.data?.uuid === uuid)
        if (!painting) {
            this.interface.updateSelectionPane(type)
            return
        }
        this.setActiveSelection(painting, true)
        this.zoomToPainting(painting)
    }
    updatePaintingName(name) {
        const painting = this.activeSelection
        if (!painting) return
        const paintingItems = this.canvas.project.activeLayer.children.filter(child => child.data?.uuid === painting.data.uuid) ?? []
        paintingItems.forEach(item => {
            item.data.name = name.trim()
        })
        this.updateActiveSelection()
        this.snapshot()
    }
    getPaintings() {
        return this.canvas.project.activeLayer.children.filter(child => child.data?.type === 'artwork') ?? []
    }
    getPaintingPrice(painting) {
        if (!painting) return 0
        const artworkSize = painting.frame?.getAvailableBounds() ?? painting.bounds?.size
        const artworkPricePerSquareCm = painting.data?.asset?.pricePerSquareCm ?? 0
        const frameSize = painting.frame?.strokeBounds?.size ?? painting.bounds?.size
        const framePricePerSquareCm = painting.frame?.data?.asset?.pricePerSquareCm ?? 0
        const glassPricePerSquareCm = painting.frame?.glass?.pricePerSquareCm ?? 0
        const mattings = []
        if (painting.frame?.mattings?.length > 0) {
            painting.frame.mattings.forEach(matting => {
                mattings.push({
                    length: matting.length,
                    pricePerSquareCm: matting.data?.asset?.pricePerSquareCm
                })
            })
        }
        return (frameSize.width * this.pxPerCm) * (frameSize.height * this.pxPerCm) * framePricePerSquareCm
    }
    getTotalPrice() {
        const paintings = this.getPaintings()
        let totalPrice = 0
        paintings.forEach(painting => {
            totalPrice += this.getPaintingPrice(painting)
        })
        return totalPrice
    }
    getPaintingsAsImage() {
        if (!this.canvas?.project?.activeLayer) return []
        const raster = this.canvas.project.activeLayer.rasterize({
            resolution: 40,
            insert: false,
        })
        const paintings = this.getPaintings()
        const paintingsAsImages = []
        paintings.forEach(painting => {
            const strokeBounds = painting.frame?.strokeBounds ?? painting.strokeBounds
            const scaleRatio = raster.internalBounds.size.width / raster.bounds.size.width
            const paintingOffset = strokeBounds.topLeft.subtract(raster.bounds.topLeft).multiply(scaleRatio)
            const paintingSize = new paper.Size(strokeBounds.size.width * scaleRatio, strokeBounds.size.height * scaleRatio)
            const rasterInternalOffset = raster.internalBounds.topLeft.add(new paper.Point(raster.internalBounds.size.width / 2, raster.internalBounds.size.height / 2))
            const bounds = new paper.Rectangle({ point: rasterInternalOffset.add(paintingOffset), size: paintingSize })
            paintingsAsImages.push({
                painting: painting,
                price: `${this.getPaintingPrice(painting).toFixed(2)}$`,
                image: raster.getSubCanvas(bounds).toDataURL()
            })
        })
        return paintingsAsImages
    }
    removePainting(painting) {
        const paintingItem = painting ?? this.activeSelection
        if (!paintingItem) return
        this.snapshot()
        if (confirm(`Are you sure you want to remove ${paintingItem.data.name} ?`)) {
            const paintingItems = this.canvas.project.activeLayer.children.filter(child => child.data?.uuid === paintingItem.data.uuid)
            paintingItems.forEach(item => {
                item.remove()
            })
            this.discardActiveSelection()
        }
    }
    paintingToJson(uuid) {
        let listItem = {
            uuid: uuid,
            artwork: null,
            frame: null,
            mattings: [],
        }
        const items = this.canvas.project.activeLayer.children.filter(child => child.data?.uuid === uuid)
        items.forEach(item => {
            if (item.data?.type === 'artwork') {
                listItem.artwork = {
                    data: Object.assign({}, item.data),
                    position: [item.position.x, item.position.y],
                    width: item.bounds.size.width * this.pxPerCm,
                    height: item.bounds.size.height * this.pxPerCm,
                    src: item.src,
                    clip: item.clip ? {
                        size: [item.clip?.size?.width, item.clip?.size?.height],
                        offset: [item.clip?.offset?.x, item.clip?.offset?.y],
                    } : null
                }
            }
            if (item.data?.type === 'frame') {
                listItem.frame = {
                    data: Object.assign({}, item.data),
                    position: [item.position.x, item.position.y],
                    width: item.bounds.size.width * this.pxPerCm,
                    height: item.bounds.size.height * this.pxPerCm,
                    length: item.length,
                    glass: item.glass,
                    src: item.src
                }
            }
            if (item.data?.type === 'matting') {
                listItem.mattings.push({
                    data: Object.assign({}, item.data),
                    position: [item.position.x, item.position.y],
                    width: item.bounds.size.width * this.pxPerCm,
                    height: item.bounds.size.height * this.pxPerCm,
                    length: item.length,
                    src: item.src
                })
            }
        })
        return listItem
    }
    clonePainting(uuid) {
        if (!uuid) return
        const painting = this.paintingToJson(uuid)
        const newUuid = this.uuidv4()
        const offset = painting.frame?.width ?? painting.artwork?.width ?? 0
        painting.uuid = newUuid
        const name = `Tablou ${this.getPaintings().length + 1}`
        if (painting.artwork) {
            painting.artwork.data.uuid = newUuid
            painting.artwork.data.name = name
            painting.artwork.position[0] += offset * 1.1
        }
        if (painting.frame) {
            painting.frame.data.uuid = newUuid
            painting.frame.data.name = name
            painting.frame.position[0] += offset * 1.1
        }
        if (painting.mattings?.length > 0) {
            painting.mattings.forEach(matting => {
                matting.data.uuid = newUuid
                matting.data.name = name
                matting.position[0] += offset * 1.1
            })
        }
        const newPainting = this.fromJson([painting])
        const newPaintingItem = newPainting[0].frame ?? newPainting[0].artwork
        if (newPaintingItem.data?.type === 'artwork') {
            newPaintingItem.on('load', () => {
                this.setActiveSelection(newPaintingItem)
            })
        } else {
            this.setActiveSelection(newPaintingItem)
        }
        this.snapshot()
    }
    toJson() {
        const paintings = this.getPaintings()
        const jsonList = []
        paintings.forEach(painting => {
            jsonList.push(this.paintingToJson(painting.data?.uuid))
        })
        return jsonList
    }
    toJsonWithBg() {
        let image = this.canvas.project.activeLayer.children.find(child => child.data?.type === 'bg-image')
        return {
            bg: image?.source,
            pxPerCm: this.pxPerCm,
            paintings: this.toJson()
        }
    }
    fromJson(paintings) {
        const paintingsList = []
        paintings.forEach(painting => {
            const paintingObject = {
                frame: null,
                artwork: null,
                matting: null,
            }
            if (painting.artwork) {
                paintingObject.artwork = new paper.Artwork({
                    src: painting.artwork.src,
                    position: painting.artwork.position,
                    clip: painting.artwork.clip,
                    data: painting.artwork.data
                })
                paintingObject.artwork.on('load', () => {
                    paintingObject.artwork.scale(painting.artwork.width / this.pxPerCm / paintingObject.artwork.bounds.size.width, painting.artwork.height / this.pxPerCm / paintingObject.artwork.bounds.size.height)
                    // init events
                    this.initArtworkEvents(paintingObject.artwork)
                    // add frame && matting
                    if (painting.frame) {
                        paintingObject.frame = new paper.Frame({
                            position: painting.frame.position,
                            width: painting.frame.width / this.pxPerCm,
                            height: painting.frame.height / this.pxPerCm,
                            length: painting.frame.length,
                            strokeColor: '#000', // temp solution for hitbox, need rework
                            strokeWidth: painting.frame.length / this.pxPerCm, // temp solution for hitbox, need rework
                            pxPerCm: this.pxPerCm,
                            artwork: paintingObject.artwork,
                            glass: painting.frame.glass,
                            mattings: [],
                            src: painting.frame.src,
                            data: painting.frame.data
                        })
                        // function to init frame events
                        this.initFrameEvents(paintingObject.frame)
                        paintingObject.artwork.frame = paintingObject.frame
                    }
                    if (painting.mattings?.length > 0) {
                        painting.mattings.forEach(matting => {
                            const mattingObject = new paper.Matting({
                                position: matting.position,
                                width: matting.width / this.pxPerCm,
                                height: matting.height / this.pxPerCm,
                                length: matting.length,
                                strokeColor: '#000', // temp solution for hitbox, need rework
                                strokeWidth: matting.length / this.pxPerCm, // temp solution for hitbox, need rework
                                pxPerCm: this.pxPerCm,
                                frame: paintingObject.frame,
                                src: matting.src,
                                data: matting.data
                            })
                            // function to init matting events
                            this.initMattingEvents(mattingObject)
                            paintingObject.frame.mattings.push(mattingObject)
                        })
                        paintingObject.frame.updateMattingsPosition()
                    }
                })
            }
            paintingsList.push(paintingObject)
        })
        return paintingsList
    }
    clearPaintings() {
        this.discardActiveSelection()
        let image = this.canvas.project.activeLayer.children.find(child => child.data?.type === 'bg-image')
        this.canvas.project.activeLayer.removeChildren() // clear
        this.canvas.project.activeLayer.addChild(image)
    }
    next() {
        return this.toJson()
    }
    snapshot() {
        if (this.historyNextState) {
            const json = this.historyNextState
            this._undo.push(json)
            this._redo = []
        }
        this.historyNextState = this.next()
    }
    undo() {
        const history = this._undo.pop()
        if (history) {
            this._redo.push(this.next())
            this.historyNextState = history
            this.clearPaintings()
            this.fromJson(history)
            if (this.interface) this.interface.updateSelectionPane(this.activeSelection)
            if (this.interface) this.interface.updateToolBox()
        }
    }
    redo() {
        const history = this._redo.pop()
        if (history) {
            this._undo.push(this.next())
            this.historyNextState = history
            this.clearPaintings()
            this.fromJson(history)
            if (this.interface) this.interface.updateSelectionPane(this.activeSelection)
            if (this.interface) this.interface.updateToolBox()
        }
    }
}