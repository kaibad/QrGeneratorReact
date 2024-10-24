import React from "react";
import { Grid, Button } from "@mui/material";

const QrDownloadButton = ({ imageUrl, text }) => {
  const getFileName = () => {
    return text ? text.replace(/\W+/g, "-").substring(0, 15) : "qrcode"; // Fallback filename
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.setAttribute("download", `${getFileName()}.png`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Grid container justifyContent="center" marginTop={2}>
      <Grid item xs={12} sm={6} md={4}>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          onClick={handleDownload}
        >
          Download
        </Button>
      </Grid>
    </Grid>
  );
};

export default QrDownloadButton;
