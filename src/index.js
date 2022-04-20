import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./Index.css";

import {ThemeProvider} from "@material-ui/core/styles";
import DarkTheme from "../src/Components/Themes/DarkTheme";
import LightTheme from "../src/Components/Themes/LightTheme";

const theme = "app/theme";

let bool = React.createContext(true);

export const ThemeContext = React.createContext({
    theme: true,
    toggleTheme: () => {
        bool = !bool;
        console.log("true or false", bool);
    }
});

const themeChange = () => {}

ReactDOM.render(<App />,document.getElementById("root"));
