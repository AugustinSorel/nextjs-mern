import { useAnimation } from "framer-motion";
import { FormEvent, useReducer } from "react";
import { useMutation } from "react-query";
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
  mutationFunction: (contact: ContactFormState) => Promise<any>;
};

const ContactForm = ({ mutationFunction }: Props) => {
  const [state, dispatch] = useReducer(contactFormReducer, defaultValues);
  const nameAnimation = useAnimation();
  const emailAnimation = useAnimation();
  const ageAnimation = useAnimation();

  const errorHandler = (error: any) => {
    console.log(error.response.data.message);
    console.log(error.response.data.field);

    if (error.response.data.field === "name") {
      nameAnimation.start("animate");
    }

    if (error.response.data.field === "email") {
      emailAnimation.start("animate");
    }

    if (error.response.data.field === "age") {
      ageAnimation.start("animate");
    }
  };

  const successHandler = (data: any) => {
    console.log(data);
  };

  const { mutate: contactFormMutate } = useMutation(mutationFunction, {
    onSuccess: successHandler,
    onError: errorHandler,
  });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    contactFormMutate(state);
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
