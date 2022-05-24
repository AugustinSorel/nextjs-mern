import Head from "next/head";
import { addNewContact } from "../../api/contactApi";
import ContactForm from "../../components/ContactForm";

function AddNewContactPage() {
  return (
    <>
      <Head>
        <title>new contact</title>
        <meta name="description" content="add a new contact" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
      </Head>
      <ContactForm mutationFunction={addNewContact} />
    </>
  );
}

export default AddNewContactPage;
