"use client";
import { Box, Typography, Button } from "@mui/material";

const Hero = () => {
  return (
    <Box
      sx={{
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background: "url('/hero-bg.jpg') center/cover no-repeat",
        color: "white",
      }}
    >
      <Typography variant="h3" fontWeight={700}>Unlock Your Future</Typography>
      <Typography variant="h6" mt={2}>
        Personalized Astrology Sessions for Clarity & Guidance
      </Typography>
      <Button variant="contained" color="secondary" sx={{ mt: 3 }}>Book Now</Button>
    </Box>
  );
};

export default Hero