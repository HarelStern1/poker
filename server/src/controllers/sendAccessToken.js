import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

const sendAccessToken = (req, res) => {
  const { user } = req.body;

  // Create token
  const accessToken = jwt.sign({ user }, process.env.JWT_SECRET_KEY);

  res.status(201).json({
    accessToken,
    user,
  });
};

export default sendAccessToken;
