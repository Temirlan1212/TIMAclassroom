import React, { useContext } from "react";
import { userContext } from "../contexts/FormContext";

const Home = () => {
  const {
    email,
    password,
    confirmPassword,

    login,
  } = useContext(userContext);
  return (
    <center>
      <a href="/form">
        {login ? (
          <h1>
            {password === confirmPassword ? email : "wrong password"}
            <button>log out</button>
          </h1>
        ) : (
          ""
        )}
      </a>
    </center>
  );
};

export default Home;
