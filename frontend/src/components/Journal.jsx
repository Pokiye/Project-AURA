
import React, { useState } from "react";

export default function Journal({ onSubmit }) {
  const [text, setText] = useState("");

  const handleSubmit = async () => {
    if (!text.trim()) return;
    const res = await fetch("http://localhost:3001/journal", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div className="journal">
      <h2>How do you feel right now?</h2>
      <textarea
        rows={4}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your reflection..."
      />
      <button onClick={handleSubmit}>Visualize My Emotion</button>
    </div>
  );
}
