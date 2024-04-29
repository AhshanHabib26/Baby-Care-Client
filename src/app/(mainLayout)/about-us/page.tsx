import AboutUsBanner from "@/components/AboutUs/AboutUsBanner";
import { Container } from "@mui/material";
import React from "react";

const AboutPage = () => {
  return (
    <Container sx={{ marginTop: 5}}>
      <AboutUsBanner />
    </Container>
  );
};

export default AboutPage;
