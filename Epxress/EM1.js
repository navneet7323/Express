const ex = require("express");
const app = ex();

app.use((req, res, next) => {
  console.log("Middleware 1");

  next();
});

app.use((req, res, next) => {
  console.log("Middleware 2");

  next();
});

app.use((req, res, next) => {
  console.log("Middleware 3");

  next();
});

app.get("/", (req, res) => {
  console.log("Route");

  res.send("Home");
});

app.listen(80)