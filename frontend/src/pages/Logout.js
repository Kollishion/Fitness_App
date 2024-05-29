import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { ThumbUp, MobileFriendly } from "@mui/icons-material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

const BackgroundPhoto = styled(Box)({
  height: "100vh",
  width: "100%",
  backgroundImage:
    "url(https://i.pinimg.com/originals/67/9f/52/679f5279b71238c9003e2799b79a3116.gif)",
  backgroundSize: "cover",
  backgroundPosition: "center"
});

const Jumbotron = styled(Box)(({ theme }) => ({
  height: "50vh",
  borderBottom: "4px solid #2f1c36",
  boxShadow: "0 0 2px rgba(0, 0, 0, 0.6)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& h1": {
    padding: "0.6em 0",
    fontSize: "13vh",
    color: "#2f1c36",
    fontFamily: "sans-serif",
  },
}));

const MiddleBlock = styled(Box)({
  width: "100%",
  textAlign: "center",
  position: "absolute",
  bottom: "calc(50vh - 45px)",
});

const RoundClass = styled(IconButton)(({ theme }) => ({
  cursor: "pointer",
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  background: "#2f1c36",
  color: "rgba(255, 255, 255, 0.95)",
  textShadow: "0px 0px 1px rgba(0, 0, 0, 0.6)",
  boxShadow: "0 0 2px rgba(0, 0, 0, 0.6)",
  padding: "8px 0",
  textAlign: "center",
  "&:hover": {
    background: "#9e8197",
    color: "white",
    textShadow: "0px 0px 1px rgba(0, 0, 0, 0.8)",
  },
}));

const Second = styled(Box)({
  paddingTop: "15px",
  "& .row": {
    display: "flex",
    alignItems: "center",
    height: "60px",
    "& .round-class": {
      marginRight: "10px",
    },
    "& .right-text": {
      width: "calc(100% - 50px)",
      padding: "10px 0",
      color: "white",
      textShadow: "1px 1px 2px black",
    },
  },
});

const Logout = ({ handleLogout }) => {
  const [loadingShowed, setLoadingShowed] = useState(true);
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    if (handleLogout) {
      handleLogout();
    }
    setLoadingShowed(false);
    navigate("/");
  };

  return (
    <BackgroundPhoto>
      <Jumbotron>
        <Container>
          <Typography variant="h1">See you soon!</Typography>
        </Container>
      </Jumbotron>
      <MiddleBlock>
        <Typography variant="h6">Please, click below to logout.</Typography>
        <RoundClass onClick={handleLogoutClick}>
          {loadingShowed ? (
            <Typography>Logout</Typography>
          ) : (
            <CircularProgress size={20} color="inherit" />
          )}
        </RoundClass>
      </MiddleBlock>
      <Second>
        <Container>
          <Box className="row">
            <RoundClass className="round-class">
              <ThumbUp fontSize="large" />
            </RoundClass>
            <Typography className="right-text">
              Thanks for using our web-client, we hope you liked it.
            </Typography>
          </Box>
          <Box className="row">
            <RoundClass className="round-class">
              <MobileFriendly fontSize="large" />
            </RoundClass>
            <Typography className="right-text">
              You can still stay in contact with your phone client.
            </Typography>
          </Box>
        </Container>
      </Second>
    </BackgroundPhoto>
  );
};

export default Logout;
