describe("Base Error test", () => {
    beforeEach(() => {
        class BaseError extends Error {
            constructor() {
                super();
                this.__errorCode = 1;
            }
            get errorCode() {
                return this.__errorCode;
            }
            set errorCode(value) {
                this.__errorCode = value;
            }
        }
        baseError = new BaseError();
    })
    it("nothing", () => {
        expect(baseError.errorCode).toEqual(1);
        // expect(1).toEqual(1);
    });
});