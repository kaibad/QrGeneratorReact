import React from "react";
import { Grid } from "@mui/material";

const QrDisplay = ({ imageUrl }) => {
  return (
    <Grid container justifyContent="center">
      <Grid item>
        <img
          src={imageUrl}
          alt="QR Code"
          style={{
            display: "block",
            margin: "20px auto",
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default QrDisplay;
