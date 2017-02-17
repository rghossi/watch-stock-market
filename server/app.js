import http from 'http';
import express from 'express';
import socketIO from 'socket.io';
import path from 'path';

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function (req, res) {
  res.render('index');
});

server.listen(PORT, function() {
  console.log(`Listening on port ${PORT}...`);
});