class ContactErrors {
  public code: number;
  public message: string;
  public field: string;

  constructor(code: number, message: string, field: string) {
    this.code = code;
    this.message = message;
    this.field = field;
  }

  public static duplicateEmail(): ContactErrors {
    return new ContactErrors(400, "Email already in use", "email");
  }
}

export default ContactErrors;
