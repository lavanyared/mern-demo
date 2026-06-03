import React, { useEffect, useState } from "react";

function App() {
  const [health, setHealth] = useState("Checking backend...");

  useEffect(() => {
    fetch("/api/health")
      .then((res) => res.json())
      .then((data) => {
        setHealth(`Backend: ${data.status}, Database: ${data.db}`);
      })
      .catch(() => {
        setHealth("Backend not connected");
      });
  }, []);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>MERN TaskFlow Demo</h1>
      <p>React frontend is running successfully.</p>
      <p>{health}</p>
    </div>
  );
}

export default App;
