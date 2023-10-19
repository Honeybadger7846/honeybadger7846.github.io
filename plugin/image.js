paper.Image = paper.Item.extend(
    {
        _class: 'Image',
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
        initialize: function Image(props) {
            this._image = new Image()
            this._image.src = props.src
            this._image.crossOrigin = 'anonymous'
            this._image.onload = () => {
                this._initialize(props, new paper.Point(props.position))
                this._image.loaded = true
                this.setSize(props.width, props.height)
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
            ctx.save()
            ctx.lineWidth = 10
            ctx.strokeStyle = '#000'
            ctx.scale(1 / this.scaling.x, 1 / this.scaling.y)
            ctx.strokeRect(-this._size.width / 2 * this.scaling.x, -this._size.height / 2 * this.scaling.y, this._size.width * this.scaling.x, this._size.height * this.scaling.y)
            ctx.restore()
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