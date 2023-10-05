const http = require ('http');

/* req = request 
   res = response
*/

const server = http.createServer((req, res) => {
    res.end('This is my first response');
});

server.listen(process.env.PORT || 3000);