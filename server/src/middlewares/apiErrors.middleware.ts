import { Request, Response, NextFunction } from "express";
import ContactErrors from "../errors/Contact.errors";
import ZodErrors from "../errors/Zod.errors";

const apiError = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("ERROR in apiError", err);

  if (err instanceof ZodErrors) {
    return res.status(err.code).json({
      message: err.message,
      field: err.field,
    });
  }

  if (err instanceof ContactErrors) {
    return res
      .status(err.code)
      .json({ message: err.message, field: err.field });
  }

  return res.sendStatus(500);
};

export default apiError;
