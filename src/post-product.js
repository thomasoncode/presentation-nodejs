module.exports = function (request, response) {
    let body = [];
    request.on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      const json = Buffer.concat(body).toString();
      console.log(json);
      response.statusCode = 201;
      response.end();
    });
  }