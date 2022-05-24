import {
  ContactFormAction,
  ContactFormActionTypes,
  ContactFormState,
} from "../../types/ContactFormTypes";

export const contactFormReducer = (
  state: ContactFormState,
  action: ContactFormAction
) => {
  const { payload, type } = action;

  switch (type) {
    case ContactFormActionTypes.CHANGE_NAME:
      return { ...state, name: payload };

    case ContactFormActionTypes.CHANGE_EMAIL:
      return { ...state, email: payload };

    case ContactFormActionTypes.CHANGE_AGE:
      return { ...state, age: payload };

    default:
      return state;
  }
};

export const defaultValues: ContactFormState = {
  name: "",
  email: "",
  age: "",
};
