import { StyledMain } from "./components-styled/StyledMain";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/ProjectSection";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <StyledMain>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </StyledMain>
      <Footer />
    </>
  );
}

export default App;
