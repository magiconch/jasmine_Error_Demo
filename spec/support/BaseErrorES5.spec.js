describe("Base Error test", () => {
    beforeEach(() => {
        var __extends = (this && this.__extends) || (function () {
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
                return extendStatics(d, b);
            };
            return function (d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
        })();
        var BaseError = /** @class */ (function (_super) {
            __extends(BaseError, _super);
            function BaseError() {
                var _this = _super.call(this) || this;
                _this.__errorCode = 1;
                return _this;
            }
            Object.defineProperty(BaseError.prototype, "errorCode", {
                get: function () {
                    return this.__errorCode;
                },
                set: function (value) {
                    this.__errorCode = value;
                },
                enumerable: true,
                configurable: true
            });
            return BaseError;
        }(Error));
        
        baseError = new BaseError();
    })
    it("nothing", () => {
        expect(baseError.errorCode).toEqual(1);
        // expect(1).toEqual(1);
    });
});