import { FormEvent, useReducer } from "react";
import Button from "../Button";
import Input from "../Input";
import * as Styles from "./ContactForm.styled";

enum ContactFormActionTypes {
  CHANGE_NAME = "CHANGE_NAME",
  CHANGE_EMAIL = "CHANGE_EMAIL",
  CHANGE_AGE = "CHANGE_AGE",
}

interface ContactFormAction {
  type: ContactFormActionTypes;
  payload: string;
}

interface ContactFormState {
  name: string;
  email: string;
  age: number;
}

const contactFormReducer = (
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
      return { ...state, age: parseInt(payload) };

    default:
      return state;
  }
};

const defaultValues: ContactFormState = {
  name: "",
  email: "",
  age: 0,
};

type Props = {
  submitHandler: (e: FormEvent) => void;
};

const ContactForm = ({ submitHandler }: Props) => {
  const [state, dispatch] = useReducer(contactFormReducer, defaultValues);

  return (
    <Styles.Form onSubmit={submitHandler}>
      <Input
        type="text"
        placeholder="name"
        value={state.name}
        onChange={(e) =>
          dispatch({
            type: ContactFormActionTypes.CHANGE_NAME,
            payload: e.target.value,
          })
        }
      />
      <Input
        type="text"
        placeholder="email"
        value={state.email}
        onChange={(e) =>
          dispatch({
            type: ContactFormActionTypes.CHANGE_EMAIL,
            payload: e.target.value,
          })
        }
      />
      <Input
        type="text"
        placeholder="age"
        value={state.age}
        onChange={(e) =>
          dispatch({
            type: ContactFormActionTypes.CHANGE_AGE,
            payload: e.target.value,
          })
        }
      />
      <Button text="submit" inverted />
    </Styles.Form>
  );
};

export default ContactForm;
