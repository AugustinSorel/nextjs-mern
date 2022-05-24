import { FormEvent } from "react";
import ContactForm from "../../components/ContactForm";
import { ContactFormState } from "../../types/ContactFormTypes";

function AddNewContactPage() {
  const submitHandler = (e: FormEvent, state: ContactFormState) => {
    e.preventDefault();

    console.log("state is: ", state);
  };

  return <ContactForm submitHandler={submitHandler} />;
}

export default AddNewContactPage;
