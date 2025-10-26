import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3001");

export default function Journal({ onSubmit }) {
  const [text, setText] = useState("");
  const [breathing, setBreathing] = useState("");
  const [emotion, setEmotion] = useState("");

  useEffect(() => {
    socket.on("breathingPhase", (data) => setBreathing(data.phase));
    socket.on("newEmotion", (data) => setEmotion(data.emotion));
  }, []);

  const handleSubmit = async () => {
    if (!text.trim()) return;
    const res = await fetch("/api/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    const data = await res.json();
    onSubmit(data.emotion); // optional parent callback
  };

  return (
    <div className="journal">
      <h2>How do you feel right now?</h2>
      <p>Current breathing: {breathing}</p>
      <textarea
        rows={4}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your reflection..."
      />
      <button onClick={handleSubmit}>Visualize My Emotion</button>

      {emotion && <p>Detected Emotion: {emotion}</p>}
    </div>
  );
}
