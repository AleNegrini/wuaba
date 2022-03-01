import React from "react";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "./theme";
import LandingPage from "./views/LandingPage";
import ContextProvider from "./components/ContextProvider";

function App() {
  const theme = createTheme();

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ContextProvider>
          <header className="App-header">
            <title>Wuaba | Lorem ipsum</title>
          </header>
          <body>
            <LandingPage />
          </body>
        </ContextProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
