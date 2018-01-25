const productController = require('./product-controller');

module.exports = function (request, response) {    
    response.setHeader('Content-Type', 'application/json');
  
    const path = request.url.split('/').filter(v => v);
    if (path[0] === 'product') {
      productController(request, response);
    } else {
      response.statusCode = 400;
      response.end();
    }
};