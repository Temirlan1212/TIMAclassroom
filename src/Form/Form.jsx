import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../contexts/FormContext";

const Form = () => {
  const { setEmail, setPassword, setConfirmPassword, login, setLogin } =
    useContext(userContext);

  return (
    <center>
      <form>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>

        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <input
          type="password"
          placeholder="confirm"
          id="confirm_password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></input>
      </form>

      <Link to="/">
        <button onClick={() => setLogin(true)} value={login}>
          log in
        </button>
      </Link>

      <button>log out</button>
    </center>
  );
};

export default Form;
