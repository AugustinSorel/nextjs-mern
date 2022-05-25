import axios from "axios";
import { ContactFormState } from "../types/ContactFormTypes";

const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URI || "http://localhost:5000/";

const contactApi = axios.create({
  baseURL: baseUrl + "api/contacts",
});

export const addNewContact = async (contact: ContactFormState) => {
  const newContact = await contactApi.post("/add-new-contact", contact);

  return newContact.data;
};

export const getAllContacts = async (): Promise<ContactFormState[]> => {
  const contacts = await contactApi.get("/all-contacts");

  return contacts.data;
};
