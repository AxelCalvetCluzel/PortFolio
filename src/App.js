import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Competences from "./pages/Competences";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./styles/Main.scss"; 
import Robot from "./components/Robot";

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="main-container">
        <section id="about">
          <About />
        </section>{" "}
        <section id="Competences">
          <Competences />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
      <Footer />
      <Robot />
    </div>
  );
};

export default App;
