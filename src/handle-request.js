const productController = require('./product-controller');

module.exports = function (request, response) {
    const path = request.url.split('/').filter(v => v);
    
    response.setHeader('Content-Type', 'application/json');
  
    if (path[0] === 'product') {
      productController(request, response);
    } else {
      response.statusCode = 400;
      response.end();
    }
};