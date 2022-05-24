import express from "express";
import router from "./routes";
import connectToMongoDb from "./utils/connectToMongoDb.util";
import dotenv from "dotenv";
import apiErrors from "./middlewares/apiErrors.middleware";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api", router);
app.use(apiErrors);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
  connectToMongoDb();
});
