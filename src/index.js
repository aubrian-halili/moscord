const http = require('http');

const {
  normalizePort,
  onError,
  listening,
} = require('server-util');

const app = require('./app');

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError(port));
server.on('listening', listening(server));
