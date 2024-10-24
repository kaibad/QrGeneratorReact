import React, { useState } from "react";
import { Container } from "@mui/material";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import QrGenerator from "./Components/QrGenerator";
import QrDisplay from "./Components/QrDisplay";
import QrDownloadButton from "./Components/QrDownloadButton";

function App() {
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  return (
    <>
      <Header /> {/* New Header component */}
      <Container sx={{ mt: 2 }}>
        <QrGenerator text={text} setText={setText} setImageUrl={setImageUrl} />

        {imageUrl && (
          <>
            <QrDisplay imageUrl={imageUrl} />
            <QrDownloadButton imageUrl={imageUrl} text={text} />
          </>
        )}
      </Container>
      <Footer />
    </>
  );
}

export default App;
