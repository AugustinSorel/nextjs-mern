import { Request, Response, NextFunction } from "express";
import ContactErrors from "../errors/Contact.errors";
import { AddNewContactSchema } from "../schemas/contact.schema";
import {
  addNewContactService,
  getAllContactsService,
  getContactService,
} from "../services/contact.service";

export const addNewContact = async (
  req: Request<{}, {}, AddNewContactSchema>,
  res: Response,
  next: NextFunction
) => {
  try {
    const newContact = await addNewContactService(req.body);

    res.status(201).json(newContact);
  } catch (error: any) {
    if (error.code === 11000) {
      return next(ContactErrors.duplicateEmail());
    }

    res.sendStatus(400);
  }
};

export const getAllContacts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const contacts = await getAllContactsService();

    res.status(200).json(contacts);
  } catch (error) {
    res.sendStatus(400);
  }
};

export const getContact = async (
  req: Request<{ id: string }, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const contact = await getContactService(req.params.id);

    res.status(200).json(contact);
  } catch (error) {
    res.sendStatus(400);
  }
};
