import axios from "axios";

const signInUser = async (user) => {
  try {
    const { data } = await axios.post("http://localhost:5001/sign-in", user);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default signInUser;
