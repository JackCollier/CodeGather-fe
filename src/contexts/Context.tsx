import React from "react";

const MyContext = React.createContext();
export default MyContext;

export const MyContextProvider = ({ children }) => {
  const sharedValue = "Hello from Context!";

  return (
    <MyContext.Provider value={sharedValue}>{children}</MyContext.Provider>
  );
};
