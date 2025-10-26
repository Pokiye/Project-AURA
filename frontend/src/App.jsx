import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import Journal from "./components/Journal";
import BreathingCircle from "./components/BreathingCircle";
import "./App.css";

const socket = io("http://localhost:3001");

function App() {
  const [phase, setPhase] = useState("inhale");
  const [emotion, setEmotion] = useState("");

  useEffect(() => {
    socket.on("breathingPhase", data => setPhase(data.phase));
    socket.on("newEmotion", data => setEmotion(data.emotion));
    return () => socket.off("breathingPhase").off("newEmotion");
  }, []);

  return (
    <div className="App">
      <h1>Project AURA</h1>
      <BreathingCircle phase={phase} />
      <Journal onSubmit={setEmotion} />
      {emotion && <p className="emotion">Current emotion: {emotion}</p>}
    </div>
  );
}

export default App;
