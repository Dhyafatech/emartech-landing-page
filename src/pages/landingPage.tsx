import { FC } from "react";
import { Box } from "@mui/material";
import { Dashboard } from "../components/dashboard";
import { AboutUs } from "../components/aboutUs";
import { ContactUs } from "../components/contactUs";
import { Footer } from "../components/footer";
import { OurPartners } from "../components/ourPartners";
import { OurServices } from "../components/ourServices";
import { Testimonial } from "../components/testimonial";

export const LandingPage: FC = () => {
  return (
    <Box>
      <Dashboard/>
      <AboutUs/>
      <OurServices/>
      <OurPartners/>
      <Testimonial/>
      <ContactUs/>
      <Footer/>
    </Box>
  );
};
