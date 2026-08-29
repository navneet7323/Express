const http = require("http");

// Create server
const server = http.createServer((req, res) => {
  // Request info
  console.log(req.method, req.url);
  console.log(req.headers);

  // Response
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Hello World" }));
});

// Listen on port
server.listen(3000, () => {
  console.log("Server running on port 3000");
});
