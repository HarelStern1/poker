import axios from "axios";

const signUpUser = async (user) => {
  try {
    const { data } = await axios.post("http://localhost:5001/sign-up", user);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default signUpUser;
