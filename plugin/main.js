const environments = [
    {
        src: 'https://i.imgur.com/KPFoL2H.jpg',
        size: 500
    },
    {
        src: 'https://i.imgur.com/vbxptoG.jpg',
        size: 400
    },
    {
        src: 'https://i.imgur.com/gjx2cEd.jpg',
        size: 300
    }
]

const frames = [
    {
        id: '7021C',
        src: 'https://i.imgur.com/HWppjlF.png',
        length: 2,
        offset: 0.6
    },
    {
        id: '6180zj',
        src: 'https://i.imgur.com/tkRo50f.jpg',
        length: 8.1,
        offset: 0.9
    },
    {
        id: '7455TO',
        src: 'https://i.imgur.com/YbGvFms.png',
        length: 5.6,
        offset: 0.8
    }
]


const defaultWallSize = 300 // cm
const selectionPaneList = {
    'frame': {
        el: document.getElementById('selection-frame-pane'),
        update: function (configurator) {
            const activeSelection = configurator.activeSelection
            if (!activeSelection) return
            const size = {
                width: Math.round(activeSelection.bounds.width * configurator.pxPerCm),
                height: Math.round(activeSelection.bounds.height * configurator.pxPerCm)
            }
            console.log(`${size.width}x${size.height} cm`)
            // this.el.innerHTML = `${size.width}x${size.height} cm`
        }
    },
    'background': {
        update: function (configurator) {
        }
    },
    'scale': {
        update: function (configurator) {
        }
    }
}

