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
            this.el.innerHTML = `${size.width}x${size.height} cm`
        }
    },
    'background': {
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
        this.initSelection()
    }
    haveArtwork() {
        return this.canvas.project.activeLayer.children.find(child => child.data?.type === 'frame-image')
    }
    updatePixelsPerCm() {
        const bgImage = this.canvas.project.activeLayer.children.find(child => child.data?.type === 'bg-image')
        if (!bgImage) return
        this.pxPerCm = this.wallSize / bgImage.bounds.size.width
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
        this.updatePixelsPerCm()
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
        if (!this.activeSelection) return
        this.unFocus()
        this.removeResizeHandles(this.activeSelection)
        this.activeSelection = null
        this.interface.updateSelectionPane(this.activeSelection)
    }
    createResizeHandles(selection) {
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
                    console.log("AICI?")
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
                    selection.scaling = {x:1, y:1}
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
                if (this.activeSelection) this.discardActiveSelection()
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
                position: [0, 0],
                data: { type: 'bg-image', pane: 'background', focusable: false, disableResize: true }
            }))
            bgImage.on('load', () => {
                this.wallSize = wallSize
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
            frameImage.scale(frameImage.bounds.size.width / this.canvas.view.bounds.size.width / 2)
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
                length: 5 / this.pxPerCm,
                strokeColor: 'green',
                strokeWidth: 10 / this.pxPerCm,
                locked: false,
                src: 'https://i.imgur.com/YbGvFms.png',
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
                data: {type: 'clip', id: '1'}
            })
            //view.emit('autoNumbering', this.numberingId)
            clippedGroup.addChild(clipFrame)
            clippedGroup.addChild(frameImage)
            clippedGroup.clipped = true
            //this.setActiveSelection(cool)
            this.canvas.view.update()
        })
    }
}
window.addEventListener('load', () => {
    const configurator = new FrameConfigurator(document.getElementById('canvas'), document.getElementById('wrapper'))
    // upload wall
    document.getElementById('wall-drop-zone').addEventListener('drop', (event) => {
        event.preventDefault()
        if (event.dataTransfer.items) {
            [...event.dataTransfer.items].forEach(item => {
                if (item.kind === 'file') {
                    const file = item.getAsFile()
                    const reader = new FileReader()
                    reader.onload = (event) => {
                        const wallSize = Number(document.getElementById('wall-size')?.value ?? defaultWallSize)
                        configurator.setBgImage(event.target.result, wallSize).then(() => {
                             configurator.interface.setStep(configurator.haveArtwork() ? 3 : 2)
                        })
                    }
                    reader.readAsDataURL(file)
                }
            })
        }
    })
    document.getElementById('wall-drop-zone').addEventListener('dragover', (event) => {
        event.preventDefault()
    })
    document.getElementById('wall-file-upload').addEventListener('change', (event) => {
        event.preventDefault()
        const reader = new FileReader()
        reader.onload = (event) => {
            const wallSize = Number(document.getElementById('wall-size')?.value ?? defaultWallSize)
            configurator.setBgImage(event.target.result, wallSize).then(() => {
                configurator.interface.setStep(configurator.haveArtwork() ? 3 : 2)
            })
        }
        reader.readAsDataURL(event.target.files[0])
    })
    // upload artwork
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
    document.getElementById('prev-step').addEventListener('click', () => {
        configurator.interface.setStep(configurator.interface.stepIndex - 1)
    })
    document.getElementById('next-step').addEventListener('click', () => {
        configurator.interface.setStep(configurator.interface.stepIndex + 1)
    })
})

//'https://i.imgur.com/KPFoL2H.jpg'