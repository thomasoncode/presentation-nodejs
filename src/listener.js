const {hostname,port} = require('./network-configuration');

/*
const networkConfiguration = = require('./network-configuration');
const hostname = networkConfiguration.hostname;
const port = networkConfiguration.port;
*/

module.exports = function(){
    console.log(`Server running at http://${hostname}:${port}/`);
    // console.log('Server running at http://' + hostname + ':' + port '/')
};