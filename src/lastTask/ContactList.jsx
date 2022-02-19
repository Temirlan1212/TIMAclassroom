import React, { useContext, useEffect } from "react";
import { contactsContext } from "../contexts/ContactsContext";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ContactList = () => {
  let { contacts, getContacts, deleteContacts, editContacts } =
    useContext(contactsContext);

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <center className="contact-list-div">
      {contacts.map((item) => (
        <Card
          sx={{
            maxWidth: 340,
            margin: 2,
            border: "3px solid #616161",
            background: "rgba(255, 255, 255, 0.1)",
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image={item.image}
            sx={{ opacity: "90%" }}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              color="#616161"
            >
              {item.name}
            </Typography>
            <Typography variant="h6" color="#616161">
              {item.email}
            </Typography>
            <Typography variant="h6" color="#616161">
              {item.phone}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              sx={{ color: "black", fontWeight: "900" }}
              size="small"
              onClick={() => deleteContacts(item.id)}
            >
              Delete
            </Button>
            <Button
              size="small"
              sx={{ color: "black", fontWeight: "900" }}
              onClick={() => editContacts(item.id)}
            >
              Edit
            </Button>
          </CardActions>
        </Card>
      ))}
    </center>
  );
};

export default ContactList;
