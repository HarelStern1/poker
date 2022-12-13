import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

const verifyAccessToken = (req, res) => {
  const token =
    req.body.accessToken ||
    req.query.accessToken ||
    req.headers["x-access-token"];

  if (!token) {
    res
      .status(409)
      .send({ message: "No token recieved.", isAuthenticated: false });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET_KEY);

    return res.status(200).send({
      isAuthenticated: true,
      user: jwt.decode(token),
    });
  } catch (err) {
    return res.status(401).send({ isAuthenticated: false });
  }
};

export default verifyAccessToken;
