import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import { pipeline } from "@xenova/transformers";

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

// Load lightweight transformer
const classifier = await pipeline(
  "text-classification",
  "Xenova/distilbert-base-uncased"
);

let phase = "inhale";

// Emit breathing phase every 4 seconds
setInterval(() => {
  phase = phase === "inhale" ? "exhale" : "inhale";
  io.emit("breathingPhase", { phase });
}, 4000);

// New route for journal analysis
app.post("/analyze", async (req, res) => {
  const text = req.body.text || "";
  const result = await classifier(text);
  let emotion = result[0].label;

  // Map POSITIVE/NEGATIVE/NEUTRAL to simple emotions
  if (emotion === "POSITIVE") emotion = "happy";
  else if (emotion === "NEGATIVE") emotion = "sad";
  else emotion = "neutral";

  io.emit("newEmotion", { emotion });
  res.json({ emotion });
});

io.on("connection", () => console.log("🧘 New user connected"));

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => console.log(`🌿 Backend running on port ${PORT}`));
