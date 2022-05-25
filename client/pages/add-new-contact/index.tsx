import Head from "next/head";
import { addNewContact } from "../../api/contactApi";
import ContactForm from "../../components/ContactForm";
import Contact from "../../types/Contact";

const defaultValues: Contact = {
  name: "",
  email: "",
  age: "",
};

function AddNewContactPage() {
  return (
    <>
      <Head>
        <title>new contact</title>
        <meta name="description" content="add a new contact" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContactForm
        mutationFunction={addNewContact}
        stateValues={defaultValues}
      />
    </>
  );
}

export default AddNewContactPage;
