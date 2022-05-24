import { Request, Response, NextFunction } from "express";
import ContactErrors from "../errors/Contact.errors";
import ContactModel from "../models/Contact.model";
import { AddNewContactSchema } from "../schemas/contact.schema";
import { addNewContactService } from "../services/contact.service";

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
