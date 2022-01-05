const http = require('http');
const fs = require('fs');

// function rqListener(req, res) {

// }

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  //process.exit();
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></div></body>'
    );
    res.write('</html>');
    return res.end();
  }
  if (url === '/message' && method === 'POST') {
    fs.writeFileSync('message.text', 'uuu');
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<body><div>Hey Girla</div></body>');
  res.write('</html>');
  res.end();
});

server.listen(3001);
