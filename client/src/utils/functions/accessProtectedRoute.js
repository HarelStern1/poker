import axios from "axios";

const accessProtectedRoute = async (accessToken) => {
  try {
    const { data } = await axios.get("http://localhost:5001/protected", {
      params: { accessToken },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default accessProtectedRoute;
