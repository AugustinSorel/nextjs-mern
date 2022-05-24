import { useAnimation } from "framer-motion";
import { FormEvent, useReducer } from "react";
import errorVariants from "../../framerMotion/errorVariants";
import {
  ContactFormActionTypes,
  ContactFormState,
} from "../../types/ContactFormTypes";
import Button from "../Button";
import Input from "../Input";
import * as Styles from "./ContactForm.styled";
import { contactFormReducer, defaultValues } from "./contactFormReducer";

type Props = {
  submitHandler: (e: FormEvent, state: ContactFormState) => void;
};

const ContactForm = ({ submitHandler }: Props) => {
  const [state, dispatch] = useReducer(contactFormReducer, defaultValues);
  const nameAnimation = useAnimation();
  const emailAnimation = useAnimation();
  const ageAnimation = useAnimation();

  const onSubmit = (e: FormEvent) => {
    submitHandler(e, state);

    nameAnimation.start("animate");
    emailAnimation.start("animate");
    ageAnimation.start("animate");
  };

  const onChangeHandler = (payload: string, type: ContactFormActionTypes) => {
    dispatch({ type, payload });
  };

  return (
    <Styles.Form onSubmit={onSubmit}>
      <Input
        type="text"
        placeholder="name"
        value={state.name}
        variants={errorVariants}
        animate={nameAnimation}
        onChange={(e) =>
          onChangeHandler(e.target.value, ContactFormActionTypes.CHANGE_NAME)
        }
      />
      <Input
        type="text"
        placeholder="email"
        value={state.email}
        variants={errorVariants}
        animate={emailAnimation}
        onChange={(e) =>
          onChangeHandler(e.target.value, ContactFormActionTypes.CHANGE_EMAIL)
        }
      />
      <Input
        type="text"
        placeholder="age"
        variants={errorVariants}
        animate={ageAnimation}
        value={state.age}
        onChange={(e) =>
          onChangeHandler(e.target.value, ContactFormActionTypes.CHANGE_AGE)
        }
      />
      <Button text="submit" inverted />
    </Styles.Form>
  );
};

export default ContactForm;
