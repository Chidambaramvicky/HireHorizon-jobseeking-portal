import React, { createContext, useState } from "react";

export const MyContext = createContext({});

export default function ProjectContext({children}) {
  const [InputUsername,setInputUsername] = useState('User');
  const login = (userData) => {
    setInputUsername(userData);
  };

  const logout = () => {
    setInputUsername(null);
  };
  const values = {
    InputUsername,
    login,
    logout
  };

  return (
    <MyContext.Provider value={values}>
      {children}
    </MyContext.Provider>
  );
}