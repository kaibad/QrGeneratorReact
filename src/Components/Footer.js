import React from "react";
import { Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer
      style={{
        background: "#63B4D1",
        padding: "20px 0",
        marginTop: "50px",
        color: "white",
      }}
    >
      <Container>
        <Typography variant="body2" align="center" fontSize={"1rem"}>
          &copy; {new Date().getFullYear()}{" "}
          <a
            href="http://kailashbadu.com.np"
            style={{ textDecoration: "none", color: "white" }}
            target="blank"
          >
            Kailash Badu.
          </a>
          All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
