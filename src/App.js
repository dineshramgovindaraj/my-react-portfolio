import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import Contact from "./components/Contact";
import Error from "./components/Error";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/page-not-found" element={<Error />} />
        </Routes>
      </BrowserRouter> */}
      <Navbar />
      <Home />
      <Techstack />
      <Project />
      <About />
      {/* <Contact /> */}
      <Footer />
    </>
  );
}

export default App;
