const {hostname,port} = require('./network-configuration');

module.exports = function(){
    console.log(`Server running at http://${hostname}:${port}/`);
};