//#037171
fabric.Object.prototype.cornerColor = '#037171'
fabric.Object.prototype.borderColor = 'transparent'

class FrameConfigurator {
    constructor(canvasId, wrapper) {
        this.canvas = new fabric.Canvas(canvasId)
        this.stepIndex = 0
        // canvas resize 
        const resizeObserver = new ResizeObserver((entries) => {
            entries.forEach(entry => {
                let width = entry.contentRect.width
                let height = entry.contentRect.height
                this.canvas.setWidth(width)
                this.canvas.setHeight(height)
            })
        })
        resizeObserver.observe(wrapper)
        // for filters
        if (fabric.isWebglSupported()) {
            fabric.filterBackend = new fabric.WebglFilterBackend()
            fabric.textureSize = fabric.maxTextureSize
        }
    }
    setBgImage(url, callback) {
        fabric.Image.fromURL(url, (img) => {
            img.set({
                locked: true,
                selectable: false,
                evented: false
            })
            img.scaleToHeight(this.canvas.height)
            this.canvas.add(img)
            img.center()
            callback && callback()
        })
    }
    loadImage(image) {
        fabric.Image.fromURL(image, (img) => {
                img.set({
                    shadow: new fabric.Shadow({
                        color: "rgba(0,0,0,0.7)",
                        blur: 15,
                        offsetX: 7,
                        offsetY: 10,
                      })
                })
                img.scaleToWidth(this.canvas.width / 4)
                this.canvas.add(img)
                img.centerH()
                img.set({
                    top: 200
                })
                img.setControlsVisibility({
                    mt: false,
                    mb: false,
                    ml: false,
                    mr: false,
                    mtr: false,
                });
                this.canvas.setActiveObject(img)
            }
        )
    }
}
const frameInstance = new FrameConfigurator('canvas', document.getElementById('wrapper'))

Dropzone.options.myGreatDropzone = { // camelized version of the `id`
    paramName: "file", // The name that will be used to transfer the file
    maxFilesize: 20, // MB
    addedfile: function (file) {
        var reader = new FileReader();
        reader.onload = function (event) {
            // event.target.result contains base64 encoded image
            frameInstance.setBgImage('https://i.imgur.com/KPFoL2H.jpg', () => {
                frameInstance.loadImage(event.target.result)
            })
            document.getElementById('my-great-dropzone').style.display = 'none'
        };
        reader.readAsDataURL(file)
    }
}