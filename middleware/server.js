const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(logger);

app.get("/", (req, res) => {
  res.send(`<h>HOME PAGE</h1>`);
});
app.get("/users", (req, res) => {
  res.send(`<h>User PAGE</h1>`);
});

function logger(req, res, next) {
  console.log("LOG");

  next();
}

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
