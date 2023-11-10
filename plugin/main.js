
const uuidv4 = () => {
    return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    )
}

const environments = [
    /*
    {
        src: 'https://i.imgur.com/8MLXnRv.jpg',
        size: 500,
        position: [0.35, 0.3]
    },
    {
        src: 'https://i.imgur.com/oVlqhAL.jpg',
        size: 500,
        position: [0.125, 0.25]
    },
    {
        src: 'https://i.imgur.com/CiTOdsf.jpg',
        size: 500,
        position: [0.15, 0.3]
    },
    {
        src: 'https://i.imgur.com/uHVqiWX.jpg',
        size: 500,
        position: [0, 0.3]
    },
    */
    {
        src: 'https://i.imgur.com/KPFoL2H.jpg',
        size: 500,
        position: [0.15, 0.3]
    },
    {
        src: 'https://i.imgur.com/vbxptoG.jpg',
        size: 500,
        position: [0.15, 0.4]
    },
    {
        src: 'https://i.imgur.com/gjx2cEd.jpg',
        size: 500,
        position: [0.17, 0.3]
    }
]
const artworks = [
    {
        src: 'https://i.imgur.com/zooN3dR.jpg',
        id: uuidv4()
    },
    {
        src: 'https://i.imgur.com/TDCbxIR.jpg',
        id: uuidv4()
    },
    {
        src: 'https://i.imgur.com/3z8rW8T.jpg',
        id: uuidv4()
    },
    {
        src: 'https://i.imgur.com/pTDCClv.jpg',
        id: uuidv4()
    }
]
const frames = [
    {
        id: '7021C',
        src: 'https://i.imgur.com/HWppjlF.png',
        length: 2,
        offset: 0.6,
        pricePerSquareCm: 0.001
    },
    {
        id: '6180zj',
        src: 'https://i.imgur.com/tkRo50f.jpg',
        length: 8.1,
        offset: 0.9,
        pricePerSquareCm: 0.002
    },
    {
        id: '7455TO',
        src: 'https://i.imgur.com/YbGvFms.png',
        length: 5.6,
        offset: 0.8,
        pricePerSquareCm: 0.003
    }
]
const pass = [
    {
        src: 'https://i.imgur.com/QDs68dd.png',
        passLength: 0
    },
    {
        src: 'https://i.imgur.com/0kFsOHE.png',
        passLength: 15
    },
    {
        src: 'https://i.imgur.com/4fRVhjt.png',
        passLength: 20
    }
]
const steps = [
    {
        name: 'select-wall',
        el: 'select-environment',
        activateAction: function (configurator) {
        }
    },
    {
        name: 'measure-wall',
        el: null,
        activateAction: function (configurator) {
            document.getElementById('canvas').style.display = 'block'
            document.getElementById('fit-to-screen').style.display = 'flex'
            configurator.showMeasureInfo()
            configurator.lineTool.activate()
        },
        pane: 'scale'
    },
    {
        name: 'select-artwork',
        el: 'select-artwork',
        activateAction: function (configurator) {
            document.getElementById('canvas').style.display = 'block'
            document.getElementById('fit-to-screen').style.display = 'flex'
            configurator.selectionTool.activate()
            if (configurator.scale) configurator.removeDrawing(configurator.scale)
            const scaleEl = document.getElementById('scale-confirm')
            if (scaleEl) scaleEl.style.display = 'none'
        }
    },
    {
        name: 'configurator',
        el: null,
        activateAction: function (configurator) {
            document.getElementById('canvas').style.display = 'block'
            document.getElementById('fit-to-screen').style.display = 'flex'
            document.getElementById('painting-options').style.display = 'flex'
        },
        pane: 'background', //'frame'
    }
]
const defaultWallSize = 300
const defaultPaintingSize = { width: 120, height: 80 }
const selectionPaneList = {
    'frame': {
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
           // console.log("HAPPENS BG")
            //configurator.getPaintingsAsImage()
            // experimental
            // add frames
            const wrapper = document.getElementById('painting-list')
            while (wrapper.lastChild && wrapper.lastChild?.id !== 'add-artwork') {
                wrapper.removeChild(wrapper.lastChild)
            }
            // while (wrapper.hasChildNodes()) wrapper.removeChild(wrapper.firstChild)
            const paintings = configurator.getPaintingsAsImage()
            paintings.forEach(painting => {
                const itemDiv = document.createElement('div')
                itemDiv.classList.add('painting-options-item')
                itemDiv.classList.add('painting-options-item-render')
                itemDiv.style.height = '90px'
                const imageEl = document.createElement('img')
                const spanEl = document.createElement('span')
                const spanElText = document.createTextNode(painting.painting.data.name)
                spanEl.appendChild(spanElText)
                const spanPriceEl = document.createElement('span')
                const spanPriceElText = document.createTextNode(painting.price)
                spanPriceEl.appendChild(spanPriceElText)
                imageEl.setAttribute('src', painting.image)
                imageEl.classList.add('selection-image')
                itemDiv.appendChild(spanEl)
                itemDiv.appendChild(imageEl)
                itemDiv.appendChild(spanPriceEl)
                itemDiv.addEventListener('click', () => {
                    configurator.setActiveSelection(painting.painting?.frame ?? painting.painting)
                })
                wrapper.appendChild(itemDiv)
            })
            // experimental
            if (configurator.scale) configurator.removeDrawing(configurator.scale)
        }
    },
    'scale': {
        update: function (configurator) {
        }
    }
}
const defaultPane = 'background'

