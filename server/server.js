const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Initialize SQLite database
const dbPath = path.resolve(__dirname, "analytics.db");
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("Error opening database " + err.message);
  } else {
    db.run(
      `CREATE TABLE IF NOT EXISTS visits (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        ip TEXT,
        userAgent TEXT,
        path TEXT,
        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
      )`,
      (err) => {
        if (err) {
          console.error("Error creating table " + err.message);
        }
      }
    );
  }
});

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// --- API ROUTES ---

// 1. Contact Form Route
app.post("/api/contact", async (req, res) => {
  const { user_name, user_email, subject, message } = req.body;

  if (!user_name || !user_email || !message) {
    return res.status(400).json({ error: "Please fill in all required fields." });
  }

  try {
    const mailOptions = {
      from: user_email,
      to: process.env.EMAIL_USER, // Sending to yourself
      subject: `Portfolio Contact: ${subject || "No Subject"} - from ${user_name}`,
      text: `Name: ${user_name}\nEmail: ${user_email}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send message. Please try again later." });
  }
});

// 2. Analytics Visit Route
app.post("/api/analytics/visit", (req, res) => {
  const { path: visitPath } = req.body;
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  const userAgent = req.headers["user-agent"];

  const sql = "INSERT INTO visits (ip, userAgent, path) VALUES (?, ?, ?)";
  const params = [ip, userAgent, visitPath || "/"];

  db.run(sql, params, function (err) {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ error: "Failed to record visit" });
    }
    res.status(200).json({ success: true, id: this.lastID });
  });
});

// 3. Analytics Get Route (for debugging/admin)
app.get("/api/analytics", (req, res) => {
  db.all("SELECT * FROM visits ORDER BY timestamp DESC LIMIT 100", [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
