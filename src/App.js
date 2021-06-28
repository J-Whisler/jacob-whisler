import React from "react";
import './App.css';

import Navbar from "./components/Nav/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
     <Navbar />
     <About />
     <Skills />
     <Work />
     <Contact />
    </div>
  );
}

export default App;
