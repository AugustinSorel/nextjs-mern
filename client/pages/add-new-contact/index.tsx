import Head from "next/head";
import { addNewContact } from "../../api/contactApi";
import ContactForm from "../../components/ContactForm";
import Contact from "../../types/Contact";
import * as Styles from "./AddNewContactPage.styled";

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

      <Styles.Main>
        <ContactForm
          mutationFunction={addNewContact}
          stateValues={defaultValues}
        />
      </Styles.Main>
    </>
  );
}

export default AddNewContactPage;
