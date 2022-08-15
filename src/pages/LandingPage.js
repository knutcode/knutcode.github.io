import { Routes, Route, Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <Routes>
      <Route path="/" element={<div>home page</div>} />

      <Route
        path="about"
        element={
          <div>
            <h2>testing</h2>
          </div>
        }
      />
    </Routes>
  );
};

export default LandingPage;
