import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors(
  {
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true
  }
));

// api route
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from the server!" });
});

// const PORT = process.env.PORT || 3001;

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});