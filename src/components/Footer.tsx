import React from "react";
import BrandIcons from "./Footer/BrandIcons";
import { Container, Divider } from "@mui/material";
import FooterInfo from "./Footer/FooterInfo";

const Footer = () => {
  return (
    <div className="mt-20 bg-[#0C1734] py-8">
      <Container>
        <BrandIcons />
        <Divider orientation="horizontal" sx={{ backgroundColor: "#242E48", margin: "30px 0" }} />
        <FooterInfo />
      </Container>
    </div>
  );
};

export default Footer;
