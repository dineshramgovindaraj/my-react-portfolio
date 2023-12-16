import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Techstack from "./components/Techstack";
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
        <Routes>
          <Route path="/" element={<Navbar />} />
        </Routes>
      </BrowserRouter> */}
      <Navbar />
      <Home />
      <Techstack />
      <Project />
    </>
  );
}

export default App;
