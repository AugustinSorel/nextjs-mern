import express from "express";
import { addNewContact } from "../controllers/contact.controllers";
import validateRessource from "../middlewares/validateRessource.middleware";
import { addNewContactSchema } from "../schemas/contact.schema";

const contactRouter = express.Router();

contactRouter.post(
  "/add-new-contact",
  validateRessource(addNewContactSchema),
  addNewContact
);

export default contactRouter;
