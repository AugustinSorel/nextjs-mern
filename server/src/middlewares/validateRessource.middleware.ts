import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import ZodErrors from "../errors/Zod.errors";

const validateRessource =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });

      next();
    } catch (error: any) {
      const message = error.errors[0].message;
      const field = error.errors[0].path[1];

      return next(ZodErrors.invalidInputError(message, field));
    }
  };

export default validateRessource;
