import { Schema, model } from "mongoose";

interface IContact {
  name: string;
  email: string;
  age: number;
}

const contactSchema = new Schema<IContact>({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    minlength: 5,
    maxlength: 255,
    lowercase: true,
  },
  age: {
    type: Number,
    required: true,
    min: 0,
    max: 150,
  },
});

export default model<IContact>("Contact", contactSchema);
