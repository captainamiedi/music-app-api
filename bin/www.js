// const http = require('http');
// const app = require('../app'); // The express app we just created
import http from 'http';
import app from '../server/app'
const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);