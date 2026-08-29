const express = require("express");

const app = express();

const PORT = 3000;

app.get("/users", (req, res) => {
  res.json({ users: [] });
});

app.post("/users", (req, res) => {
  res.status(201).json({ message: "User created" });
});

app.put("/users/:id", (req, res) => {
  res.json({ message: `User ${req.params.id} updated` });
});

app.delete("/users/:id", (req, res) => {
  res.status(204).send();
});

// All methods
app.all("/api", (req, res) => {
  res.json({ method: req.method });
});

app.listen(PORT, () => {
  console.log("my server is running");
});
