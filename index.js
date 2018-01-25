const http = require('http');
const {hostname,port} = require('./src/network-configuration');
const handleRequest = require('./src/handle-request');
const listener = require('./src/listener');

const server = http
  .createServer(handleRequest)
  .listen(port, hostname, listener);