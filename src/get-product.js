const products = require('./products.json');

module.exports = function (request, response) {
    const path = request.url.split('/').filter(v => v);
    const id = parseInt(path[1], 10);

    let data = {};
    if (id) {
      const product = products.filter(p => p.id === id);
      if (product) {
        data = product[0];
      }
    } else {
      data = products;
    }
  
    response.statusCode = 200;
    response.end(JSON.stringify(data));
};