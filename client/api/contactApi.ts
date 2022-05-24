import axios from "axios";
import { ContactFormState } from "../types/ContactFormTypes";

const baseUrl = process.env.REACT_APP_BACKEND_URI || "http://localhost:5000/";

const contactApi = axios.create({
  baseURL: baseUrl + "api/contacts",
});

export const addNewContact = async (contact: ContactFormState) => {
  const newContact = await contactApi.post("/add-new-contact", contact);

  console.log(newContact);

  return newContact.data;
};
