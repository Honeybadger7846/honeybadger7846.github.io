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
            document.getElementById('undo').style.display = 'flex'
            document.getElementById('redo').style.display = 'flex'
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
            document.getElementById('undo').style.display = 'flex'
            document.getElementById('redo').style.display = 'flex'
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
            document.getElementById('undo').style.display = 'flex'
            document.getElementById('redo').style.display = 'flex'
            document.getElementById('fit-to-screen').style.display = 'flex'
            document.getElementById('painting-options').style.display = 'flex'
        },
        pane: 'background', //'frame'
    }
]
const selectionPaneList = {
    'frame': {
        update: function (configurator) {
            // remove frame functionality, temporary disabled
            return
            const activeSelection = configurator.activeSelection
            document.getElementById('remove-frame').style.display = activeSelection?.data?.type === 'frame' || activeSelection?.frame ? 'flex' : 'none'
        }
    },
    'background': {
        update: function (configurator) {
            // add frames
            const wrapper = document.getElementById('painting-list')
            while (wrapper.lastChild && wrapper.lastChild?.id !== 'add-artwork') {
                wrapper.removeChild(wrapper.lastChild)
            }
            const paintings = configurator.getPaintingsAsImage()
            paintings.forEach(painting => {
                const itemDiv = document.createElement('div')
                itemDiv.classList.add('painting-options-item')
                itemDiv.classList.add('painting-options-item-render')
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
                    configurator.zoomToPainting(painting.painting?.frame ?? painting.painting)
                })
                wrapper.appendChild(itemDiv)
            })

            if (configurator.scale) configurator.removeDrawing(configurator.scale)
        }
    },
    'scale': {
        update: function (configurator) {
        }
    },
    'matting': {
        update: function (configurator) {
            const matting = configurator.getMatting()
            let hideMattingLengthRange = false
            if (matting) {
                document.getElementById('matting-length-slider').value = matting.length
                document.getElementById('matting-length-value').innerHTML = `${document.getElementById('matting-length-slider').value} cm`
                let availableSize = Math.min(matting.frame.getAvailableBounds().size.width, matting.frame.getAvailableBounds().size.height) * configurator.pxPerCm
                hideMattingLengthRange = availableSize < configurator.constants.defaultMattingSize + configurator.constants.minArtworkSize || matting.frame.mattings?.length > 2
            }
            document.getElementById('remove-matting').style.display = matting?.frame?.mattings?.length > 0 ? 'flex' : 'none'
            document.getElementById('add-matting').style.display = hideMattingLengthRange ? 'none' : 'flex'
        }
    },
    'glass': {
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
        this.toolBoxTop = document.getElementById('toolbox-top')
        this.toolBoxBottom = document.getElementById('toolbox-bottom')
        this.toolBoxMattings = document.getElementById('toolbox-mattings')
        this.modal = null
        this.setStep(0)
        this.initEvents()
    }
    updateToolBox() {
        if (!this.toolBoxTop || !this.configurator) return
        const activeSelection = this.configurator.activeSelection
        const bottomPaneHeight = activeSelection && activeSelection?.data?.type === 'matting' ? 20 : 0
        this.toolBoxTop.style.display = activeSelection ? 'flex' : 'none'
        this.toolBoxBottom.style.display = activeSelection && activeSelection?.data?.type !== 'matting' ? 'flex' : 'none'
        this.toolBoxMattings.style.display = activeSelection?.data?.type === 'matting' ? 'flex' : 'none'
        if (!activeSelection) return
        const viewSize = { width: this.configurator.canvas.view._viewSize.width, height: this.configurator.canvas.view._viewSize.height - bottomPaneHeight }
        // top position
        const bboxTop = this.toolBoxTop.getBoundingClientRect()
        const selectionTopBounds = activeSelection.frame?.bounds.topCenter ?? activeSelection.bounds.topCenter
        const positionTop = this.configurator.canvas.view.projectToView(selectionTopBounds.subtract(new paper.Point(0, 30 / this.configurator.canvas.view.zoom)))
        this.toolBoxTop.style.left = `${Math.min(Math.max(0, positionTop.x - bboxTop.width / 2), viewSize.width - bboxTop.width)}px`
        this.toolBoxTop.style.top = `${Math.min(Math.max(0, positionTop.y - bboxTop.height), viewSize.height - bboxTop.height)}px`
        // bottom position
        const frameSize = {
            width: activeSelection.frame?.strokeBounds.size.width ?? activeSelection.strokeBounds.size.width,
            height: activeSelection.frame?.strokeBounds.size.height ?? activeSelection.strokeBounds.size.height
        }
        const sizeText = {
            width: Math.round(frameSize.width * this.configurator.pxPerCm),
            height: Math.round(frameSize.height * this.configurator.pxPerCm)
        }
        this.toolBoxBottom.innerHTML = `${sizeText.width}x${sizeText.height} cm`
        const bboxBottom = this.toolBoxBottom.getBoundingClientRect()
        const selectionBottomBounds = activeSelection.frame?.bounds.bottomCenter ?? activeSelection.bounds.bottomCenter
        const positionBottom = this.configurator.canvas.view.projectToView(selectionBottomBounds.add(new paper.Point(0, 30 / this.configurator.canvas.view.zoom)))
        this.toolBoxBottom.style.left = `${Math.min(Math.max(0, positionBottom.x - bboxBottom.width / 2), viewSize.width - bboxBottom.width)}px`
        this.toolBoxBottom.style.top = `${Math.min(Math.max(0, positionBottom.y), viewSize.height - bboxBottom.height)}px`
        // mattings list
        this.updateToolBoxMattings(activeSelection)
        const bboxMattings = this.toolBoxMattings.getBoundingClientRect()
        this.toolBoxMattings.style.left = `${Math.min(Math.max(0, positionBottom.x - bboxMattings.width / 2), viewSize.width - bboxMattings.width)}px`
        this.toolBoxMattings.style.top = `${Math.min(Math.max(0, positionBottom.y), viewSize.height - bboxMattings.height)}px`
    }
    updateToolBoxMattings(selection) {
        if (!selection?.frame) return
        while (this.toolBoxMattings.firstChild) {
            this.toolBoxMattings.firstChild.remove()
        }
        const wrapper = this.toolBoxMattings
        const listDiv = document.createElement('div')
        listDiv.classList.add('matting-list')
        selection.frame.mattings.forEach(matting => {
            const itemDiv = document.createElement('div')
            itemDiv.classList.add('matting-item')
            const imageEl = document.createElement('img')
            imageEl.setAttribute('src', matting._mattingImage?.src)
            imageEl.classList.add('matting-image')
            itemDiv.appendChild(imageEl)
            itemDiv.style.border = selection === matting ? '1px solid #fff' : 'none'
            itemDiv.addEventListener('click', () => {
                this.configurator.setActiveSelection(matting, true)
            })
            listDiv.appendChild(itemDiv)
        })
        wrapper.appendChild(listDiv)
    }
    updateSelectionPane(pane) {
        if (!pane) pane = steps[this.stepIndex]?.pane
        this.updateCartPrice()
        this.updateMattingSlider()
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
        document.getElementById('matting-slider').style.display = this.activePane === 'matting' && this.configurator.activeSelection instanceof paper.Matting ? 'flex' : 'none'
    }
    updatePaintingSelectionOptions() {
        if (this.configurator.activeSelection) {
            document.getElementById('painting-name-options').value = this.configurator.activeSelection.data?.name
        }
    }
    updateCartPrice() {
        document.getElementById('cart-bg').style.display = this.configurator.getFrame() ? 'flex' : 'none'
        document.getElementById('checkout').style.display = this.configurator.getFrame() ? 'flex' : 'none'
        document.getElementById('checkout').setAttribute('data-totalitems', this.configurator.getPaintings().length)
        document.getElementById('cart-total-price').innerHTML = `${this.configurator.getTotalPrice().toFixed(2)}$`
    }
    updateMattingSlider() {
        this.configurator.calcAvailableMattingLength(this.configurator.activeSelection?.frame)
    }
    updatePaintingOptions(pane) {
        this.updateCartPrice()
        let activeSelection = this.configurator.activeSelection
        document.getElementById('painting-options').style.display = activeSelection ? 'flex' : 'none'
        document.getElementById('artwork-item-menu').style.display = activeSelection?.frame || activeSelection?.data?.type === 'frame' ? 'flex' : 'none'
        document.getElementById('matting-item-menu').style.display = activeSelection?.frame || activeSelection?.data?.type === 'frame' ? 'flex' : 'none'
        document.getElementById('glass-item-menu').style.display = activeSelection?.frame || activeSelection?.data?.type === 'frame' ? 'flex' : 'none'
        document.getElementById('back-item-menu').style.display = activeSelection?.frame || activeSelection?.data?.type === 'frame' ? 'flex' : 'none'
        const paintingOptionsCollection = document.getElementsByClassName('painting-options-item-menu')
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
        const step = steps[this.stepIndex]
        this.configurator.discardActiveSelection()
        const stepCollection = document.getElementsByClassName('step-item')
        for (let i = 0; i < stepCollection.length; i++) {
            stepCollection[i].style.display = 'none'
        }
        if (step) {
            const stepEl = document.getElementById(step.el)
            if (stepEl) stepEl.style.display = 'flex'
            step.activateAction(this.configurator)
        }
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
        wrapper.prepend(itemDiv)
    }
    openModal(name) {
        let el = document.getElementById(name)
        if (!el) return
        el.style.display = 'flex'
        this.modal = el
    }
    closeModal() {
        if (!this.modal) return
        this.modal.style.display = 'none'
        this.modal = null
    }
    updateCartModal() {
        const parent = document.getElementById('checkout-modal-body')
        while (parent.lastChild) {
            parent.removeChild(parent.lastChild)
        }
        const paintings = this.configurator.getPaintingsAsImage()
        paintings.forEach(painting => {
            const itemDiv = document.createElement('div')
            itemDiv.classList.add('cart-item')
            itemDiv.style.color = painting.painting.frame ? '#000' : 'red'
            itemDiv.style.paddingBottom = '5px'
            const leftDiv = document.createElement('div')
            leftDiv.style.display = 'flex'
            leftDiv.style.gap = '20px'
            const imageEl = document.createElement('img')
            imageEl.setAttribute('src', painting.image)
            imageEl.classList.add('cart-image')
            const detailsDiv = document.createElement('div')
            detailsDiv.style.display = 'flex'
            detailsDiv.style.flexDirection = 'column'
            const nameEl = document.createElement('label')
            nameEl.innerText = painting.painting.data?.name
            const sizeEl = document.createElement('span')
            const frameSize = {
                width: painting.painting.frame?.strokeBounds.size.width ?? painting.painting.strokeBounds.size.width,
                height: painting.painting.frame?.strokeBounds.size.height ?? painting.painting.strokeBounds.size.height
            }
            sizeEl.innerText = `Size: ${Math.round(frameSize.width * this.configurator.pxPerCm)}x${Math.round(frameSize.height * this.configurator.pxPerCm)}cm`
            const frameEl = document.createElement('span')
            frameEl.innerText = `Frame: ${painting.painting.frame ? painting.painting.frame.data?.asset?.id : 'No'}`
            const mattingsEl = document.createElement('span')
            mattingsEl.innerText = `Matting: ${painting.painting.frame?.mattings?.length > 0 ? painting.painting.frame?.mattings?.length : 'No'}`
            const glassEl = document.createElement('span')
            glassEl.innerText = `Glass: ${painting.painting.frame?.glass ? painting.painting.frame?.glass?.type : 'No'}`
            detailsDiv.appendChild(nameEl)
            detailsDiv.appendChild(sizeEl)
            detailsDiv.appendChild(frameEl)
            detailsDiv.appendChild(mattingsEl)
            detailsDiv.appendChild(glassEl)

            const priceEl = document.createElement('label')
            priceEl.innerText = painting.price
            leftDiv.appendChild(imageEl)
            leftDiv.appendChild(detailsDiv)
            itemDiv.appendChild(leftDiv)
            itemDiv.appendChild(priceEl)
            parent.appendChild(itemDiv)
        })
        const totalPriceDiv = document.createElement('div')
        totalPriceDiv.style.display = 'flex'
        totalPriceDiv.style.justifyContent = 'end'
        totalPriceDiv.style.marginTop = '10px'
        const totalPriceEl = document.createElement('label')
        totalPriceEl.style.fontWeight = 'bolder'
        totalPriceEl.style.fontSize = '18px'
        totalPriceEl.innerText = `Total: ${this.configurator.getTotalPrice().toFixed(2)}$`
        totalPriceDiv.appendChild(totalPriceEl)
        parent.appendChild(totalPriceDiv)
    }
    initEvents() {
        // init observer for mobile styling
        const resizeEditorObserver = new ResizeObserver((entries) => {
            entries.forEach(entry => {
                let width = entry.contentRect.width
                let height = entry.contentRect.height
                this.configurator.isMobile = Math.min(width, height) < 580 ? true : false
                let vh = window.innerHeight * 0.01
                // Then we set the value in the --vh custom property to the root of the document
                document.documentElement.style.setProperty('--vh', `${vh}px`)
                document.getElementById('app-container').style.minHeight = this.configurator.isMobile ? 'fit-content' : 'inherit'
                document.getElementById('app-container').style.height = this.configurator.isMobile ? 'calc(var(--vh, 1vh) * 100)' : '100vh'
                // FOR DEBUG ONLY
                document.getElementById('add-frame-item-debug').style.display = this.configurator.isMobile ? 'none' : 'flex'
            })
        })
        resizeEditorObserver.observe(document.getElementById('app-container'))
        // add shortcuts
        document.addEventListener('keydown', (event) => {
            if ((event.metaKey || event.ctrlKey) && event.key === 'z') {
                this.configurator.undo()
            }
            if ((event.metaKey || event.ctrlKey) && event.key === 'y') {
                this.configurator.redo()
            }
        })
        // upload wall
        document.getElementById('wall-upload').addEventListener('change', (event) => {
            event.preventDefault()
            const reader = new FileReader()
            reader.onload = (event) => {
                this.configurator.setBgImage(event.target.result, this.configurator.constants.defaultWallSize, [0, 0]).then(() => {
                    this.setStep(1)
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
                    id: this.configurator.uuidv4()
                }
                artworks.unshift(artwork)
                this.addArtworkItem(artwork, true)
                this.configurator.addArtwork(artwork)
                this.setStep(3)
            }
            reader.readAsDataURL(event.target.files[0])
        })

        document.getElementById('frame-file-upload').addEventListener('change', (event) => {
            event.preventDefault()
            const reader = new FileReader()
            reader.onload = (event) => {
                this.configurator.setFrame({
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
                    id: this.configurator.uuidv4()
                }
                artworks.unshift(artwork)
                this.addArtworkItem(artwork, true)
                this.configurator.setArtwork(artwork)
            }
            reader.readAsDataURL(event.target.files[0])
        })

        document.getElementById('add-artwork').addEventListener('click', () => {
            this.updateSelectionPane('artwork')
        })
        document.getElementById('wall-size').addEventListener('input', (event) => {
            this.configurator.wallSize = parseInt(event.target.value)
            if (this.configurator.scale) {
                this.configurator.setPxPerCm(this.configurator.wallSize / this.configurator.scale.length)
                this.configurator.updatePathText(this.configurator.scale)
            }
        })
        document.getElementById('fit-to-screen').addEventListener('click', () => {
            this.configurator.discardActiveSelection()
            this.configurator.fitToScreen()
        })
        const paintingOptionsCollection = document.getElementsByClassName('painting-options-item-menu')
        for (let i = 0; i < paintingOptionsCollection.length; i++) {
            paintingOptionsCollection[i].addEventListener('click', () => {
                this.configurator.selectPaintingByPaneType(paintingOptionsCollection[i].getAttribute('type'))
            })
        }
        document.getElementById('scale-confirm').addEventListener('click', () => {
            this.setStep(this.stepIndex + 1)
        })
        document.getElementById('painting-name-options').addEventListener('focus', () => {
            let el = document.getElementById('painting-name-options')
            el.selectionStart = 0
            el.selectionEnd = el.value.length
        }, false)
        document.getElementById('painting-name-options').addEventListener('input', () => {
            this.configurator.updatePaintingName(document.getElementById('painting-name-options').value)
        }, false)
        document.getElementById('rename-painting-focus').addEventListener('click', () => {
            let el = document.getElementById('painting-name-options')
            el.focus()
            el.selectionStart = 0
            el.selectionEnd = el.value.length
        })
        document.getElementById('clone-painting').addEventListener('click', () => {
            this.configurator.clonePainting(this.configurator.activeSelection?.data?.uuid)
        })
        document.getElementById('remove-painting').addEventListener('click', () => {
            this.configurator.removePainting()
        })
        document.getElementById('add-matting').addEventListener('click', () => {
            this.configurator.addMatting(mattings[1])
        })
        document.getElementById('remove-matting').addEventListener('click', () => {
            this.configurator.removeMatting()
        })
        // frame functionality, temporary disabled
        /*
        document.getElementById('remove-frame').addEventListener('click', () => {
            this.configurator.removeFrame()
        })
        */
        document.getElementById('matting-length-slider').addEventListener('input', () => {
            this.configurator.updateMattingLength(Number(document.getElementById('matting-length-slider').value))
            document.getElementById('matting-length-value').innerHTML = `${document.getElementById('matting-length-slider').value} cm`
            let availableSize = Math.min(this.configurator.activeSelection?.frame?.getAvailableBounds()?.size?.width, this.configurator.activeSelection?.frame?.getAvailableBounds()?.size?.height) * this.configurator.pxPerCm
            let hideMattingLengthRange = availableSize < this.configurator.constants.defaultMattingSize + this.configurator.constants.minArtworkSize || this.configurator.activeSelection?.frame?.mattings?.length > 2
            document.getElementById('add-matting').style.display = hideMattingLengthRange ? 'none' : 'flex'
        }, false)
        // use change event for snapshot
        document.getElementById('matting-length-slider').addEventListener('change', () => {
            this.configurator.snapshot()
        }, false)

        document.querySelectorAll("input[name='glass-radio']").forEach((input) => {
            input.addEventListener('click', () => {
                this.configurator.updateGlass({
                    type: input.getAttribute('glass-type'),
                    opacity: input.value
                })
                const modalBtns = document.getElementsByClassName('glass-info')
                for (let i = 0; i < modalBtns.length; i++) {
                    modalBtns[i].style.display = modalBtns[i].getAttribute('radio-name') === input.getAttribute('glass-type') ? 'flex' : 'none'
                }
            })
        })
        document.querySelectorAll("input[name='back-radio']").forEach((input) => {
            input.addEventListener('click', () => {
                const modalBtns = document.getElementsByClassName('back-info')
                for (let i = 0; i < modalBtns.length; i++) {
                    modalBtns[i].style.display = modalBtns[i].getAttribute('radio-name') === input.getAttribute('back-type') ? 'flex' : 'none'
                }
            })
        })
        document.getElementById('undo').addEventListener('click', () => {
            this.configurator.undo()
        })
        document.getElementById('redo').addEventListener('click', () => {
            this.configurator.redo()
        })
        document.getElementById('checkout').addEventListener('click', () => {
            this.configurator.discardActiveSelection()
            this.updateCartModal()
            this.openModal('cart-info')
        })
        document.getElementById('checkout-popup').addEventListener('click', () => {
            if (confirm('Are you sure you want to proceed to checkout ? ')) {
                console.log(this.configurator.toJsonWithBg())
            }
        })
        const modalBtns = document.getElementsByClassName('open-modal-btn')
        for (let i = 0; i < modalBtns.length; i++) {
            modalBtns[i].addEventListener('click', () => {
                this.openModal(modalBtns[i].getAttribute('modal-name'))
            })
        }
        const modalCloseBtns = document.getElementsByClassName('close')
        for (let i = 0; i < modalCloseBtns.length; i++) {
            modalCloseBtns[i].addEventListener('click', () => {
                this.closeModal(this.modal)
            })
        }
        // When the user clicks anywhere outside of the modal, close it
        window.addEventListener('click', (event) => {
            if (this.modal && event.target == this.modal) {
                this.modal.style.display = 'none'
                this.modal = null
            }
        })
    }
}