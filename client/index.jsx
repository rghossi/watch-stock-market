import React from 'react';
import { render } from 'react-dom';
import {AppContainer} from './components/app';
import {Provider} from 'react-redux';
import configureStore from './configureStore';
import {setState} from './actions';
import io from 'socket.io-client';
require('./static/style.css');

const PORT = process.env.PORT || 3000;
const protocol = process.env.PROTOCOL || "http:";
const hostname = process.env.HOSTNAME || "localhost";
let url = `${protocol}//${hostname}`

if (process.env.NODE_ENV !== "production"){
	url += `:${PORT}`;
}

const socket = io(url);
const store = configureStore(socket);

socket.on('state', state =>
  store.dispatch(setState(state))
);

render(<Provider store={store}>
	<AppContainer />
</Provider>, document.getElementById('main'));