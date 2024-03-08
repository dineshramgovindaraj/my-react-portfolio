import "./App.css";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Techstack from "./components/Techstack";
import About from "./components/About";
import Footer from "./components/FooterDown";
import AOS from "aos";
import "aos/dist/aos.css";
import "aos/dist/aos.js";
import Project from "./components/Project";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      <Home />
      <Techstack />
      <Project />
      <About />
      <Footer />
    </>
  );
}

export default App;
