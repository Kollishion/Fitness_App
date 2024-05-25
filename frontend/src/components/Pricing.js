import React from "react";
import { Grid, Paper, Typography, Button } from "@mui/material"; // Import necessary MUI components

function Pricing() {
  return (
    <div style={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        sx={{
          background: "#393e46",
          width: "100%",
          height: "100vh",
        }}
      >
        {/* Basic Plan */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            elevation={3}
            style={{
              padding: "20px",
              backgroundColor: "#4B5563",
              color: "white",
            }}
          >
            <div
              style={{
                textTransform: "uppercase",
                textAlign: "center",
                marginBottom: "10px",
              }}
            >
              Free
            </div>
            <Typography
              variant="h3"
              align="center"
              style={{ marginBottom: "10px" }}
            >
              100GB
            </Typography>
            <Typography
              variant="h5"
              align="center"
              style={{ marginBottom: "20px" }}
            >
              $1.99/Month
            </Typography>
            <Button
              variant="outlined"
              fullWidth
              style={{ borderColor: "#84CC16", color: "#84CC16" }}
            >
              Purchase
            </Button>
            <div
              style={{
                borderTop: "1px solid #4B5563",
                marginTop: "20px",
                paddingTop: "20px",
              }}
            >
              <Typography variant="h6" align="center">
                Features:
              </Typography>
              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <img
                    src="./img/check-svgrepo-com.svg"
                    alt=""
                    style={{ marginRight: "10px" }}
                  />
                  <Typography variant="body1">100 GB storage</Typography>
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <img
                    src="./img/check-svgrepo-com.svg"
                    alt=""
                    style={{ marginRight: "10px" }}
                  />
                  <Typography variant="body1">Option to add numbers</Typography>
                </li>
                <li style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src="./img/check-svgrepo-com.svg"
                    alt=""
                    style={{ marginRight: "10px" }}
                  />
                  <Typography variant="body1">Extra number benefits</Typography>
                </li>
              </ul>
            </div>
          </Paper>
        </Grid>

        {/* Standard Plan */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            elevation={3}
            style={{
              padding: "20px",
              backgroundColor: "#84CC16",
              color: "white",
            }}
          >
            <div
              style={{
                textTransform: "uppercase",
                textAlign: "center",
                marginBottom: "10px",
              }}
            >
              Standard
            </div>
            <Typography
              variant="h3"
              align="center"
              style={{ marginBottom: "10px" }}
            >
              200GB
            </Typography>
            <Typography
              variant="h5"
              align="center"
              style={{ marginBottom: "20px" }}
            >
              $3.99/Month
            </Typography>
            <Button
              variant="outlined"
              fullWidth
              style={{ borderColor: "#4B5563", color: "#4B5563" }}
            >
              Purchase
            </Button>
            <div
              style={{
                borderTop: "1px solid #84CC16",
                marginTop: "20px",
                paddingTop: "20px",
              }}
            >
              <Typography variant="h6" align="center">
                Features:
              </Typography>
              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <img
                    src="./img/check-svgrepo-com.svg"
                    alt=""
                    style={{ marginRight: "10px" }}
                  />
                  <Typography variant="body1">200 GB storage</Typography>
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <img
                    src="./img/check-svgrepo-com.svg"
                    alt=""
                    style={{ marginRight: "10px" }}
                  />
                  <Typography variant="body1">Option to add numbers</Typography>
                </li>
                <li style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src="./img/check-svgrepo-com.svg"
                    alt=""
                    style={{ marginRight: "10px" }}
                  />
                  <Typography variant="body1">Extra number benefits</Typography>
                </li>
              </ul>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Pricing;
