paper.Frame = paper.Item.extend(
    {
        _class: 'Frame',
        _applyMatrix: false,
        _canApplyMatrix: false,
        _canScaleStroke: true,
        _size: null, // width, height
        src: null,
        length: null,
        offset: null,
        _image: null,
        _serializeFields: {
            src: null,
            length: null,
            offset: null
        },
        initialize: function Frame(props) {
            props.size = [props.width, props.height]
            this._initialize(props, new paper.Point(props.position))
            if (props.src) this.setFrame(props)
            // https://i.imgur.com/4fRVhjt.png // green
            // https://i.imgur.com/0kFsOHE.png // blue
            this.setPass({ src: 'https://i.imgur.com/0kFsOHE.png', passLength: 15 })
        },
        setPass: function (options) {
            if (options.passLength) this.passLength = options.passLength
            this._passImage = new Image()
            this._passImage.src = options.src
            this._passImage.crossOrigin = 'anonymous'
            this._passImage.onload = () => {
                this._passImage.loaded = true
                this._changed(9)
            }
        },
        setFrame: function (options) {
            if (options.length) this.length = options.length
            if (options.offset) this.offset = options.offset
            if (options.pxPerCm) this.pxPerCm = options.pxPerCm
            if (options.strokeWidth) this.strokeWidth = options.strokeWidth
            this._image = new Image()
            this._image.src = options.src
            this._image.crossOrigin = 'anonymous'
            this._image.onload = () => {
                this._image.loaded = true
                this._changed(9)
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
        isEmpty: function () {
            return false
        },
        _canComposite: function () {
            return !(this.hasFill() && this.hasStroke())
        },
        _draw: function (ctx, param, viewMatrix) {
            this._setStyles(ctx, param, viewMatrix)
            const zoom = this.getView()?.zoom || 1
            const sideLength = this.length / this.pxPerCm
            const minScaling = Math.min(this.scaling.x, this.scaling.y)
            // draw pass
            if (this._passImage?.loaded && this.passLength) {
                const passLength = this.passLength / this.pxPerCm
                // top shadow
                ctx.save()
                ctx.scale(1 / this.scaling.x, 1 / this.scaling.y)
                ctx.shadowColor = 'rgba(0,0,0,0.6)'
                ctx.shadowBlur = 3 * zoom
                ctx.shadowOffsetY = 3 * zoom
                ctx.fillStyle = '#000'
                ctx.beginPath()
                ctx.rect(-this._size.width / 2 * this.scaling.x, -this._size.height / 2 * this.scaling.y, this._size.width * this.scaling.x, passLength)
                ctx.closePath()
                ctx.fill()
                ctx.restore()
                // bottom shadow
                ctx.save()
                ctx.scale(1 / this.scaling.x, 1 / this.scaling.y)
                ctx.shadowColor = 'rgba(0,0,0,0.6)'
                ctx.shadowBlur = 3 * zoom
                ctx.shadowOffsetY = -3 * zoom
                ctx.fillStyle = '#000'
                ctx.beginPath()
                ctx.rect(-this._size.width / 2 * this.scaling.x, this._size.height / 2 * this.scaling.y -passLength, this._size.width * this.scaling.x, passLength)
                ctx.closePath()
                ctx.fill()
                ctx.restore()
                // left shadow
                ctx.save()
                ctx.scale(1 / this.scaling.x, 1 / this.scaling.y)
                ctx.shadowColor = 'rgba(0,0,0,0.6)'
                ctx.shadowBlur = 3 * zoom
                ctx.shadowOffsetX = 3 * zoom
                ctx.fillStyle = '#000'
                ctx.beginPath()
                ctx.rect(-this._size.width / 2 * this.scaling.x, -this._size.height / 2 * this.scaling.y + passLength, passLength, this._size.height * this.scaling.y - passLength * 2)
                ctx.closePath()
                ctx.fill()
                ctx.restore()
                // right shadow
                ctx.save()
                ctx.scale(1 / this.scaling.x, 1 / this.scaling.y)
                ctx.shadowColor = 'rgba(0,0,0,0.6)'
                ctx.shadowBlur = 3 * zoom
                ctx.shadowOffsetX = -3 * zoom
                ctx.fillStyle = '#000'
                ctx.beginPath()
                ctx.rect(this._size.width / 2 * this.scaling.x - passLength, -this._size.height / 2 * this.scaling.y + passLength, passLength, this._size.height * this.scaling.y - passLength * 2)
                ctx.closePath()
                ctx.fill()
                ctx.restore()
                // top pass
                ctx.save()
                ctx.scale(1 / this.scaling.x, 1 / this.scaling.y)
                ctx.beginPath()
                ctx.rect(-this._size.width / 2 * this.scaling.x, -this._size.height / 2 * this.scaling.y, this._size.width * this.scaling.x, passLength)
                ctx.closePath()
                ctx.fillStyle = ctx.createPattern(this._passImage, 'repeat')
                ctx.scale(passLength / this._passImage.width, passLength / this._passImage.width)
                ctx.fill()
                ctx.restore()
                // bottom pass
                ctx.save()
                ctx.scale(1 / this.scaling.x, 1 / this.scaling.y)
                ctx.beginPath()
                ctx.rect(-this._size.width / 2 * this.scaling.x, this._size.height / 2 * this.scaling.y -passLength, this._size.width * this.scaling.x, passLength)
                ctx.closePath()
                ctx.fillStyle = ctx.createPattern(this._passImage, 'repeat')
                ctx.scale(passLength / this._passImage.width, passLength / this._passImage.width)
                ctx.fill()
                ctx.restore()
                // left pass
                ctx.save()
                ctx.scale(1 / this.scaling.x, 1 / this.scaling.y)
                ctx.beginPath()
                ctx.rect(-this._size.width / 2 * this.scaling.x, -this._size.height / 2 * this.scaling.y, passLength, this._size.height * this.scaling.y)
                ctx.closePath()
                ctx.fillStyle = ctx.createPattern(this._passImage, 'repeat')
                ctx.scale(passLength / this._passImage.width, passLength / this._passImage.width)
                ctx.fill()
                ctx.restore()
                // right pass
                ctx.save()
                ctx.scale(1 / this.scaling.x, 1 / this.scaling.y)
                ctx.beginPath()
                ctx.rect(this._size.width / 2 * this.scaling.x - passLength, -this._size.height / 2 * this.scaling.y, passLength, this._size.height * this.scaling.y)
                ctx.closePath()
                ctx.fillStyle = ctx.createPattern(this._passImage, 'repeat')
                ctx.scale(passLength / this._passImage.width, passLength / this._passImage.width)
                ctx.fill()
                ctx.restore()
            }
            // draw shadow layer
            ctx.save()
            ctx.lineWidth = sideLength
            ctx.strokeStyle = '#000'
            ctx.shadowColor = 'rgba(0,0,0,0.6)'
            ctx.shadowBlur = sideLength * zoom
            ctx.scale(1 / this.scaling.x, 1 / this.scaling.y)
            ctx.strokeRect(-this._size.width / 2 * this.scaling.x, -this._size.height / 2 * this.scaling.y, this._size.width * this.scaling.x, this._size.height * this.scaling.y)
            ctx.restore()
            // draw frame
            if (this._image?.loaded) {
                ctx.fillStyle = ctx.createPattern(this._image, 'repeat')
                // left side
                ctx.save()
                ctx.beginPath()
                ctx.scale(1 / this.scaling.x, 1 / this.scaling.y)
                ctx.moveTo(-this._size.width * this.scaling.x / 2 - sideLength / 2, -this._size.height * this.scaling.y / 2 - sideLength / 2)
                ctx.lineTo(-this._size.width * this.scaling.x / 2 + sideLength / 2, -this._size.height * this.scaling.y / 2 + sideLength / 2)
                ctx.lineTo(-this._size.width * this.scaling.x / 2 + sideLength / 2, this._size.height * this.scaling.y / 2 - sideLength / 2)
                ctx.lineTo(-this._size.width * this.scaling.x / 2 - sideLength / 2, this._size.height * this.scaling.y / 2 + sideLength / 2)
                ctx.closePath()
                ctx.translate(-this._size.width * this.scaling.x / 2 - sideLength / 2, 0)
                ctx.scale(sideLength / this._image.width, sideLength / this._image.width)
                ctx.fill()
                ctx.restore()
                // top side
                ctx.save()
                ctx.beginPath()
                ctx.scale(1 / this.scaling.x, 1 / this.scaling.y)
                ctx.moveTo(-this._size.width * this.scaling.x / 2 - sideLength / 2, -this._size.height * this.scaling.y / 2 - sideLength / 2)
                ctx.lineTo(this._size.width * this.scaling.x / 2 + sideLength / 2, -this._size.height * this.scaling.y / 2 - sideLength / 2)
                ctx.lineTo(this._size.width * this.scaling.x / 2 - sideLength / 2, -this._size.height * this.scaling.y / 2 + sideLength / 2)
                ctx.lineTo(-this._size.width * this.scaling.x / 2 + sideLength / 2, -this._size.height * this.scaling.y / 2 + sideLength / 2)
                ctx.closePath()
                ctx.translate(0, -this._size.height * this.scaling.y / 2 - sideLength / 2)
                ctx.rotate((90 * Math.PI) / 180)
                ctx.scale(sideLength / this._image.width, sideLength / this._image.width)
                ctx.fill()
                ctx.restore()
                // right side
                ctx.save()
                ctx.beginPath()
                ctx.scale(1 / this.scaling.x, 1 / this.scaling.y)
                ctx.moveTo(this._size.width * this.scaling.x / 2 + sideLength / 2, -this._size.height * this.scaling.y / 2 - sideLength / 2)
                ctx.lineTo(this._size.width * this.scaling.x / 2 - sideLength / 2, -this._size.height * this.scaling.y / 2 + sideLength / 2)
                ctx.lineTo(this._size.width * this.scaling.x / 2 - sideLength / 2, this._size.height * this.scaling.y / 2 - sideLength / 2)
                ctx.lineTo(this._size.width * this.scaling.x / 2 + sideLength / 2, this._size.height * this.scaling.y / 2 + sideLength / 2)
                ctx.closePath()
                ctx.translate(this._size.width * this.scaling.x / 2 + sideLength / 2, 0)
                ctx.rotate((-180 * Math.PI) / 180)
                ctx.scale(sideLength / this._image.width, sideLength / this._image.width)
                ctx.fill()
                ctx.restore()
                // bottom side
                ctx.save()
                ctx.beginPath()
                ctx.scale(1 / this.scaling.x, 1 / this.scaling.y)
                ctx.moveTo(this._size.width * this.scaling.x / 2 + sideLength / 2, this._size.height * this.scaling.y / 2 + sideLength / 2)
                ctx.lineTo(this._size.width * this.scaling.x / 2 - sideLength / 2, this._size.height * this.scaling.y / 2 - sideLength / 2)
                ctx.lineTo(-this._size.width * this.scaling.x / 2 + sideLength / 2, this._size.height * this.scaling.y / 2 - sideLength / 2)
                ctx.lineTo(-this._size.width * this.scaling.x / 2 - sideLength / 2, this._size.height * this.scaling.y / 2 + sideLength / 2)
                ctx.closePath()
                ctx.translate(0, this._size.height * this.scaling.y / 2 + sideLength / 2)
                ctx.rotate((-90 * Math.PI) / 180)
                ctx.scale(sideLength / this._image.width, sideLength / this._image.width)
                ctx.fill()
                ctx.restore()
            }
        },
        _getBounds: function (matrix, options) {
            let rect = new paper.Rectangle(this._size).setCenter(0, 0),
                style = this._style,
                strokeWidth =
                    options.stroke && style.hasStroke() && style.getStrokeWidth()
            if (matrix) rect = matrix._transformBounds(rect)
            return strokeWidth
                ? rect.expand(
                    paper.Path._getStrokePadding(
                        strokeWidth,
                        this._getStrokeMatrix(matrix, options)
                    )
                )
                : rect
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
                let hit = false,
                    style = this._style,
                    hitStroke = options.stroke && style.hasStroke(),
                    hitFill = options.fill && style.hasFill()
                if (hitStroke || hitFill) {
                    let strokeRadius = hitStroke ? style.getStrokeWidth() / 2 : 0,
                        strokePadding = options._tolerancePadding.add(
                            paper.Path._getStrokePadding(
                                strokeRadius,
                                !style.getStrokeScaling() && strokeMatrix
                            )
                        )
                    let padding = strokePadding.multiply(2)
                    let rect = new paper.Rectangle(this._size).setCenter(0, 0),
                        outer = rect.expand(padding),
                        inner = rect.expand(padding.negate())
                    hit = outer._containsPoint(point) && !inner._containsPoint(point)
                }

                return hit
                    ? new paper.HitResult(hitStroke ? 'stroke' : 'fill', this)
                    : _hitTestSelf.base.apply(this, arguments)
            }
        }
    })()
)