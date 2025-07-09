// src/pages/Compare.jsx
import React, { useState } from "react";
import "./Compare.css";
import { useNavigate } from "react-router-dom";

const algoOptions = ["Round Robin", "Least Connections", "Weighted"];

const Compare = () => {
  const navigate = useNavigate();
  const [algo1, setAlgo1] = useState("Round Robin");
  const [algo2, setAlgo2] = useState("Least Connections");

  const [servers1, setServers1] = useState([[], [], []]);
  const [servers2, setServers2] = useState([[], [], []]);
  const [rrIndex1, setRRIndex1] = useState(0);
  const [rrIndex2, setRRIndex2] = useState(0);
  const [requestId, setRequestId] = useState(1);
  const weights = [3, 2, 1];

  const handleSendRequest = () => {
    const req = `Req ${requestId}`;
    setRequestId(requestId + 1);

    applyAlgo(algo1, servers1, setServers1, rrIndex1, setRRIndex1, req);
    applyAlgo(algo2, servers2, setServers2, rrIndex2, setRRIndex2, req);
  };

  const applyAlgo = (algo, servers, setServers, rrIndex, setRRIndex, req) => {
    let newServers = [...servers];
    let index;

    if (algo === "Round Robin") {
      index = rrIndex;
      newServers[index].push(req);
      setRRIndex((rrIndex + 1) % 3);
    }

    if (algo === "Least Connections") {
      index = newServers.reduce((minIdx, cur, idx, arr) =>
        cur.length < arr[minIdx].length ? idx : minIdx, 0);
      newServers[index].push(req);
    }

    if (algo === "Weighted") {
      const totalWeight = weights.reduce((a, b) => a + b);
      const pool = weights.flatMap((w, i) => Array(w).fill(i));
      index = pool[requestId % totalWeight];
      newServers[index].push(req);
    }

    setServers(newServers);

    setTimeout(() => {
      const updated = [...newServers];
      updated[index] = updated[index].filter(r => r !== req);
      setServers(updated);
    }, 2000);
  };

  const reset = () => {
    setServers1([[], [], []]);
    setServers2([[], [], []]);
    setRequestId(1);
    setRRIndex1(0);
    setRRIndex2(0);
  };

  return (
    <div className="dashboard-container">
      <h2>⚔️ Compare Two Load Balancing Algorithms</h2>

      <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
        <select value={algo1} onChange={(e) => setAlgo1(e.target.value)}>
          {algoOptions.map((opt) => <option key={opt}>{opt}</option>)}
        </select>
        <select value={algo2} onChange={(e) => setAlgo2(e.target.value)}>
          {algoOptions.map((opt) => <option key={opt}>{opt}</option>)}
        </select>
      </div>

      <div style={{ marginTop: 20 }}>
        <button onClick={handleSendRequest}>🚀 Send Request</button>
        <button onClick={reset} className="reset-btn">Reset</button>
      </div>

      <div className="simulators">
        <div className="sim-box">
          <h3>{algo1}</h3>
          {servers1.map((reqs, i) => (
            <div key={i} className="server">
              <h4>Server {i + 1}</h4>
              {reqs.map((r, j) => (
                <div className="request-box" key={j}>{r} <span className="loading" /></div>
              ))}
            </div>
          ))}
        </div>

        <div className="sim-box">
          <h3>{algo2}</h3>
          {servers2.map((reqs, i) => (
            <div key={i} className="server">
              <h4>Server {i + 1}</h4>
              {reqs.map((r, j) => (
                <div className="request-box" key={j}>{r} <span className="loading" /></div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <button className="back-btn" onClick={() => navigate("/")}>⬅️ Back to Home</button>
    </div>
  );
};

export default Compare;
