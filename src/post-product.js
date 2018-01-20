module.exports = function (request, response) {
    let body = [];
    request.on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();
      console.log(body);
      response.statusCode = 201;
      response.end();
    });
  }