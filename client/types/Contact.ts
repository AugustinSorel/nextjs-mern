import { ContactFormState } from "./ContactFormTypes";

type Contact = ContactFormState & {
  _id: string;
};

export default Contact;
