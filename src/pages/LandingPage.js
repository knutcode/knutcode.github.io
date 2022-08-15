import { Routes, Route, Link } from "react-router-dom";
import Error from "./LandingPage/Error";
import Home from "./LandingPage/Home";
import About from "./LandingPage/About";
import Projects from "./LandingPage/Projects";

const LandingPage = () => {
  return (
    <Routes>
      <Route path="*" element={<Error />} />
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="projects" element={<Projects />} />
    </Routes>
  );
};

export default LandingPage;
