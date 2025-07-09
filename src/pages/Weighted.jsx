
import React, { useState } from "react";
import "./Simulator.css";
import { useNavigate } from "react-router-dom";


const Weighted = () => {
  const weights = [3, 2, 1];
  const [servers, setServers] = useState([[], [], []]);
  const [requestId, setRequestId] = useState(1);
  const [weightTracker, setWeightTracker] = useState([]);
  const navigate = useNavigate();

  const handleRequest = () => {
    const totalWeight = weights.reduce((a, b) => a + b, 0);

    let serverPool = [];
    for (let i = 0; i < weights.length; i++) {
      for (let j = 0; j < weights[i]; j++) {
        serverPool.push(i); 
      }
    }

    serverPool = [...serverPool];

    // Use pointer to cycle through weight pattern
    const pointer = requestId % totalWeight;
    const serverIndex = serverPool[pointer];

    const newServers = [...servers];
    newServers[serverIndex].push(`Req ${requestId}`);
    setServers(newServers);
    setRequestId(requestId + 1);
  };

  const reset = () => {
    setServers([[], [], []]);
    setRequestId(1);
  };

  return (
    <div className="simulator-container">
      <h2>⚖️ Weighted Load Balancer</h2>
      <p><strong>Weights:</strong> Server 1 = 3, Server 2 = 2, Server 3 = 1</p>
      <button onClick={handleRequest}>Send Request</button>
      <button onClick={reset} className="reset-btn">Reset</button>

      <div className="server-container">
        {servers.map((reqs, idx) => (
          <div key={idx} className="server">
            <h4>Server {idx + 1} ({reqs.length})</h4>
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

export default Weighted;
