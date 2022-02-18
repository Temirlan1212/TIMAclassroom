import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";

const Ingredients = ({ meal }) => {
  return (
    <center>
      {meal == "pancake" ? (
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
            <Typography variant="h5" component="div">
              sjdflkj
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {meal}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {meal}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {meal}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {meal}
            </Typography>
          </CardContent>
        </Card>
      ) : (
        ""
      )}

      {meal == "fries" ? (
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" component="div"></Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {meal}
            </Typography>
          </CardContent>
        </Card>
      ) : (
        ""
      )}

      {meal == "pizza" ? (
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" component="div"></Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {meal}
            </Typography>
          </CardContent>
        </Card>
      ) : (
        ""
      )}
    </center>
  );
};

export default Ingredients;
