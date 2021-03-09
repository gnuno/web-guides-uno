import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route } from "react-router-dom";
import GlobalStyle from "./components/atoms/GlobalStyle";

import Header from "./components/molecules/Header";
import Index from "./pages/Index";
import Map from "./pages/Map";

ReactDOM.render(
    <>
        <GlobalStyle />
        <BrowserRouter>
            <Header/>
            <Route exact strict path='/' render={() => <Index />} />
            <Route exact strict path='/:name' render={() => <Map />} />
        </BrowserRouter>
    </>,
    document.getElementById("root")
);
