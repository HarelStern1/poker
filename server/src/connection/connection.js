import { connect } from "mongoose";
import { httpServer } from "../server.js";
import * as dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 5001;

const CONNECTION_URL = process.env.CONNECTION_URL;

const connectToDatabase = async () => {
  try {
    await connect(CONNECTION_URL);
    httpServer.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

export default connectToDatabase;
