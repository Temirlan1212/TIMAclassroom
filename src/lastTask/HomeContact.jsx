import React from "react";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import EditContacts from "./EditContacts";

const HomeContact = () => {
  return (
    <div>
      <AddContact />
      <ContactList />
      <EditContacts />
    </div>
  );
};

export default HomeContact;
