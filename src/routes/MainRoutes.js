import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "../Form/Form";
import Home from "../Home/Home";
import AddContact from "../lastTask/AddContact";
import ContactList from "../lastTask/ContactList";
import EditContacts from "../lastTask/EditContacts";
import HomeContact from "../lastTask/HomeContact";

const MainRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/h-contact" element={<HomeContact />} />
          <Route path="/edit" element={<EditContacts />} />
          <Route path="/add" element={<AddContact />} />
          <Route path="/list" element={<ContactList />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MainRoutes;
