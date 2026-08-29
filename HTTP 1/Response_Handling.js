const http = require("http");

const PORT = 1024;

const server = http.createServer((req, res) => {
  // Set status code
  res.statusCode = 200;

  // Set headers
  res.setHeader("Content-Type", "application/json");
  res.setHeader("X-Custom-Header", "value");

  // Write multiple headers at once
  res.writeHead(200, {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
  });

  // Send response
  res.end(
    JSON.stringify([
      { id: 1, name: "Nav" },
      { id: 2, name: "Ujjawal" },
    ]),
  );
});

server.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
