import React from 'react';
import './App.css';
import {Header1} from "./components/Header1/Header1";
import {Header2} from "./components/Header2/Header2";
import {Navbar} from "./components/Navbar/Navbar";
import {Main} from "./components/Content/Main/Main";
import {Footer} from "./components/Footer/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Products} from "./components/Content/Products/Products";
import {About} from "./components/Content/About/About";

function App() {
    const menu:string[] = ["АВТОХІМІЯ", "АКУМУЛЯТОРИ", "ГАЛЬМІВНА РІДИНА", "ГАЛЬМІВНА СИСТЕМА", "ДВІРНИКИ", "ДИСТИЛЬОВАНА ВОДА", "ЕЛЕКТРОЛІТ", "КОВПАКИ", "КОВПАКИ З ЕМБЛЕМАМИ", "УПАКОВКА ОЛІВ", "ОМИВАЧ СКЛА ЗИМОВИЙ", "ОМИВАЧ СКЛА ЛІТНІЙ", "ОСВІЖУВАЧ ПОВІТРЯ", "ОХОЛОДЖУЮЧІ РІДИНИ", "ПРИСАДКИ NANOPROTEC", "СВІЧКИ ЗАПАЛЮВАННЯ", "СИСТЕМА ЗАПАЛЮВАННЯ", "ФІЛЬТРА"]


  return (<BrowserRouter>
          <div className="App">
              <Header1/>
              <Header2 />
              <Navbar menu={menu}/>
              <Routes>
                  <Route path="/AutoShop" Component={Main}/>
                  <Route path="/products" Component={Products}/>
                  <Route path="/about" Component={About}/>

              </Routes>
              <Footer/>
          </div>
      </BrowserRouter>

  );
}

export default App;
