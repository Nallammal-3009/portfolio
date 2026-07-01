import "./App.css";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
  if (darkMode) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
}, [darkMode]);
  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
    easing: "ease-in-out",
  });
}, []);

  return (
    <div className={`app ${darkMode ? "dark-mode" : ""}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
