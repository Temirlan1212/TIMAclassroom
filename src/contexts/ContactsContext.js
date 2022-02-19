import React, { useReducer, useState } from "react";
import axios from "axios";

export const contactsContext = React.createContext();

const INIT_STATE = {
  contacts: [],
  contactsToEdit: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_CONTACTS":
      return { ...state, contacts: action.payload };
    case "EDIT_CONTACTS":
      return { ...state, contactsToEdit: action.payload };
    default:
      return state;
  }
};

const ContactsContextProvider = ({ children }) => {
  const getContacts = async () => {
    let { data } = await axios("http://localhost:8000/task");

    dispatch({
      type: "GET_CONTACTS",
      payload: data,
    });
  };
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const addContacts = async (newContact) => {
    await axios.post("http://localhost:8000/task", newContact);

    getContacts();
  };

  const deleteContacts = async (id) => {
    await axios.delete(`http://localhost:8000/task/${id}`);

    getContacts();
  };

  //! edit
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const editContacts = async (id) => {
    let { data } = await axios(`http://localhost:8000/task/${id}`);

    dispatch({
      type: "EDIT_CONTACTS",
      payload: data,
    });

    handleOpen();
  };

  //? save
  const saveContact = async (newContact) => {
    await axios.patch(
      `http://localhost:8000/task/${newContact.id}`,
      newContact
    );

    handleClose();

    getContacts();
  };

  return (
    <contactsContext.Provider
      value={{
        addContacts,
        getContacts,
        deleteContacts,
        editContacts,
        handleClose,
        saveContact,
        open,
        contacts: state.contacts,
        contactsToEdit: state.contactsToEdit,
      }}
    >
      {children}
    </contactsContext.Provider>
  );
};

export default ContactsContextProvider;
