import {
  Box,
  Checkbox,
  Container,
  TextField,
  Typography,
  Button,
  Link,
} from "@mui/material";
import { FaUser } from "react-icons/fa";
import { BiSolidLockAlt } from "react-icons/bi";
import login_background from "../assets/images/login_background.jpeg"

const Login = () => {
  return (
    <Container maxWidth="sm" sx={{
      mt: "150px",
      mb: "50px"
    }}>
      <Box
        sx={{
          width: 500,
          background: "transparent",
          border: "2px solid rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(30px)",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          color: "#fff",
          borderRadius: 10,
          padding: "30px 40px",
        }}
      >
        <Typography variant="h3" align="center" sx={{ mb: 4 }}>
          Ready To Gain?
        </Typography>
        <Box
          className="input-box"
          sx={{
            position: "relative",
            width: "100%",
            height: 50,
            margin: "30px 0",
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Username"
            required
            fullWidth
            sx={{ "& input": { color: "#fff" } }}
          />
          <FaUser
            className="icon"
            sx={{
              position: "absolute",
              right: 20,
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: 16,
            }}
          />
        </Box>
        <Box
          className="input-box"
          sx={{
            position: "relative",
            width: "100%",
            height: 50,
            margin: "30px 0",
          }}
        >
          <TextField
            variant="outlined"
            type="password"
            placeholder="Password"
            required
            fullWidth
            sx={{ "& input": { color: "#fff" } }}
          />
          <BiSolidLockAlt
            className="icon"
            sx={{
              position: "absolute",
              right: 20,
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: 16,
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 14.5,
            margin: "-15px 0 15px",
          }}
        >
          <label>
            <Checkbox sx={{ color: "#fff", marginRight: 1 }} />
            Remember me
          </label>
          <Link href="#" sx={{ color: "#fff", textDecoration: "none" }}>
            Forgot Password?
          </Link>
        </Box>
        <Button
          variant="contained"
          fullWidth
          sx={{ borderRadius: 40, marginTop: 2 }}
        >
          Login
        </Button>
        <Box
          sx={{ fontSize: 14.5, textAlign: "center", margin: "20px 0 15px" }}
        >
          <Typography variant="body1">
            Don't have an account?{" "}
            <Link
              href="#"
              sx={{ color: "#fff", textDecoration: "none", fontWeight: 600 }}
            >
              Register
            </Link>
          </Typography>
        </Box>
        <img src={login_background} alt="banner" className="login-background-image" />
      </Box>
    </Container>
  );
};

export default Login;
