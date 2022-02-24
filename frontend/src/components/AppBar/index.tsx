import { AppBar as MUIAppBar, Box, Button, Container, IconButton, Link, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

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
          <Box
            sx={{
              alignItems: "center",
              display: {
                md: "flex",
                xs: "none",
              },
            }}
          >
            <Button size="medium" sx={{ ml: 2 }} variant="outlined">
              Login
            </Button>
            <Button size="medium" sx={{ ml: 2 }} variant="contained">
              Unisciti a Wuaba
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </MUIAppBar>
  );
};

export default AppBar;
