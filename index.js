const http = require('http');
const networkConfiguration = require('./src/network-configuration');
const handleRequest = require('./src/handle-request');
const listener = require('./src/listener');

const port = process.env.PORT || networkConfiguration.port;

const server = http
  .createServer(handleRequest)
  .listen(port, networkConfiguration.hostname, listener);