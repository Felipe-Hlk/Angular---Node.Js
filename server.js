const http = require ('http');
const app = require ('./backend/app.js');
const port = process.env.PORT || 3000;

/* req = request 
   res = response
*/
const server = http.createServer(app);

server.listen(port);