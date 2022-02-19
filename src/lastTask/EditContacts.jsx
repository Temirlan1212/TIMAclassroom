import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useContext } from "react";
import { useState } from "react";
import { contactsContext } from "../contexts/ContactsContext";
import { useEffect } from "react";
import { TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  background: "white",
  opacity: "70%",
};

export default function EditContacts() {
  let { contactsToEdit, open, handleClose, saveContact } =
    useContext(contactsContext);
  const [editPerson, setEditPerson] = useState(contactsToEdit);

  useEffect(() => {
    setEditPerson(contactsToEdit);
  }, [contactsToEdit]);

  const editName = (e) => {
    let newContact = {
      ...editPerson,
      name: e.target.value,
    };
    setEditPerson(newContact);
  };

  const editPhone = (e) => {
    let newContact = {
      ...editPerson,
      phone: e.target.value,
    };
    setEditPerson(newContact);
  };

  const editEmail = (e) => {
    let newContact = {
      ...editPerson,
      email: e.target.value,
    };
    setEditPerson(newContact);
  };

  const editImage = (e) => {
    let newContact = {
      ...editPerson,
      image: e.target.value,
    };
    setEditPerson(newContact);
  };

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            sx={{ input: { color: "#b24d00", fontWeight: "900" }, margin: 2 }}
            label="Image"
            variant="standard"
            color="warning"
            focused
            onChange={editName}
          />
          <TextField
            sx={{ input: { color: "#b24d00", fontWeight: "900" }, margin: 2 }}
            label="Image"
            variant="standard"
            color="warning"
            focused
            onChange={editPhone}
          />
          <TextField
            sx={{ input: { color: "#b24d00", fontWeight: "900" }, margin: 2 }}
            label="Image"
            variant="standard"
            color="warning"
            focused
            onChange={editEmail}
          />
          <TextField
            sx={{
              input: { color: "#b24d00", fontWeight: "900" },
              margin: 2,
            }}
            label="Image"
            variant="standard"
            color="warning"
            focused
            onChange={editImage}
          />
          <div style={{ margin: 2 }}>
            <Button onClick={handleClose} color="warning">
              close
            </Button>
            <Button
              color="warning"
              onClick={() => {
                saveContact(editPerson);
              }}
            >
              save
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
