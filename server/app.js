import http from 'http';
import express from 'express';
import socketIO from 'socket.io';
import path from 'path';
import {createStore} from 'redux';
import reducer from './reducer';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../Client/components/app';

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const PORT = process.env.PORT || 3000;

const store = createStore(reducer);
store.subscribe(
  () => io.emit('state', store.getState().toJS())
);

io.on('connection', (socket) => {
  socket.emit('state', store.getState().toJS());
  socket.on('action', store.dispatch.bind(store));
});

app.use(express.static('dist'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function (req, res) {
  const appString = renderToString(<App />);
  res.render('index', { markup: appString });
});

server.listen(PORT, function() {
  console.log(`Listening on port ${PORT}...`);
});