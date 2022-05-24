class ZodErrors {
  public code: number;
  public message: string;
  public field: string;

  constructor(code: number, message: string, field: string) {
    this.code = code;
    this.message = message;
    this.field = field;
  }

  public static invalidInputError(message: string, field: string): ZodErrors {
    return new ZodErrors(400, message, field);
  }
}

export default ZodErrors;
