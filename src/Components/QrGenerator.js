import React from "react";
import { Card, CardContent, Grid, TextField, Button } from "@mui/material";
import QRcode from "qrcode";

const QrGenerator = ({ text, setText, setImageUrl }) => {
  const generateQrCode = async () => {
    if (!text) {
      alert("Please enter some text.");
      return;
    }

    let formattedText = text;

    // Automatically add protocol if missing
    if (!/^https?:\/\//i.test(text)) {
      // Default to http:// if no protocol is provided
      formattedText = `http://${text}`;
    }

    try {
      const response = await QRcode.toDataURL(formattedText);
      setImageUrl(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={10}>
            <TextField
              label="Enter text or URL"
              variant="outlined"
              fullWidth
              onChange={(e) => setText(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={generateQrCode}
            >
              Generate
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default QrGenerator;
