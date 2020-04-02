class BaseError extends Error {
    private __errorCode: number = 1;
    constructor() {
      super();
    }
  
    public get errorCode(): number {
      return this.__errorCode;
    }
  
    public set errorCode(value: number) {
      this.__errorCode = value;
    }
  }
  
  let a = new BaseError();