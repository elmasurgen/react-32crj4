import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import AllCard from "./components/AllCard";

import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <AllCard />
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}
