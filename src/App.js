import { HashRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <LandingPage />
      </div>
    </HashRouter>
  );
}

export default App;
