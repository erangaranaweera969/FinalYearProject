import "dotenv/config";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import OpenAI from "openai";

// Initialize Express App
const app = express();
app.use(cors());
app.use(bodyParser.json());

// OpenAI Configuration
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// API Test Route
app.get("/", (req, res) => {
  res.json({ message: "Backend connected successfully!" });
});

// Chatbot API Endpoint (Handles User Messages)
app.post("/api/chat", async (req, res) => {
  const { userMessage } = req.body;

  if (!userMessage || typeof userMessage !== "string") {
    return res.status(400).json({ error: "Invalid or empty message provided." });
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a friendly chatbot named 'Language Master' that helps users practice languages. Respond clearly and helpfully." },
        { role: "user", content: userMessage },
      ],
    });

    // Send the chatbot response
    res.json({ botReply: response.choices[0].message.content });
  } catch (error) {
    console.error("Error processing chatbot response:", error.message);
    res.status(500).json({ error: "Internal server error." });
  }
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
