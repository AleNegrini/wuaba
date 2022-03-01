import { AppBar as MUIAppBar, Box, Container, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SignupButton from "../../../components/SignupButton";
import LoginButton from "../../../components/LoginButton";
import React from "react";

const AppBar: React.FC = () => {
  return (
    <MUIAppBar
      elevation={0}
      sx={{
        backgroundColor: "background.paper",
        borderBottomColor: "divider",
        borderBottomStyle: "solid",
        borderBottomWidth: 1,
        color: "text.secondary",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: 64 }}>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            color="inherit"
            sx={{
              display: {
                md: "none",
              },
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
          <Box>
            <LoginButton sx={{ ml: 2 }} label="Login" disabled />
            <SignupButton sx={{ ml: 2 }} label={"Unisciti a Wuaba"} />
          </Box>
        </Toolbar>
      </Container>
    </MUIAppBar>
  );
};

export default AppBar;
