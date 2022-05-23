import { FormEvent } from "react";
import ContactForm from "../../components/ContactForm";

function AddNewContactPage() {
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    console.log("ello");
  };

  return <ContactForm submitHandler={submitHandler} />;
}

export default AddNewContactPage;