class Interface {
    constructor(configurator) {
        this.configurator = configurator
        this.steps = steps.length
        this.stepsPane = document.getElementById('steps-pane')
        this.stepIndex = 0
        this.activePane = null
        //this.stepsPaintingOptions = document.getElementById('painting-options')
        //this.nextStepBtn = document.getElementById('next-step')
        this.setStep(0)
    }
    updateSelectionPane(pane) {
        if (!pane) pane = steps[this.stepIndex]?.pane
        if (this.activePane === pane) return
        const paneCollection = document.getElementsByClassName('selection-pane-item')
        for (let i = 0; i < paneCollection.length; i++) {
            paneCollection[i].style.display = 'none'
            if (paneCollection[i].getAttribute('type') === pane) {
                paneCollection[i].style.display = 'flex'
                if (selectionPaneList[pane]) selectionPaneList[pane].update(this.configurator)
                this.activePane = pane
            }
        }
        this.updatePaintingSelectionOptions()
        this.updatePaintingOptions(pane)
    }
    updatePaintingSelectionOptions() {
        // if (this.configurator.activeSelection) {
        //document.getElementById('painting-name-options').style.display = this.configurator.activeSelection ? 'flex' : 'none'
        //document.getElementById('painting-selection-options').style.display = this.configurator.activeSelection ? 'flex' : 'none'
        if (this.configurator.activeSelection) {
            //    document.getElementById('painting-name-options').innerHTML = this.configurator.activeSelection.data?.name
        }
        //}
    }
    updatePaintingOptions(pane) {
        document.getElementById('painting-options').style.display = this.configurator.activeSelection ? 'flex' : 'none'
        const paintingOptionsCollection = document.getElementsByClassName('painting-options-item-menu')
        //const activePane = this.configurator.activeSelection?.data?.pane
        for (let i = 0; i < paintingOptionsCollection.length; i++) {
            paintingOptionsCollection[i].style.color = '#000'
            if (paintingOptionsCollection[i].getAttribute('type') === pane) {
                paintingOptionsCollection[i].style.color = '#037171'
                if (selectionPaneList[pane]) selectionPaneList[pane].update(this.configurator)
            }
        }
    }
    setStep(index) {
        this.stepIndex = Math.max(Math.min(index, this.steps), 0)
        console.log(this.stepIndex)
        const step = steps[this.stepIndex]
        this.configurator.discardActiveSelection()
        const stepCollection = document.getElementsByClassName('step-item')
        for (let i = 0; i < stepCollection.length; i++) {
            stepCollection[i].style.display = 'none'
        }
        if (step) {
            const stepEl = document.getElementById(step.el)
            console.log(stepEl)
            if (stepEl) stepEl.style.display = 'flex'
            step.activateAction(this.configurator)
        }
        //this.stepsCounter.innerHTML = `Step: ${this.stepIndex + 1} / ${this.steps + 1}`
    }
    addArtworkItem(artwork, uploaded) {
        const wrapper = document.getElementById('artwork-list')
        const itemDiv = document.createElement('div')
        itemDiv.classList.add('selection-item')
        const imageEl = document.createElement('img')
        imageEl.setAttribute('src', artwork.src)
        imageEl.classList.add('selection-image')
        itemDiv.appendChild(imageEl)
        itemDiv.addEventListener('click', () => {
            this.configurator.setArtwork(artwork)
        })
        //itemDiv.after(wrapper.firstChild)
        /*
        console.log(uploaded, wrapper.firstChild?.nextSibling)
        if (uploaded && wrapper.firstChild?.nextSibling) {
            wrapper.insertBefore(itemDiv, wrapper.firstChild?.nextSibling)
        } else {
            wrapper.appendChild(itemDiv)
        }
        */
        wrapper.appendChild(itemDiv)
    }
}
class FrameConfigurator {
    constructor(canvasEl, wrapperEl) {
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
        return this.canvas.project.activeLayer.children.find(child => child.data?.type === 'artwork')
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
            //this.minZoom = scaleRatio
        }
        this.updateActiveSelection()
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
    panView(offset) {
        this.canvas.view.center = this.canvas.view.center.add(offset)
        return
        // experimental
        const bgImage = this.canvas.project.activeLayer.children.find(child => child.data?.type === 'bg-image')
        const viewBounds = this.canvas.view.bounds
        if (!bgImage) return
        // x axis
        if (viewBounds.left + offset.x > bgImage.bounds.left && viewBounds.right + offset.x < bgImage.bounds.right) {
            this.canvas.view.center = this.canvas.view.center.add(new paper.Point(offset.x, 0))
        }
        // x axis left
        if (viewBounds.left < bgImage.bounds.left) {
            this.canvas.view.center = this.canvas.view.center.subtract(new paper.Point(viewBounds.left - bgImage.bounds.left, 0))
        }
        // x axis right
        if (viewBounds.right > bgImage.bounds.right) {
            this.canvas.view.center = this.canvas.view.center.subtract(new paper.Point(viewBounds.right - bgImage.bounds.right, 0))
        }
        // y axis
        if (viewBounds.top + offset.y > bgImage.bounds.top && viewBounds.bottom + offset.y < bgImage.bounds.bottom) {
            this.canvas.view.center = this.canvas.view.center.add(new paper.Point(0, offset.y))
        }
        // y axis top
        if (viewBounds.top < bgImage.bounds.top) {
            this.canvas.view.center = this.canvas.view.center.subtract(new paper.Point(viewBounds.top - bgImage.bounds.top, 0))
        }
        // y axis bottom
        if (viewBounds.bottom > bgImage.bounds.bottom) {
            this.canvas.view.center = this.canvas.view.center.subtract(new paper.Point(viewBounds.bottom - bgImage.bounds.bottom, 0))
        }
        // experimental
        //this.canvas.view.center = this.canvas.view.center.add(offset)
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
            this.panView(mousePosition.subtract(oldCenter).multiply(1 - (oldZoom / this.canvas.view.zoom)))
            //this.canvas.view.center = this.canvas.view.center.add(mousePosition.subtract(oldCenter).multiply(1 - (oldZoom / this.canvas.view.zoom)))
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
        if (drawing instanceof paper.Frame || drawing.frame instanceof paper.Frame) {
            const bounds = drawing.frame?.strokeBounds ?? drawing.strokeBounds
            this.fitToScreen(new paper.Rectangle(bounds.topLeft.subtract(new paper.Point(bounds.size.width / 2, bounds.size.height / 2)),
            bounds.bottomRight.add(new paper.Point(bounds.size.width / 2, bounds.size.height / 2)) ))
            this.shouldFitToScreenOnDiscardActiveSelection = true
        }
        this.activeSelection = drawing
        this.activeSelection._validDragBeforeMouseUp = true // needed for dragging before releasing mouse
        this.activeSelection._selected = false // needed for internal draw logic such as clip region, etc.
        if (this.activeSelection.artwork) this.activeSelection.artwork._selected = false // needed for internal draw logic such as clip region, etc.
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
            this.activeSelection._validDragBeforeMouseUp = false // needed for dragging before releasing mouse
            this.activeSelection._selected = false // needed for internal draw logic such as clip region, etc.
            if (this.activeSelection.artwork) this.activeSelection.artwork._selected = false // needed for internal draw logic such as clip region, etc.
        }
        this.activeSelection = null
        if (this.shouldFitToScreenOnDiscardActiveSelection) {
            this.fitToScreen()
            delete this.shouldFitToScreenOnDiscardActiveSelection
        }
        if (this.interface) this.interface.updateSelectionPane(this.activeSelection)
    }
    createResizeHandles(selection) {
        if (selection?.data?.type === 'line') return
        this.removeResizeHandles(selection)
        if (!selection?.data) return
        if (selection.data?.disableResize) return
        selection.onMouseEnter = () => {
            if (this.canvasEl) this.canvasEl.style.cursor = 'grab'
        }
        selection.onMouseUp = () => {
            if (this.canvasEl) this.canvasEl.style.cursor = 'grab'
            if (!selection._validDraggingBeforeMouseUp && this.activeSelection === selection) {
                selection._validDragBeforeMouseUp = false // needed for dragging before releasing mouse
                selection._selected = true // needed for internal draw logic such as clip region, etc.
                selection._changed(9)
                this.canvas.view.update()
            }
            selection._validDraggingBeforeMouseUp = false
        }
        selection.onMouseDrag = () => {
            if (this.canvasEl) this.canvasEl.style.cursor = 'grabbing'
            selection._validDraggingBeforeMouseUp = true // needed for dragging before releasing mouse
        }
        selection.onMouseLeave = () => {
            if (this.canvasEl) this.canvasEl.style.cursor = 'default'
        }
        selection.mouseDragEvent = (event) => {
            if (selection.data.locked) return
            selection.applyBoundsTransformation?.(event.delta)
            this.updateResizeHandles(selection)
        }
        const handleRadius = 15
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
                this.canvasEl.style.cursor = handle.cursor
            }
            handleEl.onMouseLeave = () => {
                this.canvasEl.style.cursor = 'default'
            }
            handleEl.mouseDragEvent = (event) => {
                let isDotCircle = selection.data.type === 'dotCircle' // only allow resizing same aspect ratio
                let isText = selection.data?.type === 'artwork' //(selection.rotation !== 0 || selection.data?.matrixRotation !== 0) || selection.data.type === 'text' // only allow resizing same aspect ratio
                let xHandles = ['topLeft', 'topRight', 'bottomRight', 'bottomLeft', 'leftCenter', 'rightCenter']
                let yHandles = ['topLeft', 'topRight', 'bottomRight', 'bottomLeft', 'topCenter', 'bottomCenter']
                let centerXHandles = ['leftCenter', 'rightCenter']
                let centerYHandles = ['topCenter', 'bottomCenter']
                let originalBounds = new paper.Rectangle(selection.bounds.topLeft, selection.bounds.bottomRight)
                let handleBounds = new paper.Rectangle(selection.bounds[handle.opposite], event.point)
                let shiftKey = paper.Key.isDown('shift')
                let diffX = xHandles.includes(handle.name) && handleBounds.width / originalBounds.width
                let diffY = yHandles.includes(handle.name) && handleBounds.height / originalBounds.height
                /*
                if ((xHandles.includes(handle.name) || yHandles.includes(handle.name) || centerXHandles.includes(handle.name) || centerYHandles.includes(handle.name)) && isText) {
                    selection.scale(diffX, selection.bounds[handle.opposite])
                } else
                */
                const uniScaling = selection.data?.uniScaling
                if (centerXHandles.includes(handle.name) && diffX) {
                    selection.scale(diffX, uniScaling ? diffX : 1, selection.bounds[handle.opposite])
                } else if (centerYHandles.includes(handle.name) && diffY) {
                    selection.scale(uniScaling ? diffY : 1, diffY, selection.bounds[handle.opposite])
                } else {
                    selection.scale(diffX ?? diffY, selection.bounds[handle.opposite])
                    if (selection.artwork) {
                        selection.artwork.scale(diffX ?? diffY, selection.bounds[handle.opposite])
                        const checkBounds = new paper.Rectangle(selection.bounds.topLeft.subtract(30, 30), selection.bounds.bottomRight.add(30, 30))
                        if (!selection.isInside(selection.artwork.bounds)) {
                            selection.artwork.fitBounds(checkBounds, true)
                        }
                    }
                    console.log("AICI?")
                }
                selection.applyBoundsTransformation?.({ x: 0, y: 0 })
                this.updateResizeHandles(selection)
                // update interface size
                this.interface.updateSelectionPane(selection.data?.pane)
            }
            selection._handles.push(handleEl)

        })
        // create name
        selection._nameText = new paper.PointText({
            point: selection.bounds.topCenter.subtract(new paper.Point(0, 45 / this.canvas.view.zoom)),
            content: selection.data?.name,
            locked: true,
            fillColor: '#037171', //path.strokeColor,
            fontSize: 15 / this.canvas.view.zoom,
            justification: 'center',
            ref: selection,
            visible: selection.visible,
            data: {
                type: 'handle'
            }
        })
        selection._nameText.position = selection.bounds.topCenter.subtract(new paper.Point(0, 30 / this.canvas.view.zoom))
        if (selection?.data?.type === 'frame') {
            // create size text
            const sizeText = {
                width: Math.round(selection.strokeBounds.size.width * this.pxPerCm),
                height: Math.round(selection.strokeBounds.size.height * this.pxPerCm)
            }
            selection._sizeText = new paper.PointText({
                point: selection.bounds.bottomCenter.add(new paper.Point(0, 30 / this.canvas.view.zoom)),
                content: `${sizeText.width}x${sizeText.height} cm`,
                locked: true,
                fillColor: '#037171', //path.strokeColor,
                fontSize: 15 / this.canvas.view.zoom,
                justification: 'center',
                ref: selection,
                visible: selection.visible,
                data: {
                    type: 'handle'
                }
            })
            selection._sizeText.position = selection.bounds.bottomCenter.add(new paper.Point(0, 30 / this.canvas.view.zoom))
        }
        // create drag handle for frame
        if (selection?.data?.type === 'frame') {
            selection._dragHandle = new paper.Path.Circle({
                center: this.getClosestVisibleBound(selection),
                radius: 30 / this.canvas.view.zoom,
                fillColor: 'rgba(0,0,0,0.001)',
                strokeColor: 'rgba(0,0,0,0.001)',
                strokeWidth: 1 / this.canvas.view.zoom,
                ref: selection,
                data: {
                    type: 'handle'
                }
            })
            selection._dragHandleIcon = new paper.Path('M278.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l9.4-9.4V224H109.3l9.4-9.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4H224V402.7l-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-9.4 9.4V288H402.7l-9.4 9.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l9.4 9.4H288V109.3l9.4 9.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-64-64z')
            selection._dragHandleIcon.fillColor = '#037171'
            selection._dragHandleIcon.locked = true
            selection._dragHandleIcon.ref = selection
            selection._dragHandleIcon.data = {
                type: 'handle'
            }
            selection._dragHandleIcon.fitBounds(selection._dragHandle.bounds)
            selection._dragHandle.onMouseEnter = () => {
                this.canvasEl.style.cursor = 'move'
            }
            selection._dragHandle.onMouseLeave = () => {
                this.canvasEl.style.cursor = 'default'
            }
            selection._dragHandle.mouseDragEvent = (event) => {
                if (selection.data.locked) return
                selection.applyBoundsTransformation?.(event.delta)
                this.updateResizeHandles(selection)
            }
        }
        // experimental
        selection._removeHandle = new paper.Path.Circle({
            center: this.getClosestInternalVisibleBound(selection),
            radius: 15 / this.canvas.view.zoom,
            fillColor: 'rgba(0,0,0,0.001)',
            strokeColor: 'rgba(0,0,0,0.001)',
            strokeWidth: 1 / this.canvas.view.zoom,
            ref: selection,
            data: {
                type: 'handle'
            }
        })
        selection._removeHandleIcon = new paper.Path('M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z')
        selection._removeHandleIcon.closed = true
        selection._removeHandleIcon.fillColor = 'red'
        selection._removeHandleIcon.locked = true
        selection._removeHandleIcon.ref = selection
        selection._removeHandleIcon.data = {
            type: 'handle'
        }
        selection._removeHandleIcon.fitBounds(new paper.Rectangle(selection._removeHandle.bounds.topLeft.add(new paper.Point(5, 5)), selection._removeHandle.bounds.bottomRight.subtract(new paper.Point(5, 5))))
        selection._removeHandle.onMouseEnter = () => {
            this.canvasEl.style.cursor = 'pointer'
        }
        selection._removeHandle.onMouseLeave = () => {
            this.canvasEl.style.cursor = 'default'
        }
        selection._removeHandle.onMouseDown = (event) => {
            if (selection.data.locked) return
            this.removePainting(selection)
        }
        // experimental
    }
    updateResizeHandles(selection) {
        if (Array.isArray(selection._handles)) {
            let handles = this.getResizeHandles()
            selection._handles.forEach((handle, index) => {
                handle.visible = !selection?.data?.locked && !(selection.bounds.size.width < handle.bounds.size.width * 3 && selection.bounds.size.height < handle.bounds.size.height * 3)
                handle.position = selection.bounds[handles[index].name]
            })
        }
        if (selection._nameText) {
            selection._nameText.content = selection.data.name
            selection._nameText.position = selection.bounds.topCenter.subtract(new paper.Point(0, 30 / this.canvas.view.zoom))
        }
        if (selection._sizeText) {
            const sizeText = {
                width: Math.round(selection.strokeBounds.width * this.pxPerCm),
                height: Math.round(selection.strokeBounds.height * this.pxPerCm)
            }
            selection._sizeText.content = `${sizeText.width}x${sizeText.height} cm`
            selection._sizeText.position = selection.bounds.bottomCenter.add(new paper.Point(0, 30 / this.canvas.view.zoom))
        }
        if (selection._dragHandle) {
            selection._dragHandle.position = this.getClosestVisibleBound(selection) ?? selection._dragHandle.position
            selection._dragHandleIcon.fitBounds(selection._dragHandle.bounds)
        }
        if (selection._removeHandle) {
            selection._removeHandle.position = this.getClosestInternalVisibleBound(selection) ?? selection._removeHandle.position
            selection._removeHandleIcon.fitBounds(new paper.Rectangle(selection._removeHandle.bounds.topLeft.add(new paper.Point(5, 5)), selection._removeHandle.bounds.bottomRight.subtract(new paper.Point(5, 5))))
        }
    }
    removeResizeHandles(selection) {
        if (Array.isArray(selection._handles)) {
            selection._handles.forEach(handle => {
                handle.remove()
            })
        }
        if (selection._nameText) {
            selection._nameText.remove()
        }
        if (selection._sizeText) {
            selection._sizeText.remove()
        }
        if (selection._dragHandle) {
            selection._dragHandle.remove()
            selection._dragHandleIcon.remove()
        }
        if (selection._removeHandle) {
            selection._removeHandle.remove()
            selection._removeHandleIcon.remove()
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
        return drawing.data.type === 'artwork' || drawing.data.type === 'frame' || drawing.data.type === 'bg-image'
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
                tolerance: 30 / Math.max(1, this.canvas.view.zoom)
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
                this.panView(event.downPoint.subtract(event.point))
                //this.canvas.view.center = this.canvas.view.center.add(event.downPoint.subtract(event.point))
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
    createPathHandles(path, ignorePixelsPerUnit) {
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
                type: 'handle'
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
                //this.drawRuler(bgImage)
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
                artwork.fitBounds(artwork.frame.bounds, true)
                // update clip region
                artwork.setClip({
                    size: artwork.frame.bounds.size,
                    offset: artwork.frame.position.subtract(artwork.position)
                })
            } else {
                artwork.fitBounds(bounds, true)
            }
            this.updateActiveSelection()
        })
    }
    addArtwork(options) {
        const lastAddedArtwork = this.canvas.project.activeLayer.children.filter(child => child.data?.type === 'artwork')?.reverse()?.find(child => child.data?.type === 'artwork')
        const position = lastAddedArtwork ? lastAddedArtwork.position.add(new paper.Point(lastAddedArtwork.bounds.size.width * 0.6, 0)) : this.canvas.view.center.add(new paper.Point(this.defaultPaintingPosition.x, this.defaultPaintingPosition.y))
        const uuid = uuidv4()
        const artwork = new paper.Artwork({
            src: options.src,
            position: [0, 0],
            frame: null,
            data: { type: 'artwork', pane: 'frame', focusable: true, uniScaling: true, uuid: uuid, name: `Lucrare ${this.getPaintings().length + 1}` } // pane can be artwork if frame is added
        })
        artwork.on('load', () => {
            // set default size
            console.log(this.defaultPaintingPosition)
            artwork.fitBounds(new paper.Rectangle(position, new paper.Size(defaultPaintingSize.width / this.pxPerCm, defaultPaintingSize.height / this.pxPerCm)))
            artwork.applyBoundsTransformation = (offset) => {
                const frame = artwork.frame
                // handle case when no frame
                if (!frame) {
                    artwork.position = artwork.position.add(offset)
                    return
                }
                // size
                if (!frame.isInside(artwork.bounds)) {
                    const bounds = new paper.Rectangle(frame.bounds.topLeft.subtract(30, 30), frame.bounds.bottomRight.add(30, 30))
                    artwork.fitBounds(bounds, true)
                }
                // dragging if before mouse up
                if (artwork._validDragBeforeMouseUp) {
                    artwork.position = artwork.position.add(offset)
                    frame.position = frame.position.add(offset)
                    // update clip region
                    artwork.setClip({
                        size: frame.bounds.size,
                        offset: frame.position.subtract(artwork.position)
                    })
                    return
                }
                // x axis
                if (artwork.bounds.left + offset.x < frame.bounds.left && artwork.bounds.right + offset.x > frame.bounds.right) {
                    artwork.position = artwork.position.add(new paper.Point(offset.x, 0))
                }
                // y axis
                if (artwork.bounds.top + offset.y < frame.bounds.top && artwork.bounds.bottom + offset.y > frame.bounds.bottom) {
                    artwork.position = artwork.position.add(new paper.Point(0, offset.y))
                }
                // update clip region
                artwork.setClip({
                    size: frame.bounds.size,
                    offset: frame.position.subtract(artwork.position)
                })
            }
            this.setActiveSelection(artwork)
        })
    }
    getFrame() {
        if (this.activeSelection && this.activeSelection.data?.type === 'frame') return this.activeSelection
        return this.canvas.project.activeLayer.children.find(child => child.data?.type === 'frame')
    }
    setFrame(options) {
        const frame = this.activeSelection?.data?.type === 'frame' && this.activeSelection
        if (!frame) {
            this.addFrame(options)
            return
        }
        frame.data.asset = options
        frame.setFrame(options)
    }
    addFrame(options) {
        const artwork = (this.activeSelection?.data?.type === 'artwork' && this.activeSelection) ?? this.getArtwork()
        if (!artwork) return
        // add frame
        let frame = new paper.Frame({
            position: artwork.position,
            width: artwork.bounds.width,
            height: artwork.bounds.height,
            length: options.length,
            strokeColor: '#000', // temp solution for hitbox, need rework
            strokeWidth: options.length / this.pxPerCm, // temp solution for hitbox, need rework
            pxPerCm: this.pxPerCm,
            artwork: artwork,
            src: options.src,
            data: { type: 'frame', pane: 'frame', focusable: true, uuid: artwork.data.uuid, name: artwork.data.name, asset: options }
        })
        frame.applyBoundsTransformation = (offset) => {
            frame.position = frame.position.add(offset)
            artwork.position = artwork.position.add(offset)
            // update clip region
            artwork.setClip({
                size: frame.bounds.size,
                offset: frame.position.subtract(artwork.position)
            })
            return
        }
        // change artwork selection pane from frame to artwork
        artwork.data.pane = 'artwork'
        // create frame ref for artwork
        artwork.frame = frame
        // set active selection
        this.setActiveSelection(frame)
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
            frame._changed(9)
        })
        this.canvas.view.update()
    }
    showMeasureInfo() {
        console.log('showMeasureInfo')
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
        console.log('hideMeasureInfo')
        if (this._measureInfo) this._measureInfo.remove()
        this.canvas.project.activeLayer.children.forEach(child => {
            child.opacity = 1
        })
        delete this._measureInfo
    }
    selectFirstMatchByPaneType(type) {
        const painting = this.canvas.project.activeLayer.children.find(child => child.data?.pane === type || child.data?.type === type)
        if (!painting) {
            this.interface.updateSelectionPane(type)
            return
        }
        this.setActiveSelection(painting)
    }
    updatePaintingName(name) {
        const painting = this.activeSelection
        if (!painting) return
        const paintingItems = this.canvas.project.activeLayer.children.filter(child => child.data?.uuid === painting.data.uuid) ?? []
        paintingItems.forEach(item => {
            item.data.name = name.trim()
        })
        this.updateActiveSelection()
    }
    getPaintings() {
        return this.canvas.project.activeLayer.children.filter(child => child.data?.type === 'artwork') ?? []
    }
    getPaintingsAsImage() {
        if (!this.canvas?.project?.activeLayer) return []
        const raster = this.canvas.project.activeLayer.rasterize({
            resolution: 50 / window.devicePixelRatio,
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
            const price = painting.frame?.data?.asset?.pricePerSquareCm ? `${Math.round((painting.frame.strokeBounds.size.width * this.pxPerCm) * (painting.frame.strokeBounds.size.height * this.pxPerCm) * painting.frame.data.asset.pricePerSquareCm)}$` : 'null'
            paintingsAsImages.push({
                painting: painting,
                price: price,
                image: raster.getSubCanvas(bounds).toDataURL()
            })
        })
        return paintingsAsImages
    }
    removePainting(painting) {
        const paintingItem = painting ?? this.activeSelection
        if (!paintingItem) return
        if (confirm(`Are you sure you want to remove ${paintingItem.data.name} ?`)) {
            const paintingItems = this.canvas.project.activeLayer.children.filter(child => child.data?.uuid === paintingItem.data.uuid)
            paintingItems.forEach(item => {
                item.remove()
            })
            this.discardActiveSelection()
        }
    }
}
window.addEventListener('load', () => {

    const configurator = new FrameConfigurator(document.getElementById('canvas'), document.getElementById('steps-container'))
    // init observer for mobile styling
    const resizeEditorObserver = new ResizeObserver((entries) => {
        entries.forEach(entry => {
            let width = entry.contentRect.width
            let height = entry.contentRect.height
            configurator.isMobile = Math.min(width, height) < 580 ? true : false
            let vh = window.innerHeight * 0.01
            // Then we set the value in the --vh custom property to the root of the document
            document.documentElement.style.setProperty('--vh', `${vh}px`)
            document.getElementById('app-container').style.minHeight = configurator.isMobile ? 'fit-content' : 'inherit'
            document.getElementById('app-container').style.height = configurator.isMobile ? 'calc(var(--vh, 1vh) * 100)' : '100vh'
            // FOR DEBUG ONLY
            document.getElementById('add-frame-item-debug').style.display = configurator.isMobile ? 'none' : 'flex'
        })
    })
    resizeEditorObserver.observe(document.getElementById('app-container'))
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
            configurator.setBgImage(environment.src, environment.size, environment.position).then(() => {
                configurator.interface.setStep(2)
                //configurator.interface.setStep(configurator.haveArtwork() ? 3 : 2)
            })
        })
        wrapper.appendChild(itemDiv)
    })

    // add artworks
    artworks.forEach(artwork => {
        configurator.interface.addArtworkItem(artwork)
    })
    // add frames
    frames.forEach(frame => {
        const wrapper = document.getElementById('frame-list')
        const itemDiv = document.createElement('div')
        itemDiv.classList.add('selection-item')
        const imageEl = document.createElement('img')
        imageEl.setAttribute('src', frame.src)
        imageEl.classList.add('selection-image')
        itemDiv.appendChild(imageEl)
        itemDiv.addEventListener('click', () => {
            configurator.setFrame(frame)
            // configurator.setBgImage(environment.src, environment.size).then(() => {
            //   configurator.interface.setStep(configurator.haveArtwork() ? 3 : 2)
            //  })
        })
        wrapper.appendChild(itemDiv)
    })
    // add pass
    /*
    pass.forEach(pas => {
        const wrapper = document.getElementById('pass-list')
        const itemDiv = document.createElement('div')
        itemDiv.classList.add('selection-item')
        const imageEl = document.createElement('img')
        imageEl.setAttribute('src', pas.src)
        imageEl.classList.add('selection-image')
        itemDiv.appendChild(imageEl)
        itemDiv.addEventListener('click', () => {
            const frameEl = configurator.canvas.project.activeLayer.children.find(child => child.data?.type === 'frame')
            if (frameEl) {
                frameEl.setPass({
                    src: pas.src,
                    passLength: pas.passLength
                })
            }
        })
        wrapper.appendChild(itemDiv)
    })
    */
    // upload wall
    document.getElementById('wall-upload').addEventListener('change', (event) => {
        event.preventDefault()
        const reader = new FileReader()
        reader.onload = (event) => {
            configurator.setBgImage(event.target.result, defaultWallSize, [0, 0]).then(() => {
                configurator.interface.setStep(1)
                //configurator.interface.setStep(configurator.haveArtwork() ? 3 : 2)
            })
        }
        reader.readAsDataURL(event.target.files[0])
    })
    // upload artwork
    document.getElementById('artwork-upload').addEventListener('change', (event) => {
        event.preventDefault()
        const reader = new FileReader()
        reader.onload = (event) => {
            const artwork = {
                src: event.target.result,
                id: uuidv4()
            }
            artworks.unshift(artwork)
            configurator.interface.addArtworkItem(artwork, true)
            configurator.addArtwork(artwork)
            configurator.interface.setStep(3)
        }
        reader.readAsDataURL(event.target.files[0])
    })

    document.getElementById('frame-file-upload').addEventListener('change', (event) => {
        event.preventDefault()
        const reader = new FileReader()
        reader.onload = (event) => {
            /*
            if (typeof configurator.activeSelection?.setFrame === 'function') {
                configurator.activeSelection.setFrame({
                    length : Number(document.getElementById('frame-length').value),
                    offset: Number(document.getElementById('frame-offset').value),
                    src: event.target.result
                })
            }
            */
            configurator.setFrame({
                length: Number(document.getElementById('frame-length').value),
                offset: Number(document.getElementById('frame-offset').value),
                src: event.target.result
            })
        }
        reader.readAsDataURL(event.target.files[0])
    })

    document.getElementById('artwork-file-upload').addEventListener('change', (event) => {
        event.preventDefault()
        const reader = new FileReader()
        reader.onload = (event) => {
            const artwork = {
                src: event.target.result,
                id: uuidv4()
            }
            artworks.unshift(artwork)
            configurator.interface.addArtworkItem(artwork, true)
            configurator.setArtwork(artwork)
        }
        reader.readAsDataURL(event.target.files[0])
    })

    document.getElementById('add-artwork').addEventListener('click', () => {
        configurator.interface.updateSelectionPane('artwork')
        //configurator.addFrame('https://i.imgur.com/sP1bZ3N.jpg')
    })
    document.getElementById('wall-size').addEventListener('input', (event) => {
        console.log(event.target.value)
        configurator.wallSize = parseInt(event.target.value)
        if (configurator.scale) {
            configurator.setPxPerCm(configurator.wallSize / configurator.scale.length)
            configurator.updatePathText(configurator.scale)
        }
    })
    document.getElementById('fit-to-screen').addEventListener('click', () => {
        configurator.discardActiveSelection()
        configurator.fitToScreen()
    })
    /*
    document.getElementById('change-wall-size').addEventListener('click', () => {
        configurator.showMeasureInfo()
        configurator.lineTool.activate()
    })
    */
    const paintingOptionsCollection = document.getElementsByClassName('painting-options-item-menu')
    for (let i = 0; i < paintingOptionsCollection.length; i++) {
        paintingOptionsCollection[i].addEventListener('click', () => {
            configurator.selectFirstMatchByPaneType(paintingOptionsCollection[i].getAttribute('type'))
            //configurator.interface.updateSelectionPane(paintingOptionsCollection[i].getAttribute('type'))
        })
    }
    document.getElementById('scale-confirm').addEventListener('click', () => {
        configurator.interface.setStep(configurator.interface.stepIndex + 1)
    })
    /*
    document.getElementById('painting-name-options').addEventListener('input', () => {
        configurator.updatePaintingName(document.getElementById('painting-name-options').innerText)
    }, false)
    */
    /*
     document.getElementById('remove-painting').addEventListener('click', () => {
         console.log("WTF?")
         configurator.removePainting()
     })
     */

})

//'https://i.imgur.com/KPFoL2H.jpg'