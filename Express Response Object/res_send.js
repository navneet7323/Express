const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(`<h1>This Is response object to send data in webpage</h1>`);
});

app.get("/user", (req, res) => {
  res.json({
    name: "Navneet",
    age: 25,
    course: "SDE",
  });
});
app.get("/status", (req, res) => {
  res.status(200).send("Sucess");
});

app.get("/sendStatus", (req, res) => {
  res.sendStatus(203);
});
app.get("/download", (req, res) => {
  const filePath = "C:/Users/Navne/Downloads/DBMS_Full_Notes.pdf";

  res.download(filePath);
});
app.listen(4000, () => {
  console.log("Server is running");
});
