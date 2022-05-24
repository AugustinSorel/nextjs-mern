import ContactModel from "../models/Contact.model";
import { AddNewContactSchema } from "../schemas/contact.schema";

export const addNewContactService = (newContact: AddNewContactSchema) => {
  return ContactModel.create(newContact);
};
