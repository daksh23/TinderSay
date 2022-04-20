import React, { useState } from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";

import {ThemeProvider} from "@material-ui/core/styles";
import DarkTheme from "../src/Components/Themes/DarkTheme";
import LightTheme from "../src/Components/Themes/LightTheme";



function App() {

  const [Bool, setBool] = useState(true)

  const tc =() =>{
    setBool(!Bool)
    console.log(Bool)
  }


  return (
        <ThemeProvider theme={Bool
            ? DarkTheme
            : LightTheme}>

            <BrowserRouter>
                <Header tc={tc}/>
                <div className="Main">
                    <Switch>
                        <Route path="/" component={Home} exact/>
                    </Switch>
                </div>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
