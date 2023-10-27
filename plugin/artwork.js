paper.Artwork = paper.Item.extend(
    {
        _class: 'Artwork',
        _applyMatrix: false,
        _canApplyMatrix: false,
        _canScaleStroke: true,
        _size: null, // width, height
        clip: null,
        src: null,
        _image: null,
        _serializeFields: {
            src: null,
            clip: null,
        },
        initialize: function Artwork(props) {
            props.size = [props.width || 1, props.height || 1]
            this._initialize(props, new paper.Point(props.position))
            this.setSrc(props.src, true)
        },
        setSrc: function (src, load) {
            this._image = new Image()
            this._image.src = src
            this._image.crossOrigin = 'anonymous'
            this._image.onload = () => {
                this._image.loaded = true
                this.setSize(this._image.width, this._image.height)
                this._changed(9)
                load && this.emit('load')
            }
        },
        getSize: function () {
            return new paper.Size(
                this._size.width,
                this._size.height,
                this,
                'setSize'
            )
        },
        setSize: function () {
            let size = paper.Size.read(arguments)
            if (!this._size) {
                this._size = size.clone()
            } else if (!this._size.equals(size)) {
                let width = size.width,
                    height = size.height
                this._size._set(width, height)
                this._changed(9)
            }
        },
        setClip: function (options) {
            this.clip = {
                size: new paper.Size(options.size),
                offset: new paper.Point(options.offset)
            }
            console.log(this.clip.size, this._size)
            this._changed(9)
        },
        isEmpty: function () {
            return false
        },
        _canComposite: function () {
            return !(this.hasFill() && this.hasStroke())
        },
        _draw: function (ctx, param, viewMatrix) {
            this._setStyles(ctx, param, viewMatrix)
            const zoom = this.getView()?.zoom || 1
            ctx.save()
            // clipping
            if (this.clip && !this._selected) {
                ctx.beginPath()
                ctx.rect((-this.clip.size.width / 2 + this.clip.offset.x) / this.scaling.x, (-this.clip.size.height / 2 + this.clip.offset.y) / this.scaling.y, this.clip.size.width / this.scaling.x, this.clip.size.height / this.scaling.y)
                ctx.clip()
            }
            ctx.fillStyle = '#000'
            ctx.beginPath()
            ctx.rect((-this.clip.size.width / 2 + this.clip.offset.x) / this.scaling.x, (-this.clip.size.height / 2 + this.clip.offset.y) / this.scaling.y, this.clip.size.width / this.scaling.x, this.clip.size.height / this.scaling.y)
            ctx.fill()
            ctx.globalCompositeOperation = 'source-atop'
            if (this._image?.loaded) {
                ctx.drawImage(
                    this._image,
                    -this._size.width / 2, // + x
                    -this._size.height / 2, // + y
                    this._size.width, // newWidth
                    this._size.height // newHeight
                )
            }
            ctx.restore()
        },
        _getBounds: function (matrix, options) {
            let rect = new paper.Rectangle(this._size).setCenter(0, 0)
            if (matrix) rect = matrix._transformBounds(rect)
            console.log("HAPPENS GET BOUNDS")
            return rect
        }
    },
    new (function () {
        return {
            _contains: function _contains(point) {
                return _contains.base.call(this, point)
            },

            _hitTestSelf: function _hitTestSelf(
                point,
                options,
                viewMatrix,
                strokeMatrix
            ) {
                let hit = false
                let size = this._selected ? this._size : {width: this.clip.size.width / this.scaling.x, height: this.clip.size.height / this.scaling.y}
                let offset = this._selected ? { x: 0, y: 0 } : {x: this.clip.offset.x / this.scaling.x, y: this.clip.offset.y / this.scaling.y}
                console.log(offset)
                let rect = new paper.Rectangle(size).setCenter(offset.x, offset.y)
                hit = rect._containsPoint(point)
                return hit
                    ? new paper.HitResult('fill', this)
                    : false
                /*
                return hit
                    ? new paper.HitResult('fill', this)
                    : _hitTestSelf.base.apply(this, arguments)
                    */
            }
        }
    })()
)