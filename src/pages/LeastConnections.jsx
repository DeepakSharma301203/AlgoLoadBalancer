// src/pages/LeastConnections.jsx
import React, { useState } from "react";
import "./Simulator.css";
import { useNavigate } from "react-router-dom";


const LeastConnections = () => {
  const [servers, setServers] = useState([[], [], []]);
  const [requestId, setRequestId] = useState(1);
  const navigate = useNavigate();
  const handleRequest = () => {
    // Find server with the least active requests
    const minIndex = servers.reduce((minIdx, cur, idx, arr) =>
      cur.length < arr[minIdx].length ? idx : minIdx,
    0);

    const newServers = [...servers];
    const req = `Req ${requestId}`;
    newServers[minIndex].push(req);
    setServers(newServers);
    setRequestId(requestId + 1);

    // Simulate connection completion after 2 seconds
    setTimeout(() => {
      const updatedServers = [...newServers];
      updatedServers[minIndex] = updatedServers[minIndex].filter(r => r !== req);
      setServers(updatedServers);
    }, 2000);
  };

  const reset = () => {
    setServers([[], [], []]);
    setRequestId(1);
  };

  return (
    <div className="simulator-container">
      <h2>📉 Least Connections Load Balancer</h2>
      <p>Each request completes after 2 seconds</p>
      <button onClick={handleRequest}>Send Request</button>
      <button onClick={reset} className="reset-btn">Reset</button>

      <div className="server-container">
        {servers.map((reqs, idx) => (
          <div key={idx} className="server">
            <h4>Server {idx + 1} ({reqs.length} active)</h4>
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

export default LeastConnections;
