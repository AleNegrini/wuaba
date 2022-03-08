import { AppBar as MUIAppBar, Box, Container, IconButton, Link as MUILink, Toolbar, Typography } from "@mui/material";
import SignupButton from "../../../components/SignupButton";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

type LinkProps = {
  text: string;
};

const Link: React.FC<LinkProps> = ({ text }) => {
  return (
    <MUILink color="textPrimary" component="a" sx={{ marginX: 2 }} underline="none" variant="body2">
      {text}
    </MUILink>
  );
};

const AppBar: React.FC = () => {
  return (
    <MUIAppBar
      elevation={0}
      sx={{
        backgroundColor: "background.default",
        color: "text.secondary",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: 64 }}>
          <Box display={"flex"} justifyContent={"flex-start"}>
            <Typography variant={"h4"} color={"text.primary"}>
              Wuaba
            </Typography>
          </Box>
          <Box
            display={"flex"}
            flexGrow={1}
            justifyContent={"center"}
            sx={{
              display: {
                md: "flex",
                xs: "none",
              },
            }}
          >
            <Link text={"Cos'è Wuaba?"} />
            <Link text={"Wonder"} />
            <Link text={"Whiz"} />
            <Link text={"Chi siamo"} />
            <Link text={"Contatti"} />
          </Box>
          <Box
            display={"flex"}
            flexGrow={1}
            justifyContent={"flex-end"}
            sx={{
              display: {
                md: "none",
                xs: "flex",
              },
            }}
          >
            <IconButton
              color="inherit"
              // onClick={onOpenSidebar}
              sx={{
                display: {
                  md: "none",
                },
              }}
            >
              <MenuIcon fontSize="small" />
            </IconButton>
          </Box>
          <Box>
            <SignupButton label={"Unisciti a Wuaba"} />
          </Box>
        </Toolbar>
      </Container>
    </MUIAppBar>
  );
};

export default AppBar;
