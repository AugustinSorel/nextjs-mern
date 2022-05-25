import { useAnimation } from "framer-motion";
import { useRouter } from "next/router";
import { FormEvent, useReducer, useState } from "react";
import { useMutation, MutationFunction } from "react-query";
import errorVariants from "../../framerMotion/errorVariants";
import Contact from "../../types/Contact";
import { ContactFormActionTypes } from "../../types/ContactFormTypes";
import Button from "../Button";
import Input from "../Input";
import * as Styles from "./ContactForm.styled";
import { contactFormReducer } from "./contactFormReducer";

type Props = {
  mutationFunction: MutationFunction<Contact, Contact>;
  stateValues: Contact;
};

const ContactForm = ({ mutationFunction, stateValues }: Props) => {
  const [state, dispatch] = useReducer(contactFormReducer, stateValues);
  const [buttonText, setButtonText] = useState("");
  const nameAnimation = useAnimation();
  const emailAnimation = useAnimation();
  const ageAnimation = useAnimation();
  const router = useRouter();

  const errorHandler = (error: any) => {
    setButtonText(error.response.data.message);
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

  const successHandler = () => {
    router.push("/");
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
      <Button text={buttonText || "submit"} inverted />
    </Styles.Form>
  );
};

export default ContactForm;
