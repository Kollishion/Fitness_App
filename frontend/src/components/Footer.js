import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  IconButton,
  TextField,
  Button,
  AppBar,
  Toolbar,
  Icon,
} from "@mui/material";
import { Facebook, Twitter, Google } from "@mui/icons-material";

const Footer = () => {
  return (
    <AppBar position="static" component="footer"> 
      <Container>
        {/* Contact Section */}
        <Grid container spacing={3} sx={{ padding: '20px 0' }}>
          <Grid item xs={12} md={4}>
            <Box display="flex" alignItems="center">
              <Icon className="fas fa-map-marker-alt" />
              <Box ml={2}>
                <Typography variant="h6">Find us</Typography>
                <Typography>1010 Avenue, sw 54321, chandigarh</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box display="flex" alignItems="center">
              <Icon className="fas fa-phone" />
              <Box ml={2}>
                <Typography variant="h6">Call us</Typography>
                <Typography>9876543210 0</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box display="flex" alignItems="center">
              <Icon className="far fa-envelope-open" />
              <Box ml={2}>
                <Typography variant="h6">Mail us</Typography>
                <Typography>mail@info.com</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Content Section */}
        <Grid container spacing={3} sx={{ padding: '20px 0' }}>
          <Grid item xs={12} md={4}>
            <Box>
              <img src="https://i.ibb.co/QDy827D/ak-logo.png" alt="logo" style={{ width: '100px' }} />
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
              </Typography>
              <Box mt={2}>
                <Typography variant="body2">Follow us:</Typography>
                <IconButton href="#">
                  <Facebook />
                </IconButton>
                <IconButton href="#">
                  <Twitter />
                </IconButton>
                <IconButton href="#">
                  <Google />
                </IconButton>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6">Useful Links</Typography>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6">Subscribe</Typography>
            <Typography variant="body2">Don’t miss to subscribe to our new feeds, kindly fill the form below.</Typography>
            <Box component="form">
              <TextField
                label="Email Address"
                variant="outlined"
                size="small"
                fullWidth
              />
              <Button variant="contained" color="primary" endIcon={<Icon className="fab fa-telegram-plane" />}>
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
};

export default Footer;
