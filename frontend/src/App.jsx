import React, { useState } from "react";
import BreathingSession from "./components/BreathingSession";
import Journal from "./components/Journal";
import AuraGarden from "./components/AuraGarden";

export default function App() {
  const [phase, setPhase] = useState("breathe");
  const [emotion, setEmotion] = useState(null);

  return (
    <>
      {phase === "breathe" && <BreathingSession onFinish={() => setPhase("journal")} />}
      {phase === "journal" && <Journal onSubmit={(emo) => { setEmotion(emo); setPhase("aura"); }} />}
      {phase === "aura" && <AuraGarden emotion={emotion} />}
    </>
  );
}
