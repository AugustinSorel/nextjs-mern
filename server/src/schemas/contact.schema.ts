import { object, string, TypeOf } from "zod";

export const addNewContactSchema = object({
  body: object({
    name: string({
      required_error: "Name is required",
    })
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name must be at most 50 characters"),

    email: string({
      required_error: "Email is required",
    })
      .min(5, "Email must be at least 5 characters")
      .max(255, "Email must be at most 255 characters")
      .email("Email must be a valid email address"),

    age: string({
      required_error: "Age is required",
    })
      .min(0, "Age must be at least 0")
      .max(150, "Age must be at most 150")
      .regex(/^[0-9]+$/, "Age must be a number"),
  }),
});

export type AddNewContactSchema = TypeOf<typeof addNewContactSchema>["body"];
