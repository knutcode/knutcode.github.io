import { Routes, Route } from "react-router-dom";
import Error from "./LandingPage/Error";
import Home from "./LandingPage/Home";
import About from "./LandingPage/About";
import Projects from "./LandingPage/Projects";
import SharedLayout from "./LandingPage/SharedLayout";

const LandingPage = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
};

export default LandingPage;
