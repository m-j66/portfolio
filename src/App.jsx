import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/intro/intro";
import Skills from "./Components/skills/skills";
import Projects from "./Components/projects/projects";
import Contact from "./Components/contact/contact";
import Footer from "./Components/footer/footer";
const App = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
