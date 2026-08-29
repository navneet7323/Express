const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger);
//home page
app.get("/", (req, res) => {
  res.send(`<h>HOME PAGE</h1>`);
});

//user
app.get("/users", auth, (req, res) => {
  console.log();
  res.send(`<h>User PAGE</h1>`);
});
//log
function logger(req, res, next) {
  console.log("LOG");

  next();
}
//auth
function auth(req, res, next) {
  if (req.query.admin === "true") {
    next();
  } else {
    res.send("NO Auth");
  }
  console.log("Authentication");

  next();
}

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
