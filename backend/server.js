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

// Load a Node.js-compatible text classification model
let classifier;
(async () => {
  try {
    classifier = await pipeline(
      "text-classification",
      "Xenova/distilbert-base-uncased" // Node.js compatible
    );
    console.log("🧠 Classifier loaded");
  } catch (err) {
    console.error("Failed to load classifier:", err);
  }
})();

let phase = "inhale";

// Emit breathing phase every 4 seconds
setInterval(() => {
  phase = phase === "inhale" ? "exhale" : "inhale";
  io.emit("breathingPhase", { phase });
}, 4000);

app.post("/journal", async (req, res) => {
  const text = req.body.text || "";
  if (!classifier) {
    return res.status(500).json({ error: "Classifier not loaded yet" });
  }

  try {
    const result = await classifier(text);
    const emotion = result[0]?.label || "neutral";
    io.emit("newEmotion", { emotion });
    res.json({ emotion });
  } catch (err) {
    console.error("Error classifying text:", err);
    res.status(500).json({ error: "Classification failed" });
  }
});

io.on("connection", () => console.log("🧘 New user connected"));

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => console.log(`🌿 Backend running on port ${PORT}`));
