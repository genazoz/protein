import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import "./index.sass";
import App from "./App";
import theme from "./theme";
import GlobalStyles from "./globalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
