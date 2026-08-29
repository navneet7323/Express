const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  // Parse URL
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const query = parsedUrl.query;

  // Get request data
  const method = req.method;
  const headers = req.headers;

  // Collect body data
  let body = "";
  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", () => {
    console.log("Body:", body);

    // Route handling
    if (path === "/users" && method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ users: [] }));
    } else if (path === "/users" && method === "POST") {
      const user = JSON.parse(body);
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify(user));
    } else {
      res.writeHead(404);
      res.end("Not Found");
    }
  });
});

server.listen(4000);
