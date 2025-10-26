import React from "react";
import "./BreathingCircle.css";

export default function BreathingCircle({ phase }) {
  return (
    <div className={`circle ${phase}`}>
      <p>{phase.toUpperCase()}</p>
    </div>
  );
}
