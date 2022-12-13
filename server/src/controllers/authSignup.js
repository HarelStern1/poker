import bcrypt from "bcrypt";
import User from "../models/User.js";
import verifyFilledInputs from "../utils/functions/verifyFilledInputs.js";

const authSignup = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    // are all fields filled
    const filledInputs = verifyFilledInputs(name, email, password);

    if (!filledInputs) {
      res.status(409).send({ message: "All input fields must be filled." });
    }

    // Validate if user exist in our database
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      res.status(409).send("User with this email address already exists.");
    }

    //Encrypt user password
    const encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    const user = await User.create({
      name,
      email: email.toLowerCase(),
      password: encryptedPassword,
    });

    req.body.user = user;

    next();
  } catch (err) {
    console.log(err);
  }
};

export default authSignup;
