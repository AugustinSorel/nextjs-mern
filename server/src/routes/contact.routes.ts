import express from "express";
import {
  addNewContact,
  getAllContacts,
  getContact,
  updateContact,
} from "../controllers/contact.controllers";
import validateRessource from "../middlewares/validateRessource.middleware";
import {
  addNewContactSchema,
  updateContactSchema,
} from "../schemas/contact.schema";

const contactRouter = express.Router();

contactRouter.post(
  "/add-new-contact",
  validateRessource(addNewContactSchema),
  addNewContact
);

contactRouter.get("/all-contacts", getAllContacts);
contactRouter.get("/contact/:id", getContact);

contactRouter.patch(
  "/update-contact/:id",
  validateRessource(updateContactSchema),
  updateContact
);

export default contactRouter;
