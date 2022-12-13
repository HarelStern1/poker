import { Router } from "express";
import authLogin from "./controllers/authLogin.js";
import authSignup from "./controllers/authSignup.js";
import sendAccessToken from "./controllers/sendAccessToken.js";
import verifyAccessToken from "./controllers/verifyAccessToken.js";

const routes = Router();

routes.post("/sign-in", authLogin, sendAccessToken);
routes.post("/sign-up", authSignup, sendAccessToken);
routes.get("/protected", verifyAccessToken);
routes.get("/", (req, res) => {
  res.send("hello");
});

export default routes;
