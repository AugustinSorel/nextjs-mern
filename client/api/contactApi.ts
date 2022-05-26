import axios from "axios";
import Contact from "../types/Contact";

const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URI || "http://localhost:5000/";

const contactApi = axios.create({
  baseURL: baseUrl + "api/contacts",
});

export const addNewContact = async (contact: Contact): Promise<Contact> => {
  const newContact = await contactApi.post("/add-new-contact", contact);

  return newContact.data;
};

export const getAllContacts = async (): Promise<Contact[]> => {
  const contacts = await contactApi.get("/all-contacts");

  return contacts.data;
};

export const getContact = async (id: string): Promise<Contact> => {
  const contact = await contactApi.get(`/contact/${id}`);

  return contact.data;
};

export const updateContact = async (
  updatedContact: Contact
): Promise<Contact> => {
  const res = await contactApi.patch(
    `/update-contact/${updatedContact._id}`,
    updatedContact
  );

  return res.data;
};

export const deleteContact = async (id: string) => {
  const contact = await contactApi.delete(`/delete-contact/${id}`);

  return contact.data;
};
