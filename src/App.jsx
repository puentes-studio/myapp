import { Route, Routes } from "react-router-dom";
import Splash from "./assets/pages/splash/Splash";
import Home from "./assets/pages/home/Home";
import About from "./assets/pages/about/About";
import Projects from "./assets/pages/projects/Projects";
import Contact from "./assets/pages/contact/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
