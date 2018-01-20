const getProduct = require('./get-product');
const postProduct = require('./post-product');

module.exports = function (request, response) {
    response.statusCode = 400;
    response.setHeader('Content-Type', 'application/json');
    
    if (request.method === 'GET') {
        getProduct(request, response);
    } else if (request.method == 'POST') {
        postProduct(request, response);
    } else {
        response.statusCode = 404;
    }

    response.end();
};