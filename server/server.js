const https = require('./instances/https');
const http = require('./instances/http');

// TODO Proper logging (also in https and http)
console.log(`Server starting in ${process.env.NODE_ENV.toUpperCase()} mode...`);

https();
http();
