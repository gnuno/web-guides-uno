import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route } from "react-router-dom";
import GlobalStyle from "./components/atoms/GlobalStyle";

import Header from "./components/molecules/Header";
import Footer from "./components/molecules/Footer";
import Index from "./pages/Index";
import Map from "./pages/Map";
import AboutUs from "./pages/AboutUs";
import Contribute from "./pages/Contribute";

ReactDOM.render(
    <>
        <GlobalStyle />
        <BrowserRouter>
            <Header/>
            <Route exact strict path='/' render={() => <Index />} />
            <Route exact strict path='/contribute' render={() => <Contribute />} />
            <Route exact strict path='/aboutus' render={() => <AboutUs />} />
            <Route exact strict path='/guide/:name' render={() => <Map />} />
            <Footer/>
        </BrowserRouter>
    </>,
    document.getElementById("root")
);


/* TODO
* 1- Completar contenidos
* 2- Seccion de Como Contribuir
* 3- Seccion de Sobre Nosotros
*/