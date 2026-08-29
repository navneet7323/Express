const http = require("http");

const PORT = 3000;
const server = http.createServer((req, res) => {
  const data = [
    {
      id: 1,
      name: "Navneet",
    },
    {
      id: 2,
      name: "Ujjwal",
    },
  ];

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(data));
});

server.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
