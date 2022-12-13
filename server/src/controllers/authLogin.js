import User from "../models/User.js";
import verifyFilledInputs from "../utils/functions/verifyFilledInputs.js";
import bcrypt from "bcrypt";

const authLogin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    // are all fields filled
    const filledInputs = verifyFilledInputs(email, password);

    if (!filledInputs) {
      res.status(409).send({ message: "All input fields must be filled." });
    }

    // Validate if user exist in our database
    const user = await User.findOne({ email });

    if (!user) {
      res.status(409).send("There is no user with this email.");
    } else {
      req.body.user = user;
    }

    if (!(await bcrypt.compare(password, user?.password))) {
      res.status(409).send("Incorrect Password.");
    }

    next();
  } catch (err) {
    console.log(err);
  }
};

export default authLogin;
