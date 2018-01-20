const http = require('http');
const {hostname, port} = require('./src/network-configuration');
const getProduct = require('./src/get-product');
const postProduct = require('./src/post-product');

const server = http.createServer(function (request, response) {
    const path = request.url.split('/').filter(v => v);
  
    response.statusCode = 404;
    response.setHeader('Content-Type', 'application/json');
  
    if (path[0] === 'product') {
      if (request.method === 'GET') {
        getProduct(request, response);
      } else if (request.method == 'POST') {
        postProduct(request, response);
      }
    }
  
  }).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });