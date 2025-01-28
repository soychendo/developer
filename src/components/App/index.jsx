import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalProvider } from '@context/GlobalProvider';
import { GlobalStyle } from '@styles/GlobalStyle';

import Home from "@components/home/";
import {Header} from "@components/header/";
import About from "@components/about/";
import Contact from "@components/contact/";
import Portfolio from "@components/portfolio/";

const App = () => {
  return (
    <>
    <Router>
      <GlobalStyle />
      <GlobalProvider>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="*" element={<Home />} />
        </Routes>
      </GlobalProvider>
    </Router>
    </>
  );
}

export default App;
