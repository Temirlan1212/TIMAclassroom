import React, { useState } from "react";

export const userContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [login, setLogin] = useState(false);
  return (
    <userContext.Provider
      value={{
        email,
        password,
        confirmPassword,
        login,
        setEmail,
        setPassword,
        setConfirmPassword,
        setLogin,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
