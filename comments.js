// Create web server
// Create a web server that listens on port 3000 and when it receives a request, it reads the comments.json file and returns the data from it. If the file doesn't exist, it should return a 404 error.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('./comments.json', 'utf8', (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('File not found');
    } else {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(data);
    }
  });
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});