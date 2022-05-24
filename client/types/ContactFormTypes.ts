export enum ContactFormActionTypes {
  CHANGE_NAME = "CHANGE_NAME",
  CHANGE_EMAIL = "CHANGE_EMAIL",
  CHANGE_AGE = "CHANGE_AGE",
}

export interface ContactFormAction {
  type: ContactFormActionTypes;
  payload: string;
}

export interface ContactFormState {
  name: string;
  email: string;
  age: string;
}
