import { useState, useEffect, useRef } from "react";
import accessProtectedRoute from "../utils/functions/accessProtectedRoute";

const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const verifyAuthUser = async () => {
      try {
        const { isAuthenticated, user } = await accessProtectedRoute(
          accessToken
        );
        setAuthenticated(isAuthenticated);
        setUser(user.user);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };
    verifyAuthUser();
  }, []);

  return {
    authenticated,
    user,
    setUser,
    loading,
  };
};

export default useAuth;
