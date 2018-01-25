const http = require('http');
const {hostname,port} = require('./src/network-configuration');
const productController = require('./src/product-controller');

const server = http.createServer(function (request, response) {
  const path = request.url.split('/').filter(v => v);

  if (path[0] === 'product') {
    productController(request, response);
  } else {
    response.statusCode = 400;
    response.setHeader('Content-Type', 'application/json');
    response.end();
  }
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});