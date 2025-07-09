// src/pages/RoundRobin.jsx
import React, { useState } from "react";
import "./Simulator.css";
import { useNavigate } from "react-router-dom";


const RoundRobin = () => {
  const [servers, setServers] = useState([[], [], []]);
  const [currentServer, setCurrentServer] = useState(0);
  const [requestId, setRequestId] = useState(1);
  const navigate = useNavigate();

  const handleRequest = () => {
    const newServers = [...servers];
    newServers[currentServer].push(`Req ${requestId}`);
    setServers(newServers);
    setRequestId(requestId + 1);
    setCurrentServer((currentServer + 1) % servers.length);
  };

  const reset = () => {
    setServers([[], [], []]);
    setCurrentServer(0);
    setRequestId(1);
  };

  return (
    <div className="simulator-container">
      <h2>🔁 Round Robin Load Balancer</h2>
      <button onClick={handleRequest}>Send Request</button>
      <button onClick={reset} className="reset-btn">Reset</button>
      <div className="server-container">
        {servers.map((reqs, idx) => (
          <div key={idx} className="server">
            <h4>Server {idx + 1}</h4>
            {reqs.map((req, i) => (
              <div key={i} className="request-box">{req}</div>
            ))}
          </div>
        ))}
      </div>
      <button className="back-btn" onClick={() => navigate("/")}>
        ⬅️ Back to Home
      </button>
    </div>
  );
};

export default RoundRobin;
