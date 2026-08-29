const express = require("express");

const app = express();

app.get("/users/:userId/posts/:postId", (req, res) => {
  console.log(req.params);

  const age ={ userId, postId } = req.params;

  res.json({ userId, postId });
});

app.listen(4000, () => {
  console.log("Server is running");
});
