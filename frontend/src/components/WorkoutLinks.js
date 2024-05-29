import { Box, Button, Tooltip, styled } from "@mui/material";
import { VscDebugStart } from "react-icons/vsc";
import { FaRegPauseCircle } from "react-icons/fa";
import { MdRestartAlt } from "react-icons/md";

const Sidebar = styled(Box)({
  width: "5vw",
  height: "100vh",
  position: "fixed",
  backgroundColor: "#212121",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const SidebarIcon = styled(Box)({
  padding: "5vh 0",
  cursor: "pointer",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "&:hover": {
    backgroundColor: "#525252",
    transition: "0.5s",
  },
});

const Main = styled(Box)({
  marginLeft: "5vw", 
  width: "calc(100% - 5vw)", // Full width minus sidebar width
  height: "100vh",
  background: "black",
});

const TopSection = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
});

const BottomSection = styled(Box)({
  boxSizing: "border-box",
  paddingTop: "5vw",
});

const WorkoutLinks = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minWidth: "100%",
        maxWidth: "100%",
        height: "100%",
        minHeight: "100%",
        maxHeight: "fit-content",
        margin: 0,
        fontFamily: "sans-serif",
        scrollBehavior: "smooth",
      }}
    >
      <Sidebar>
        <Tooltip title="Start">
          <SidebarIcon>
            <VscDebugStart size={24} color="#f5ae16" />
          </SidebarIcon>
        </Tooltip>
        <Tooltip title="Pause">
          <SidebarIcon>
            <FaRegPauseCircle size={24} color="#f5ae16" />
          </SidebarIcon>
        </Tooltip>
        <Tooltip title="Restart">
          <SidebarIcon>
            <MdRestartAlt size={24} color="#f5ae16" />
          </SidebarIcon>
        </Tooltip>
      </Sidebar>
      <Main component="main">
        <TopSection id="topSection">
          <Box component="span">
            <Box component="h1" sx={{ fontSize: "7rem", margin: 0 }}>
              Beginner Workouts:
            </Box>
            <Box component="h3" sx={{ fontWeight: "lighter" }}></Box>
          </Box>
        </TopSection>
        <BottomSection id="bottomSection" />
      </Main>
    </Box>
  );
};

export default WorkoutLinks;
