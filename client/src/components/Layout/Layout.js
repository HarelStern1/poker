import React from "react";
import Navbar from "../Navbar/Navbar";
import { useLocation } from "react-router-dom";
import locationToBooleanMap from "./locationToBooleanMap";

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <>
      {locationToBooleanMap[location.pathname] && <Navbar />}
      {children}
    </>
  );
};

export default Layout;
