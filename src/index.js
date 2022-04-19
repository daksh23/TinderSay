import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./Index.css";

import { ThemeProvider } from "@material-ui/core/styles";
import DarkTheme from "../src/Components/Themes/DarkTheme";
import LightTheme from "../src/Components/Themes/LightTheme";

const theme = "app/theme";

ReactDOM.render(
  <ThemeProvider theme={DarkTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
