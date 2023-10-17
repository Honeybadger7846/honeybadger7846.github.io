paper.Frame = paper.Item.extend(
    {
        _class: 'Frame',
        _applyMatrix: false,
        _canApplyMatrix: false,
        _canScaleStroke: true,
        _size: null, // width, height
        src: null,
        _image: null,
        _serializeFields: {
            src: null,
        },
        initialize: function Frame(props) {
            props.size = [props.width, props.height]
            this._initialize(props, new paper.Point(props.position))
            if (props.src) {
                this._image = new Image()
                this._image.src = props.src
                this._image.crossOrigin = 'anonymous'
                this._image.onload = () => {
                    this._image.loaded = true
                    this._changed(9)
                }
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

            if (this.src && this._image?.loaded) {
                // get the scale
                // it is the min of the 2 ratios
                let scale_factor = Math.min(
                    this._size.width / this._image.width,
                    this._size.height / this._image.height
                )

                // Lets get the new width and height based on the scale factor
                let newWidth = this._image.width * scale_factor
                let newHeight = this._image.height * scale_factor

                // get the top left position of the image
                // in order to center the image within the canvas
                let x = this._size.width / 2 - newWidth / 2
                let y = this._size.height / 2 - newHeight / 2

                // When drawing the image, we have to scale down the image
                // width and height in order to fit within the canvas
                /*
                ctx.drawImage(
                  this._image,
                  -this._size.width / 2, // + x
                  -this._size.height / 2, // + y
                  this._size.width, // newWidth
                  this._size.height // newHeight
                )
                */
                // Create a pattern, offscreen
                const patternCanvas = document.createElement("canvas");
                const patternContext = patternCanvas.getContext("2d");

                // Give the pattern a width and height of 50
                patternCanvas.width = this.length;
                patternCanvas.height = this.length / (this._image.width / this._image.height);
                var hRatio = patternCanvas.width / this._image.width;
                var vRatio = patternCanvas.height / this._image.height;
                var ratio = Math.min(hRatio, vRatio);
                var centerShift_x = 0// (patternCanvas.width - this._image.width * ratio) / 2;
                var centerShift_y = 0 //(patternCanvas.height - this._image.height * ratio) / 2;
                patternContext.drawImage(this._image, 0, 0, this._image.width, this._image.height, centerShift_x, centerShift_y, this._image.width * ratio, this._image.height * ratio)
                /*
                patternContext.drawImage(
                    this._image,
                    0, // + x
                   0, // + y
                   patternCanvas.width, // newWidth
                   patternCanvas.height // newHeight
                  )
                  */
                ctx.fillStyle = ctx.createPattern(patternCanvas, 'repeat')
                ctx.shadowColor = 'rgba(0,0,0,0.6)';
                ctx.shadowBlur = 20;
                ctx.shadowOffsetX = 10;
                ctx.shadowOffsetY = 10;
                // left side
                ctx.save()
                ctx.beginPath();
                ctx.moveTo(-this._size.width / 2, -this._size.height / 2);
                ctx.lineTo(-this._size.width / 2 + this.length, -this._size.height / 2 + this.length);
                ctx.lineTo(-this._size.width / 2 + this.length, this._size.height / 2 - this.length);
                ctx.lineTo(-this._size.width / 2,this._size.height / 2);
                ctx.closePath();
                ctx.translate(-this._size.width / 2, 0)
                //ctx.rotate((-180 * Math.PI) / 180)
                ctx.fill();
                ctx.restore()
                // top side
                ctx.save()
                ctx.beginPath();
                ctx.moveTo(-this._size.width / 2, -this._size.height / 2);
                ctx.lineTo(this._size.width / 2, -this._size.height / 2);
                ctx.lineTo(this._size.width / 2 - this.length, -this._size.height / 2 + this.length);
                ctx.lineTo(-this._size.width / 2 + this.length,-this._size.height / 2 + this.length);
                ctx.closePath();
                ctx.translate(0, -this._size.height / 2)
                ctx.rotate((90 * Math.PI) / 180)
                ctx.fill();
                ctx.restore()
                // right side
                ctx.save()
                ctx.beginPath();
                ctx.moveTo(this._size.width / 2, -this._size.height / 2);
                ctx.lineTo(this._size.width / 2 - this.length, -this._size.height / 2 + this.length);
                ctx.lineTo(this._size.width / 2 - this.length, this._size.height / 2 - this.length);
                ctx.lineTo(this._size.width / 2,this._size.height / 2);
                ctx.closePath();
                ctx.translate(this._size.width / 2, 0)
                ctx.rotate((-180 * Math.PI) / 180)
                ctx.fill();
                ctx.restore()
                // bottom side
                ctx.save()
                ctx.beginPath();
                ctx.moveTo(this._size.width / 2, this._size.height / 2);
                ctx.lineTo(this._size.width / 2 - this.length, this._size.height / 2 - this.length);
                ctx.lineTo(-this._size.width / 2 + this.length, this._size.height / 2 - this.length);
                ctx.lineTo(-this._size.width / 2,this._size.height / 2);
                ctx.closePath();
                ctx.translate(0, this._size.height / 2)
                ctx.rotate((-90 * Math.PI) / 180)
                ctx.fill();
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