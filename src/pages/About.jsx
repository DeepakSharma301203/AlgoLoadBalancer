// src/pages/About.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about-container">
      <h1>ℹ️ About This Project</h1>
      <p>
        The <strong>Load Balancer Simulator</strong> is an interactive web-based tool
        built with React.js to simulate three core load balancing algorithms:
      </p>

      <ul>
        <li>🔁 Round Robin</li>
        <li>📉 Least Connections (with active request timeout)</li>
        <li>⚖️ Weighted Load Balancing</li>
      </ul>

      <p>
        This tool demonstrates how incoming client requests can be distributed among
        multiple servers to improve scalability and reliability.
      </p>

      <div className="credits">
        <h3>👨‍💻 Developed By:</h3>
        <p><strong>Deepak Sharma</strong></p>
        <p>🎓 Chandigarh University</p>
      </div>

      <button className="back-btn" onClick={() => navigate("/")}>
        ⬅️ Back to Home
      </button>
    </div>
  );
};

export default About;
