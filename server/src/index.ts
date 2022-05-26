import express from "express";
import router from "./routes";
import connectToMongoDb from "./utils/connectToMongoDb.util";
import dotenv from "dotenv";
import apiErrors from "./middlewares/apiErrors.middleware";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: true }));
app.use(express.json());
app.use("/api", router);
app.use(apiErrors);

app.listen(PORT, async () => {
  console.log(`Server started on port ${PORT}`);
  await connectToMongoDb();
});
