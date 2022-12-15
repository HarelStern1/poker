import React, { useContext, useEffect, useState } from "react";
import { initialRooms } from "../utils/constants";

export const AppContext = React.createContext({});

const AppProvider = ({ children }) => {
  const [rooms, setRooms] = useState(initialRooms);

  return (
    <AppContext.Provider value={{ rooms, setRooms }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppProvider;
