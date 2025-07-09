import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="card">
        <h1>Load Balancer Simulator</h1>
        <p>
          Explore and simulate different load balancing algorithms:
          <br /> Round Robin, Least Connections, and Weighted.
        </p>
        <div className="button-group">
          <button onClick={() => navigate("/round-robin")}>🔁 Round Robin</button>
          <button onClick={() => navigate("/least-connections")}>📉 Least Connections</button>
          <button onClick={() => navigate("/weighted")}>⚖️ Weighted Balancing</button>
          <button onClick={() => navigate("/compare")}>⚔️ Compare Algorithms</button> {/* ✅ New */}
          <button onClick={() => navigate("/about")}>ℹ️ About Project</button>
        </div>
      </div>

      <div className="footer">
        © 2025 Deepak Sharma | Chandigarh University
      </div>
    </div>
  );
};

export default LandingPage;
