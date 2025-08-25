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
import WorkProject from "./components/WorkProject";
import Experience from "./components/Experience";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      <Home />
      <Techstack />
      <Experience />
      <WorkProject />
      <Project />
      <About />
      <Footer />
    </>
  );
}

export default App;

// import React, { useState } from "react";

// const App = () => {
//   const [num1, setNum1] = useState();
//   const [num2, setNum2] = useState();
//   const [result, setResult] = useState();

//   const handleAddition = () => {
//     setResult(num1 + num2);
//   };

//   const handleSubraction = () => {
//     setResult(num1 - num2);
//   };
//   const handleMultiplication = () => {
//     setResult(num1 * num2);
//   };
//   const handleDivision = () => {
//     setResult(num1 / num2);
//   };
//   return (
//     <div>
//       Enter the A value
//       <input
//         type="number"
//         value={num1}
//         onChange={(e) => setNum1(Number(e.target.value))}
//       />{" "}
//       <br />
//       Enter the B value
//       <input
//         type="number"
//         value={num2}
//         onChange={(e) => setNum2(Number(e.target.value))}
//       />
//       <br />
//       <button onClick={handleAddition}>Add</button>
//       <button onClick={handleSubraction}>Sub</button>
//       <button onClick={handleMultiplication}>Mul</button>
//       <button onClick={handleDivision}>Div</button>
//       <h1> Answer {result}</h1>
//     </div>
//   );
// };

// export default App;
