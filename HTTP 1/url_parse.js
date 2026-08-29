const http = require("http");

const PORT = 3000;
const url = require("url");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  console.log("Path:", parsedUrl.pathname);
  console.log("Query:", parsedUrl.query);

  // Using URL class (modern approach)
  const myURL = new URL(req.url, "http://localhost:3000");
  console.log("Search params:", myURL.searchParams);
  console.log("Param value:", myURL.searchParams.get("key"));
});

server.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
