import React, { useEffect, useState } from "react";

export default function AuraGarden({ emotion }) {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    if (emotion) {
      const map = {
        joy: "#FFD166",
        sadness: "#118AB2",
        anger: "#EF476F",
        fear: "#073B4C",
        calm: "#06D6A0",
        surprise: "#A061FF",
      };
      setColors((prev) => [...prev, map[emotion] || "#ffffff"]);
    }
  }, [emotion]);

  return (
    <div className="garden">
      {colors.map((color, i) => (
        <div key={i} className="aura" style={{ background: color }}></div>
      ))}
    </div>
  );
}
