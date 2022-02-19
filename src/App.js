import { useState } from "react";
import "./App.css";
import ContactsContextProvider from "./contexts/ContactsContext";

import UserContextProvider from "./contexts/FormContext";

import Form from "./Form/Form";
import Home from "./Home/Home";
import Ingredients from "./Ingredients/Ingredients";
import Receipts from "./Receipts/Receipts";
import MainRoutes from "./routes/MainRoutes";

function App() {
  const [meal, setMeal] = useState("");

  return (
    <div>
      {/* <Counter /> */}
      {/* <Receipts meal={meal} setMeal={setMeal} />
      <Ingredients meal={meal} /> */}
      {/* <UserContextProvider>
        <MainRoutes />
      </UserContextProvider> */}

      <ContactsContextProvider>
        <MainRoutes />
      </ContactsContextProvider>
    </div>
  );
}

export default App;
