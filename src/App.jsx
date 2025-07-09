import React from "react";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import RoundRobin from "./pages/RoundRobin";
import LeastConnections from "./pages/LeastConnections";
import Weighted from "./pages/Weighted";
import About from "./pages/About";
import Compare from "./pages/Compare";

// const LeastConnections = () => <div>Least Connections Simulation</div>;
// const Weighted = () => <div>Weighted Load Balancing Simulation</div>;
// const About = () => <div>About This Project</div>;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/round-robin" element={<RoundRobin />} />
        <Route path="/least-connections" element={<LeastConnections />} />
        <Route path="/weighted" element={<Weighted />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
