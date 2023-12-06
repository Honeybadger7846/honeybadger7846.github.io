paper.Frame = paper.Item.extend(
    {
        _class: 'Frame',
        _applyMatrix: false,
        _canApplyMatrix: false,
        _canScaleStroke: true,
        _size: null, // width, height
        src: null,
        glass: {},
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
            this.setGlass(props.glass)
        },
        setGlass: function (options) {
            if (options.src) {
                this.glass.image = new Image()
                this.glass.image.src = options.src
                this.glass.image.crossOrigin = 'anonymous'
                this.glass.image.onload = () => {
                    this.glass.image.loaded = true
                    this._changed(9)
                }
            }
            this.glass.opacity = options.opacity
            this.glass.type = options.type
            this._changed(9)
        },
        setFrame: function (options) {
            if (options.length) {
                let lengthDiff = this.length - options.length
                this._size._set(this._size.width + lengthDiff / this.pxPerCm, this._size.height + lengthDiff / this.pxPerCm)
                this.length = options.length
                this.strokeWidth = options.length / this.pxPerCm
                this._changed(9)
            }
            if (options.offset) this.offset = options.offset
            if (options.pxPerCm) this.pxPerCm = options.pxPerCm
            if (options.src) this.src = options.src
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
            const zoom = Math.max(1, this.getView()?.zoom || 1)
            const sideLength = this.length / this.pxPerCm
            // draw frame
            if (this._image?.loaded) {
                ctx.fillStyle = ctx.createPattern(this._image, 'repeat')
                // left side
                ctx.save()
                // set environment shadow
                ctx.shadowColor = "rgba(0,0,0,0.5)"
                ctx.shadowBlur = 20 * zoom
                ctx.shadowOffsetX = -10 * zoom
                ctx.shadowOffsetY = 10 * zoom
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
                // set environment shadow
                //ctx.shadowColor = "rgba(0,0,0,0.5)"
                //ctx.shadowBlur = 20 * zoom
                //ctx.shadowOffsetX = 1 * zoom
                // ctx.shadowOffsetY = 10 * zoom
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
                // set environment shadow
                ctx.shadowColor = "rgba(0,0,0,0.5)"
                ctx.shadowBlur = 20 * zoom
                ctx.shadowOffsetX = -10 * zoom
                ctx.shadowOffsetY = 10 * zoom
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
                if (this.glass?.image?.loaded && this.glass.opacity > 0) {
                    ctx.save()
                    ctx.globalAlpha = this.glass.opacity ?? 1
                    ctx.scale(1 / this.scaling.x, 1 / this.scaling.y)
                    ctx.beginPath()
                    ctx.rect(-this._size.width * this.scaling.x / 2 + sideLength / 2,
                        -this._size.height * this.scaling.y / 2 + sideLength / 2,
                        this._size.width * this.scaling.x - sideLength,
                        this._size.height * this.scaling.y - sideLength)
                    ctx.clip()
                    const pattern = ctx.createPattern(this.glass.image, 'repeat')
                    ctx.beginPath()
                    const size = this.getView()?.size ?? { width: 2000, height: 2000 }
                    ctx.rect(- size.width / 2, - size.height / 2, size.width, size.height)
                    ctx.fillStyle = pattern
                    ctx.fill()
                    ctx.restore()
                    /*
                    ctx.drawImage(
                        this.glass.image,
                        -this._size.width * this.scaling.x / 2 + sideLength / 2,
                        -this._size.height * this.scaling.y / 2 + sideLength / 2,
                        this._size.width * this.scaling.x - sideLength,
                        this._size.height * this.scaling.y - sideLength
                    )
                    */
                }
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
                    hitStroke = true,
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