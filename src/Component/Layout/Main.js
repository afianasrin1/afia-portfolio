import React from "react";

import AboutUs from "../AboutMe/AboutMe";
import ContactMe from "../ContactMe/ContactMe";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutUs />
      <Projects />
      <Skills />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default Main;
