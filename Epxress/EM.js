const express = require("express");

const app = express();

app.use((req, res, next) => {
  req.username = "Navneet";

  next();
});
//specific path middleware
app.use("/users", (req, res, next) => {
  res.send("user is ruuning");
  console.log("User middleware");

  next();
});

app.get("/", (req, res) => {
  res.send(`Hello ${req.username}`);
});

app.listen(3000, () => {
  console.log("Server running");
});
