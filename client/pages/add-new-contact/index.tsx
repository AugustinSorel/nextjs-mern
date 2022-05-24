import Head from "next/head";
import { FormEvent } from "react";
import ContactForm from "../../components/ContactForm";
import { ContactFormState } from "../../types/ContactFormTypes";
import { useMutation } from "react-query";
import { addNewContact } from "../../api/contactApi";

function AddNewContactPage() {
  const { mutate: AddNewContactMutate } = useMutation(addNewContact, {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const submitHandler = (e: FormEvent, state: ContactFormState) => {
    e.preventDefault();
    AddNewContactMutate(state);
  };

  return (
    <>
      <Head>
        <title>new contact</title>
        <meta name="description" content="add a new contact" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContactForm submitHandler={submitHandler} />
    </>
  );
}

export default AddNewContactPage;
