import React, { useState, useEffect } from "react";
import "./Breathing.css";

export default function BreathingSession({ onFinish }) {
  const [phase, setPhase] = useState("inhale");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const phases = ["inhale", "hold", "exhale", "hold"];
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= phases.length * 4 - 1) {
          clearInterval(timer);
          onFinish();
          return prev;
        }
        setPhase(phases[(prev + 1) % phases.length]);
        return prev + 1;
      });
    }, 4000);
    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <div className="breathing-container">
      <div className={`circle ${phase}`}></div>
      <p className="text">{phase.toUpperCase()}</p>
    </div>
  );
}
