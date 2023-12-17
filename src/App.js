import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Techstack from "./components/Techstack";
import About from "./components/About";
import AOS from "aos";
import "aos/dist/aos.css";
import "aos/dist/aos.js";
import Project from "./components/Project";
// import SlideNavbar from "./components/SlideNavbar";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tech-stack" element={<Techstack />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </BrowserRouter> */}
      <Navbar />
      <Home />
      <Techstack />
      <Project />
      <About />
    </>
  );
}

export default App;
