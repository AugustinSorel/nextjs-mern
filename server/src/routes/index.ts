import express from "express";
import contactRouter from "./contact.routes";

const router = express.Router();

router.get("/health-check", (_, res) => {
  res.sendStatus(202);
});

router.use("/contacts", contactRouter);

export default router;
