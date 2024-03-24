import { Box, Stack, Typography } from "@mui/material";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import Link from "next/link";
import React from "react";
import FISclIcons from "./FISclIcons";

const FIDetails = () => {
  return (
    <Stack color="#fff">
      <Typography
        sx={{ fontSize: "20px", fontWeight: "700", marginBottom: "15px" }}
      >
        Get in Touch
      </Typography>
      <Box display="flex" alignItems="center" sx={{ marginBottom: "8px" }} >
        <PhoneCall size={20} className="mr-2" />
        <Link href="tel:+8801646418365">+8801646418365</Link>
      </Box>
      <Box display="flex" alignItems="center" sx={{ marginBottom: "8px" }}>
        <Mail size={20} className="mr-2" />
        <Link href="mailto:ahshan.habib026@gmail.com">
          ahshan.habib026@gmail.com
        </Link>
      </Box>
      <Box display="flex" alignItems="center" sx={{ marginBottom: "8px" }}>
        <MapPin size={20} className="mr-2" />
        <Typography>Kacuha, Chandpur, Chittagong</Typography>
      </Box>
      <Typography
        sx={{ fontSize: "18px", fontWeight: "400", marginTop: "15px" }}
      >
        Follow us on social media
      </Typography>
      <FISclIcons/>
    </Stack>
  );
};

export default FIDetails;
