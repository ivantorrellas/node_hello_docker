const http = require('http');
const hostname = process.env.HOSTNAME || '0.0.0.0';
const port = process.env.PORT2 || 4000;

function reversed(str) {
  let reversed = "";
  for (var i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

function err(e) {
  console.error(`You got an error ${e.message}`);
}

const options = {
  hostname: process.env.HOSTNAME_HELLO || 'localhost',
  port: process.env.PORT || 3000,
}
console.log(options.hostname)
const server = http.createServer((req,res) => {
    http.get(options, (resp) => {
      const { statusCode } = resp;
      const contentType = resp.headers['content-type'];
      let error;
      if (statusCode !== 200) {
        error = new Error('Request Failed.\n' +
                          `Status Code: ${statusCode}`);
      } else if (!/^application\/json/.test(contentType)) {
        error = new Error('Invalid content-type.\n' +
                          `Expected application/json but received ${contentType}`);
      } if (error) {
        console.error(error.message);
        resp.resume(); // consume response data to free up memory
        return;
      }
      resp.setEncoding('utf8');
      let rawData = '';
      resp.on('data', (chunk) => {
        rawData += chunk;
      });
      resp.on('end', () => {
        try {
          let parsedData = JSON.parse(rawData);
          console.log('Received response:');
          console.log(parsedData);
          parsedData.message = reversed(parsedData.message);
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(parsedData));
        } catch (e) {
          err(e);
        }
      });

    }).on('error', e => err(e));

}).on('error', e => err(e));

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
