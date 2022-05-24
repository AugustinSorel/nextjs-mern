import { connect } from "mongoose";

const connectToMongoDb = async () => {
  try {
    await connect(process.env.DB_URI as string);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
    process.exit(1);
  }
};

export default connectToMongoDb;
