const http = require('http');
const hostname = process.env.HOSTNAME || '0.0.0.0';
const port = process.env.PORT || 3000;
const json = {"id": "1","message": "Hello world"};

const server = http.createServer((req,res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(json));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})
