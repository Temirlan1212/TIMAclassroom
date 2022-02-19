import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { contactsContext } from "../contexts/ContactsContext";
import { useContext } from "react";
import { Button } from "@mui/material";

const AddContact = () => {
  let { addContacts } = useContext(contactsContext);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");

  const handleClick = () => {
    const newObj = {
      name,
      phone,
      email,
      image,
    };
    addContacts(newObj);
    setName("");
    setPhone("");
    setEmail("");
    setImage("");
  };

  return (
    <center>
      <h1 style={{ color: "#616161" }}>Add Your Number</h1>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          sx={{ input: { color: "#616161", fontWeight: "900" } }}
          label="Name"
          variant="standard"
          color="warning"
          focused
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <TextField
          sx={{ input: { color: "#616161", fontWeight: "900" } }}
          label="Phone"
          variant="standard"
          color="warning"
          focused
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />

        <TextField
          sx={{ input: { color: "#616161", fontWeight: "900" } }}
          label="Email"
          variant="standard"
          color="warning"
          focused
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <TextField
          sx={{ input: { color: "#616161", fontWeight: "900" } }}
          label="Image"
          variant="standard"
          color="warning"
          focused
          onChange={(e) => setImage(e.target.value)}
          value={image}
        />

        <Button color="warning" onClick={handleClick}>
          {" "}
          ADD{" "}
        </Button>
      </Box>
    </center>
  );
};

export default AddContact;
