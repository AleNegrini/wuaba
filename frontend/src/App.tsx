import React, { ChangeEvent, useState } from "react";
import axios from "axios";
import AppBar from "./components/AppBar";
import { Box, Container, ThemeProvider, Typography } from "@mui/material";
import { createTheme } from "./theme";

function App() {
  const theme = createTheme();

  const [email, setEmail] = useState<string | undefined>(undefined);

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  // const handleClick = () =>
  //   axios
  //     .post("http://localhost:8080/v1/whiz", null, {
  //       headers: { "Access-Control-Allow-Origin": "*" },
  //       params: { email: email },
  //     })
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <header className="App-header">
          <title>Wuaba | Lorem ipsum</title>
        </header>
        <body>
          <AppBar />
          <Box
            sx={{
              backgroundColor: "background.paper",
              pt: 6,
            }}
          >
            <Container
              maxWidth="md"
              sx={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography color="primary" variant="overline">
                Introducing
              </Typography>
              <Typography align="center" variant="h1">
                Material Kit Pro v5.0
              </Typography>
            </Container>
          </Box>
        </body>
      </ThemeProvider>
    </div>
  );
}

export default App;
