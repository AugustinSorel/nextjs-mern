import ContactModel from "../models/Contact.model";
import { AddNewContactSchema } from "../schemas/contact.schema";

export const addNewContactService = (newContact: AddNewContactSchema) => {
  return ContactModel.create(newContact);
};

export const getAllContactsService = () => {
  return ContactModel.find();
};

export const getContactService = (id: string) => {
  return ContactModel.findById(id);
};
