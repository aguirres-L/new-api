const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;
const server = http.createServer((req, res) => { // porque no se usa req?
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end('{ "mensaje": "Hola Mundo mi primer api :D"}');
});
server.listen(port, hostname, () => {
  console.log(`URL de api  http://${hostname}:${port}/`);
});
