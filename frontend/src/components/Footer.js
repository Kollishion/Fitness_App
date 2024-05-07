import React from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  TextField,
  IconButton,
  Link
} from "@mui/material";
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Google as GoogleIcon,
  Telegram as TelegramIcon,
  LocationOn as LocationOnIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#151414",
        color: "#757575",
        padding: "20px 0",
      }}
    >
      <Container>
        <Box
          sx={{
            borderBottom: "1px solid #373636",
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <LocationOnIcon sx={{ color: "#ff5e14", fontSize: "30px" }} />
                <Box sx={{ paddingLeft: "15px" }}>
                  <Typography variant="h6" color="#fff">
                    Find us
                  </Typography>
                  <Typography>1010 Avenue, SW 54321, Chandigarh</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <PhoneIcon sx={{ color: "#ff5e14", fontSize: "30px" }} />
                <Box sx={{ paddingLeft: "15px" }}>
                  <Typography variant="h6" color="#fff">
                    Call us
                  </Typography>
                  <Typography>9876543210</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <EmailIcon sx={{ color: "#ff5e14", fontSize: "30px" }} />
                <Box sx={{ paddingLeft: "15px" }}>
                  <Typography variant="h6" color="#fff">
                    Mail us
                  </Typography>
                  <Typography>mail@info.com</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Box>
                <Typography variant="h6" color="#fff">
                  Follow us
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Link href="#">
                    <IconButton
                      sx={{ backgroundColor: "#3B5998", color: "#fff" }}
                    >
                      <FacebookIcon />
                    </IconButton>
                  </Link>
                  <Link href="#">
                    <IconButton
                      sx={{ backgroundColor: "#55ACEE", color: "#fff" }}
                    >
                      <TwitterIcon />
                    </IconButton>
                  </Link>
                  <Link href="#">
                    <IconButton
                      sx={{ backgroundColor: "#DD4B39", color: "#fff" }}
                    >
                      <GoogleIcon />
                    </IconButton>
                  </Link>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box>
                <Typography variant="h6" sx={{ color: "#fff" }}>
                  Useful Links
                </Typography>
                <Box component="ul" sx={{ listStyle: "none", padding: "0" }}>
                  <li>
                    <Link href="#" sx={{ color: "#878787" }}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="#" sx={{ color: "#878787" }}>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#" sx={{ color: "#878787" }}>
                      Contact
                    </Link>
                  </li>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box>
                <Typography variant="h6" sx={{ color: "#fff" }}>
                  Subscribe
                </Typography>
                <Typography sx={{ color: "#7e7e7e" }}>
                  Don’t miss to subscribe to our new feeds, kindly fill the form
                  below.
                </Typography>
                <Box
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    marginTop: "10px",
                  }}
                >
                  <TextField
                    placeholder="Email Address"
                    variant="outlined"
                    //ooooooooooo
                    fullWidth
                    sx={{
                      backgroundColor: "#2E2E2E",
                      color: "#fff",
                      borderColor: "#2E2E2E",
                      "& .MuiInputBase-input::placeholder": {
                        color: "whitesmoke",
                        opacity: 1,
                      },
                    }}
                  />
                  <IconButton
                    sx={{
                      position: "absolute",
                      top: "0",
                      right: "0",
                      backgroundColor: "#ff5e14",
                      padding: "13px 20px",
                      border: "1px solid #ff5e14",
                    }}
                  >
                    <TelegramIcon style={{ color: "#fff" }} />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            backgroundColor: "#202020",
            padding: "25px 0",
          }}
        >
          <Container>
            <Grid container>
              <Grid item xs={12} md={6}>
                <Typography variant="body2" sx={{ color: "#878787" }}>
                  Copyright &copy; 2018, All Rights Reserved{" "}
                  <Link
                    to='/'
                    sx={{ color: "#ff5e14", cursor: "pointer" }}
                  >
                    FitnessFusion
                  </Link>
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} sx={{ textAlign: "right" }}>
                <Box
                  component="ul"
                  sx={{ listStyle: "none", padding: "0", margin: "0" }}
                >
                  <li sx={{ display: "inline-block", marginRight: "20px" }}>
                    <Link to="/" sx={{ color: "#878787" }}>
                      Home
                    </Link>
                  </li>
                  <li sx={{ display: "inline-block", marginRight: "20px" }}>
                    <Link to="/about" sx={{ color: "#878787" }}>
                      About
                    </Link>
                  </li>
                  <li sx={{ display: "inline-block", marginRight: "20px" }}>
                    <Link to="/contact" sx={{ color: "#878787" }}>
                      Contact
                    </Link>
                  </li>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
