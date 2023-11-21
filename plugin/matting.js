paper.Matting = paper.Item.extend(
    {
        _class: 'Matting',
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
            if (props.src) this.setMatting(props)
            // https://i.imgur.com/4fRVhjt.png // green
            // https://i.imgur.com/0kFsOHE.png // blue
            //this.setPass({ src: 'https://i.imgur.com/0kFsOHE.png', length: 15 })
        },
        setMatting: function (options) {
            /*
            if (!options.length || options.length === 0) {
                delete this._mattingImage
                this._changed(9)
                return
            }
            this.length = options.length
            */
            if (options.src) this.src = options.src
            this._mattingImage = new Image()
            this._mattingImage.src = options.src
            this._mattingImage.crossOrigin = 'anonymous'
            this._mattingImage.onload = () => {
                this._mattingImage.loaded = true
                this._changed(9)
            }
        },
        setLength: function (length) {
            this.length = length
            this.strokeWidth = length / this.pxPerCm
            this._changed(9)
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
            // draw pass
            if (this._mattingImage?.loaded && this.length) {
                const mattingLength = this.length / this.pxPerCm
                // top shadow
                ctx.save()
                ctx.scale(1 / this.scaling.x, 1 / this.scaling.y)
                ctx.shadowColor = 'rgba(0,0,0,0.2)'
                ctx.shadowBlur = 3 * zoom
                ctx.shadowOffsetY = 3 * zoom
                ctx.fillStyle = '#000'
                ctx.beginPath()
                ctx.rect(-this._size.width / 2 * this.scaling.x - mattingLength / 2, - this._size.height / 2 * this.scaling.y - mattingLength / 2, this._size.width * this.scaling.x + mattingLength, mattingLength)
                ctx.closePath()
                ctx.fill()
                ctx.restore()
                // bottom shadow
                ctx.save()
                ctx.scale(1 / this.scaling.x, 1 / this.scaling.y)
                ctx.shadowColor = 'rgba(0,0,0,0.4)'
                ctx.shadowBlur = 3 * zoom
                ctx.shadowOffsetY = -3 * zoom
                ctx.fillStyle = '#000'
                ctx.beginPath()
                ctx.rect(-this._size.width / 2 * this.scaling.x - mattingLength / 2, this._size.height / 2 * this.scaling.y - mattingLength / 2, this._size.width * this.scaling.x + mattingLength, mattingLength)
                ctx.closePath()
                ctx.fill()
                ctx.restore()
                // left shadow
                ctx.save()
                ctx.scale(1 / this.scaling.x, 1 / this.scaling.y)
                ctx.shadowColor = 'rgba(0,0,0,0.2)'
                ctx.shadowBlur = 3 * zoom
                ctx.shadowOffsetX = 3 * zoom
                ctx.fillStyle = '#000'
                ctx.beginPath()
                ctx.rect(-this._size.width / 2 * this.scaling.x - mattingLength / 2, -this._size.height / 2 * this.scaling.y - mattingLength / 2, mattingLength, this._size.height * this.scaling.y + mattingLength)
                ctx.closePath()
                ctx.fill()
                ctx.restore()
                // right shadow
                ctx.save()
                ctx.scale(1 / this.scaling.x, 1 / this.scaling.y)
                ctx.shadowColor = 'rgba(0,0,0,0.4)'
                ctx.shadowBlur = 3 * zoom
                ctx.shadowOffsetX = -3 * zoom
                ctx.fillStyle = '#000'
                ctx.beginPath()
                ctx.rect(this._size.width / 2 * this.scaling.x - mattingLength / 2, -this._size.height / 2 * this.scaling.y - mattingLength / 2, mattingLength, this._size.height * this.scaling.y + mattingLength)
                ctx.closePath()
                ctx.fill()
                ctx.restore()
                // top pass
                ctx.save()
                ctx.scale(1 / this.scaling.x, 1 / this.scaling.y)
                ctx.beginPath()
                ctx.rect(-this._size.width / 2 * this.scaling.x - mattingLength / 2, - this._size.height / 2 * this.scaling.y - mattingLength / 2, this._size.width * this.scaling.x + mattingLength, mattingLength)
                ctx.closePath()
                ctx.fillStyle = ctx.createPattern(this._mattingImage, 'repeat')
                ctx.scale(mattingLength / this._mattingImage.width, mattingLength / this._mattingImage.width)
                ctx.fill()
                ctx.restore()
                // bottom pass
                ctx.save()
                ctx.scale(1 / this.scaling.x, 1 / this.scaling.y)
                ctx.beginPath()
                ctx.rect(-this._size.width / 2 * this.scaling.x - mattingLength / 2, this._size.height / 2 * this.scaling.y - mattingLength / 2, this._size.width * this.scaling.x + mattingLength, mattingLength)
                ctx.closePath()
                ctx.fillStyle = ctx.createPattern(this._mattingImage, 'repeat')
                ctx.scale(mattingLength / this._mattingImage.width, mattingLength / this._mattingImage.width)
                ctx.fill()
                ctx.restore()
                // left pass
                ctx.save()
                ctx.scale(1 / this.scaling.x, 1 / this.scaling.y)
                ctx.beginPath()
                ctx.rect(-this._size.width / 2 * this.scaling.x - mattingLength / 2, -this._size.height / 2 * this.scaling.y - mattingLength / 2, mattingLength, this._size.height * this.scaling.y + mattingLength)
                ctx.closePath()
                ctx.fillStyle = ctx.createPattern(this._mattingImage, 'repeat')
                ctx.scale(mattingLength / this._mattingImage.width, mattingLength / this._mattingImage.width)
                ctx.fill()
                ctx.restore()
                // right pass
                ctx.save()
                ctx.scale(1 / this.scaling.x, 1 / this.scaling.y)
                ctx.beginPath()
                ctx.rect(this._size.width / 2 * this.scaling.x - mattingLength / 2, -this._size.height / 2 * this.scaling.y - mattingLength / 2, mattingLength, this._size.height * this.scaling.y + mattingLength)
                ctx.closePath()
                ctx.fillStyle = ctx.createPattern(this._mattingImage, 'repeat')
                ctx.scale(mattingLength / this._mattingImage.width, mattingLength / this._mattingImage.width)
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