class Interface {
    constructor(configurator) {
        this.configurator = configurator
        this.steps = 6
        this.stepsPane = document.getElementById('steps-pane')
        this.stepsCounter = document.getElementById('steps-counter')
        this.prevStepBtn = document.getElementById('prev-step')
        this.nextStepBtn = document.getElementById('next-step')
        this.setStep(1)
    }
    updateSelectionPane(pane) {
        if (!pane) pane = 'background' // default if no selection
        const paneCollection = document.getElementsByClassName('selection-pane-item')
        for (let i = 0; i < paneCollection.length; i++) {
            paneCollection[i].style.display = 'none'
            if (paneCollection[i].getAttribute('type') === pane) {
                paneCollection[i].style.display = 'flex'
                selectionPaneList[pane].update(this.configurator)
            }
        }
    }
    setStep(index) {
        this.stepIndex = Math.max(Math.min(index, this.steps), 1)
        this.prevStepBtn.disabled = this.stepIndex < 2
        this.nextStepBtn.textContent = this.stepIndex >= this.steps ? 'Finish' : 'Next'
        this.configurator.discardActiveSelection()
        const stepCollection = document.getElementsByClassName('step-item')
        for (let i = 0; i < stepCollection.length; i++) {
            stepCollection[i].style.display = 'none'
            if (Number(stepCollection[i].getAttribute('step-index')) === this.stepIndex) {
                stepCollection[i].style.display = 'flex'
            }
        }
        this.stepsCounter.innerHTML = `Step: ${this.stepIndex} / ${this.steps}`
    }
}
class FrameConfigurator {
    constructor(canvasEl, wrapperEl) {
        this.canvasEl = canvasEl
        this.wrapperEl = wrapperEl
        this.drawings = []
        this.wallSize = 300 // cm
        this.pxPerCm = 10
        this.interface = new Interface(this)
        this.canvas = new paper.PaperScope
        this.canvas.setup(canvasEl)
        // frame resize
        this.canvas.resizeObserver = new ResizeObserver((entries) => {
            entries.forEach(entry => {
                let bbox = entry.target.getBoundingClientRect()
                if (this.canvas) {
                    this.canvas.view.setViewSize(new paper.Size(bbox.width, bbox.height))
                    this.fitToScreen()
                }
            })
        })
        this.canvas.resizeObserver.observe(wrapperEl)
        this.initZoom()
        this.initSelection()
    }
    haveArtwork() {
        return this.canvas.project.activeLayer.children.find(child => child.data?.type === 'frame-image')
    }
    fitToScreen() {
        this.canvas.view.update()
        let viewBounds = this.canvas.view.bounds
        let layerBounds = this.canvas.project.activeLayer?.firstChild?.bounds
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
        return this
    }
    focus() {
        if (!this.activeSelection || !this.activeSelection?.data?.focusable) return
        this.canvas.project.activeLayer.children.forEach(child => {
            if (!(child instanceof paper.Group) && child !== this.activeSelection && child.data?.type !== 'handle') {
                child.opacity = 0.5
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
        this.drawings = this.canvas.project.activeLayer.children.filter(child => child.data?.type === 'frame-image' || child.data?.type === 'frame')
    }
    initZoom() {
        let minZoom = 0.1
        let maxZoom = 10
        let onPointerDown = {
            zoomDistanceStart: null,
            zoomDistanceEnd: null
        }
        if (!this.wrapperEl) throw new Error('No canvas container element')
        this.wrapperEl.addEventListener('wheel', (event) => {
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
            this.canvas.view.zoom = Math.max(minZoom, Math.min(zoomValue, maxZoom))
            if (this.selectionTool) {
                this.selectionTool.minDistance = 1 / Math.max(1, this.canvas.view.zoom)
            }
            this.updateThickness()
            this.canvas.view.center = this.canvas.view.center.add(mousePosition.subtract(oldCenter).multiply(1 - (oldZoom / this.canvas.view.zoom)))
            if (this.activeSelection) {
                this.updateResizeHandles(this.activeSelection)
            }
        })
        this.wrapperEl.addEventListener('touchstart', (event) => {
            if (event.touches.length == 2) {
                let dx = event.touches[0].pageX - event.touches[1].pageX;
                let dy = event.touches[0].pageY - event.touches[1].pageY;
                onPointerDown.zoomDistanceEnd = onPointerDown.zoomDistanceStart = Math.sqrt(
                    dx * dx + dy * dy
                )
            }
        })
        this.wrapperEl.addEventListener('touchmove', (event) => {
            if (event.touches.length == 2) {
                let dx = event.touches[0].pageX - event.touches[1].pageX
                let dy = event.touches[0].pageY - event.touches[1].pageY
                onPointerDown.zoomDistanceEnd = Math.sqrt(dx * dx + dy * dy)
                let factor =
                    onPointerDown.zoomDistanceStart / onPointerDown.zoomDistanceEnd
                onPointerDown.zoomDistanceStart = onPointerDown.zoomDistanceEnd
                this.canvas.view.zoom = Math.max(minZoom, Math.min(this.canvas.view.zoom / factor, maxZoom))
                this.updateThickness()
                this.canvas.view.zoom._needsUpdate = true
                this.canvas.view.zoom.update()
                if (this.activeSelection) {
                    this.updateResizeHandles(this.activeSelection)
                }
            }
        })
        this.wrapperEl.addEventListener('touchend', () => {
            onPointerDown.zoomDistanceStart = onPointerDown.zoomDistanceEnd = 0
        })
        return this
    }
    updateThickness() {
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
    setActiveSelection(drawing) {
        this.discardActiveSelection()
        this.activeSelection = drawing
        this.createResizeHandles(this.activeSelection)
        this.updateDrawings()
        this.focus()
        this.interface.updateSelectionPane(this.activeSelection.data?.pane)
    }
    updateActiveSelection() {
        if (!this.activeSelection) return
        this.updateResizeHandles(this.activeSelection)
    }
    discardActiveSelection() {
        if (this.activeSelection) {
            this.unFocus()
            this.removeResizeHandles(this.activeSelection)
        }
        this.activeSelection = null
        // hide scale line when we click somewhere on canvas outside of handles
        if (this.scale) this.removeDrawing(this.scale)
        if (this.interface) this.interface.updateSelectionPane(this.activeSelection)
    }
    createResizeHandles(selection) {
        if (selection?.data?.type === 'line') return
        this.removeResizeHandles(selection)
        if (!selection?.data) return
        if (selection.data?.disableResize) return
        selection.onMouseEnter = () => {
            if (this.wrapperEl) this.wrapperEl.style.cursor = 'grab'
        }
        selection.onMouseUp = () => {
            if (this.wrapperEl) this.wrapperEl.style.cursor = 'grab'
        }
        selection.onMouseDrag = () => {
            if (this.wrapperEl) this.wrapperEl.style.cursor = 'grabbing'
        }
        selection.onMouseLeave = () => {
            if (this.wrapperEl) this.wrapperEl.style.cursor = 'default'
        }
        selection.mouseDragEvent = (event) => {
            if (selection.data.locked) return
            const validTransformation = typeof selection.isWithinBounds === 'function' ? selection.isWithinBounds() : true
            selection.position = selection.position.add(event.delta)
            const validTransformationAfter = typeof selection.isWithinBounds === 'function' ? selection.isWithinBounds() : true
            if (validTransformation && validTransformation !== validTransformationAfter) {
                selection.position = selection.position.subtract(event.delta)
            }
            this.updateResizeHandles(selection)
            selection.emit('modified', event.delta)
        }
        const handleRadius = 5
        const handles = this.getResizeHandles()
        selection._handles = []
        handles.forEach(handle => {
            let handleEl = new paper.Path.Circle({
                center: selection.bounds[handle.name],
                radius: handleRadius / this.canvas.view.zoom,
                fillColor: '#037171',
                strokeColor: '#fff',
                strokeWidth: 1 / this.canvas.view.zoom,
                ref: selection,
                data: {
                    type: 'handle'
                }
            })
            handleEl.onMouseEnter = () => {
                this.wrapperEl.style.cursor = handle.cursor
            }
            handleEl.onMouseLeave = () => {
                this.wrapperEl.style.cursor = 'default'
            }
            handleEl.mouseDragEvent = (event) => {
                let isDotCircle = selection.data.type === 'dotCircle' // only allow resizing same aspect ratio
                let isText = selection.data?.type === 'frame-image' //(selection.rotation !== 0 || selection.data?.matrixRotation !== 0) || selection.data.type === 'text' // only allow resizing same aspect ratio
                let xHandles = ['topLeft', 'topRight', 'bottomRight', 'bottomLeft', 'leftCenter', 'rightCenter']
                let yHandles = ['topLeft', 'topRight', 'bottomRight', 'bottomLeft', 'topCenter', 'bottomCenter']
                let centerXHandles = ['leftCenter', 'rightCenter']
                let centerYHandles = ['topCenter', 'bottomCenter']
                let originalBounds = new paper.Rectangle(selection.bounds.topLeft, selection.bounds.bottomRight)
                let handleBounds = new paper.Rectangle(selection.bounds[handle.opposite], event.point)
                let shiftKey = paper.Key.isDown('shift')
                let diffX = xHandles.includes(handle.name) ? handleBounds.width / originalBounds.width : 1
                let diffY = yHandles.includes(handle.name) ? shiftKey || isDotCircle ? handleBounds.width / originalBounds.height : handleBounds.height / originalBounds.height : 1
                if ((xHandles.includes(handle.name) || yHandles.includes(handle.name) || centerXHandles.includes(handle.name) || centerYHandles.includes(handle.name)) && isText) {
                    selection.scale(diffX, selection.bounds[handle.opposite])
                } else if (centerXHandles.includes(handle.name) && (shiftKey || isDotCircle)) {
                    selection.scale(diffX, selection.bounds[handle.opposite])
                } else if (centerYHandles.includes(handle.name) && (shiftKey || isDotCircle)) {
                    diffY = handleBounds.height / originalBounds.height
                    selection.scale(diffY, selection.bounds[handle.opposite])
                } else {
                    selection.scale(diffX, diffY, selection.bounds[handle.opposite])
                }
                if (selection.data.type === 'frame') {
                    selection.setSize(new paper.Size(selection._size.width * selection.scaling.x, selection._size.height * selection.scaling.y))
                    selection.scaling = { x: 1, y: 1 }
                    selection.emit('modified')
                }
                this.updateResizeHandles(selection)
                // update interface size
                this.interface.updateSelectionPane(selection.data?.pane)
            }
            selection._handles.push(handleEl)

        })
    }
    updateResizeHandles(selection) {
        if (Array.isArray(selection._handles)) {
            let handles = this.getResizeHandles()
            selection._handles.forEach((handle, index) => {
                handle.visible = !selection?.data?.locked
                handle.position = selection.bounds[handles[index].name]
            })
        }
    }
    removeResizeHandles(selection) {
        if (Array.isArray(selection._handles)) {
            selection._handles.forEach(handle => {
                handle.remove()
            })
        }
    }
    isSelectableDrawing(drawing) {
        if (!drawing?.data) return
        return drawing.data.type === 'frame-image' || drawing.data.type === 'frame' || drawing.data.type === 'bg-image'
    }
    initSelection() {
        this.selectionTool = new paper.Tool({
            minDistance: 1 / Math.max(1, this.canvas.view.zoom),
            name: 'Selection'
        })

        this.selectionTool.onMouseDown = (event) => {
            this.wrapperEl.focus()
            this.selectionTool._mouseDown = true
            let hitResult = this.canvas.project.hitTest(event.point, {
                segments: true,
                stroke: true,
                fill: true,
                tolerance: 10 / Math.max(1, this.canvas.view.zoom)
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
        }

        this.lineTool = new paper.Tool({
            minDistance: 1 / Math.max(1, this.canvas.view.zoom),
            name: 'Line'
        })
        this.lineTool.onMouseDown = (event) => {
            if (this.lineTool.shouldFinishNext) return
            if (this.scale) this.removeDrawing(this.scale)
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
        this.lineTool.onMouseMove = (event) => {
            if (this.lineTool.path) {
                this.lineTool.path.lastSegment.point = event.point
                this.updateHandlesPosition(this.lineTool.path)
                this.updatePathText(this.lineTool.path)
            }
        }
        this.lineTool.onMouseUp = () => {
            if (this.lineTool.shouldFinishNext) {
                this.setPxPerCm(this.wallSize / this.lineTool.path.length)
                this.updatePathText(this.lineTool.path)
                this.interface.updateSelectionPane('scale')
                this.selectionTool.activate()
                delete this.lineTool.path
                delete this.lineTool.shouldFinishNext
            } else {
                this.lineTool.shouldFinishNext = true
            }
        }
    }
    createPathHandles(path, ignorePixelsPerUnit) {
        const handleSize = 10
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
                type: 'handle'
            }
        })
        firstSegmentHandle.position = path.firstSegment.point
        firstSegmentHandle.onMouseEnter = () => {
            this.wrapperEl.style.cursor = 'move'
        }
        firstSegmentHandle.onMouseLeave = () => {
            this.wrapperEl.style.cursor = 'default'
        }
        firstSegmentHandle.onMouseDown = () => {
            this.interface.updateSelectionPane('scale')
        }
        firstSegmentHandle.mouseDragEvent = (event) => {
            if (path.data.locked) return
            let position = event.point
            path.firstSegment.point = position
            firstSegmentHandle.position = position
            if (!ignorePixelsPerUnit) {
                // this.measureLength = path.length
                // console.log('scaleLength:', this.measureLength)
            }
            //  !ignorePixelsPerUnit && this.setPixelsPerUnit()
            // this.updateDrawingRealLength(path, !ignorePixelsPerUnit)
            this.updatePathText(path)
        }
        firstSegmentHandle.mouseUpEvent = () => {
            //   this.snapshot()
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
                type: 'handle'
            }
        })
        secondSegmentHandle.position = path.lastSegment.point
        secondSegmentHandle.onMouseDown = () => {
            this.interface.updateSelectionPane('scale')
        }
        secondSegmentHandle.onMouseEnter = () => {
            this.wrapperEl.style.cursor = 'move'
        }
        secondSegmentHandle.onMouseLeave = () => {
            this.wrapperEl.style.cursor = 'default'
        }
        secondSegmentHandle.mouseDragEvent = (event) => {
            if (path.data.locked) return
            let position = event.point
            path.lastSegment.point = position
            secondSegmentHandle.position = position
           // if (!ignorePixelsPerUnit) {
            //    this.measureLength = path.length
           //     console.log('scaleLength:', this.measureLength)
           // }
            //!ignorePixelsPerUnit && this.setPixelsPerUnit()
            //this.updateDrawingRealLength(path, !ignorePixelsPerUnit)
            this.updatePathText(path)
        }
        secondSegmentHandle.mouseUpEvent = () => {
            //   this.snapshot()
            this.setPxPerCm(this.wallSize / path.length)
        }
        path._handles = [firstSegmentHandle, secondSegmentHandle]
        this.updatePathText(path)
        // this.updateThickness()
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
            fontSize: 40,
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
            let vector2 = center.add(new paper.Point(25, 0)).subtract(center)
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
    drawRuler(bg) {
        if (!bg) return
        const offset = bg.bounds.width * 0.05
        const oldRulerItems = this.canvas.project.activeLayer.children.filter(child => child.data?.type === 'ruler')
        if (Array.isArray(oldRulerItems)) {
            oldRulerItems.forEach(item => {
                item.remove()
            })
        }
        const ruler = this.canvas.project.activeLayer.insertChild(1, new paper.Path.Line({
            from: bg.bounds.topLeft.add(new paper.Point(offset, offset)),
            to: bg.bounds.topRight.add(new paper.Point(-offset, offset)),
            strokeColor: '#037171',
            strokeWidth: 5,
            dashArray: [20, 10],
            locked: true,
            data: {
                type: 'ruler'
            }
        }))
        const rulerSizeText = this.canvas.project.activeLayer.insertChild(2, new paper.PointText({
            point: [0, 0],
            content: `${this.wallSize} cm`,
            fillColor: '#037171',
            fontFamily: 'system-ui',
            fontSize: bg.bounds.width / 20,
            justification: 'center',
            locked: true,
            data: {
                type: 'ruler'
            }
        }))
        rulerSizeText.position = bg.bounds.topCenter.add(new paper.Point(0, offset - bg.bounds.width / 40))
    }
    setBgImage(src, wallSize) {
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
                //this.drawRuler(bgImage)
                resolve()
            })
            bgImage.on('error', () => {
                reject()
            })
        })
    }
    addFrame(src) {
        const clippedGroup = new paper.Group()

        const frameImage = new paper.Raster({
            source: src,
            crossOrigin: 'anonymous',
            position: [0, 0],
            data: { type: 'frame-image', pane: 'artwork', focusable: true, id: 1 }
        })
        frameImage.on('load', () => {
            frameImage.scale((150 / this.pxPerCm) / frameImage.bounds.size.width)
            frameImage.position = this.canvas.view.center
            frameImage.on('modified', (delta) => {
                //cool.position = cool.position.add(delta)
                clipFrame.bounds = cool.bounds
                // console.log(cool.isInside(frameImage.bounds))
            })
            frameImage.isWithinBounds = () => {
                return cool.isInside(frameImage.bounds)
            }
            let cool = new paper.Frame({
                position: frameImage.position,
                width: frameImage.bounds.size.width,
                height: frameImage.bounds.size.height,
                length: 8.1,
                strokeColor: 'green',
                strokeWidth: 16.2 / this.pxPerCm,
                pxPerCm: this.pxPerCm,
                locked: false,
                src: null,
                data: { type: 'frame', pane: 'frame', focusable: true, id: '1' }
            })
            cool.on('modified', () => {
                clipFrame.bounds = cool.bounds
            })
            cool.isWithinBounds = () => {
                return cool.isInside(frameImage.bounds)
            }
            const clipFrame = new paper.Path.Rectangle({
                from: cool.bounds.topLeft,
                to: cool.bounds.bottomRight,
                locked: true,
                data: { type: 'clip', id: '1' }
            })
            //view.emit('autoNumbering', this.numberingId)
            clippedGroup.addChild(clipFrame)
            clippedGroup.addChild(frameImage)
            clippedGroup.clipped = true
            this.setActiveSelection(cool)
            this.canvas.view.update()
        })
    }
    setPxPerCm(value) {
        this.pxPerCm = value
        this.updateFrames()
    }
    updateFrames() {
        const frames = this.canvas.project.activeLayer.children.filter(child => child.data?.type === 'frame')
        frames && frames.forEach(frame => {
        frame.pxPerCm = this.pxPerCm
        frame.strokeWidth = frame.length / frame.pxPerCm
        frame.updatePattern()
        frame._changed(9)
        })
        this.canvas.view.update()
    }
}
window.addEventListener('load', () => {
    const configurator = new FrameConfigurator(document.getElementById('canvas'), document.getElementById('wrapper'))
    // add environments
    environments.forEach(environment => {
        const wrapper = document.getElementById('environment-list')
        const itemDiv = document.createElement('div')
        itemDiv.classList.add('environment-item')
        const imageEl = document.createElement('img')
        imageEl.setAttribute('src', environment.src)
        imageEl.classList.add('environment-image')
        itemDiv.appendChild(imageEl)
        itemDiv.addEventListener('click', () => {
            configurator.setBgImage(environment.src, environment.size).then(() => {
                configurator.interface.setStep(configurator.haveArtwork() ? 3 : 2)
            })
        })
        wrapper.appendChild(itemDiv)
    })
    // add frames
    frames.forEach(frame => {
        const wrapper = document.getElementById('frame-list')
        const itemDiv = document.createElement('div')
        itemDiv.classList.add('frame-item')
        const imageEl = document.createElement('img')
        imageEl.setAttribute('src', frame.src)
        imageEl.classList.add('frame-image')
        itemDiv.appendChild(imageEl)
        itemDiv.addEventListener('click', () => {
            if (typeof configurator.activeSelection?.setFrame === 'function') {
                configurator.activeSelection.setFrame({
                    src: frame.src,
                    length: frame.length / configurator.pxPerCm,
                    offset: frame.offset / configurator.pxPerCm
                })
            }
            // configurator.setBgImage(environment.src, environment.size).then(() => {
            //   configurator.interface.setStep(configurator.haveArtwork() ? 3 : 2)
            //  })
        })
        wrapper.appendChild(itemDiv)
    })
    // upload wall
    document.getElementById('wall-file-upload').addEventListener('change', (event) => {
        event.preventDefault()
        const reader = new FileReader()
        reader.onload = (event) => {
            configurator.setBgImage(event.target.result, defaultWallSize).then(() => {
                configurator.interface.setStep(configurator.haveArtwork() ? 3 : 2)
            })
        }
        reader.readAsDataURL(event.target.files[0])
    })
    // upload artwork
    /*
    document.getElementById('image-drop-zone').addEventListener('drop', (event) => {
        event.preventDefault()
        if (event.dataTransfer.items) {
            [...event.dataTransfer.items].forEach(item => {
                if (item.kind === 'file') {
                    const file = item.getAsFile()
                    const reader = new FileReader()
                    reader.onload = (event) => {
                        configurator.addFrame(event.target.result)
                        configurator.interface.setStep(3)
                    }
                    reader.readAsDataURL(file)
                }
            })
        }
    })
    document.getElementById('image-drop-zone').addEventListener('dragover', (event) => {
        event.preventDefault()
    })
    */
    document.getElementById('image-file-upload').addEventListener('change', (event) => {
        event.preventDefault()
        const reader = new FileReader()
        reader.onload = (event) => {
            configurator.addFrame(event.target.result)
            configurator.interface.setStep(3)
        }
        reader.readAsDataURL(event.target.files[0])
    })
    document.getElementById('add-artwork').addEventListener('click', () => {
        configurator.addFrame('https://i.imgur.com/sP1bZ3N.jpg')
    })
    /*
    document.getElementById('change-wall').addEventListener('click', () => {
        configurator.interface.setStep(1)
    })
    */
    document.getElementById('wall-size').addEventListener('change', (event) => {
        console.log(event.target.value)
        configurator.wallSize = parseInt(event.target.value)
        if (configurator.scale) {
            configurator.setPxPerCm(configurator.wallSize / configurator.scale.length)
            configurator.updatePathText(configurator.scale)
        }
    })
    document.getElementById('change-wall-size').addEventListener('click', () => {
        configurator.lineTool.activate()
    })
    document.getElementById('prev-step').addEventListener('click', () => {
        configurator.interface.setStep(configurator.interface.stepIndex - 1)
    })
    document.getElementById('next-step').addEventListener('click', () => {
        configurator.interface.setStep(configurator.interface.stepIndex + 1)
    })
})

//'https://i.imgur.com/KPFoL2H.jpg'