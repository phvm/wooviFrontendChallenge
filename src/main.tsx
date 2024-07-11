import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";
import { ThemeProvider } from "@mui/material";
import theme from "./theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ScopedCssBaseline>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ScopedCssBaseline>
  </React.StrictMode>
);
