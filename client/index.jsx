import React from 'react';
import { render } from 'react-dom';
import {AppContainer} from './components/app';
import {Provider} from 'react-redux';
import configureStore from './configureStore';
import {setState} from './actions';
import io from 'socket.io-client';

const PORT = process.env.PORT || 3000;
const protocol = process.env.PROTOCOL || "http:";
const hostname = process.env.HOSTNAME || "localhost";

const socket = io(`${protocol}//${hostname}:${PORT}`);
const store = configureStore(socket);

socket.on('state', state =>
  store.dispatch(setState(state))
);

render(<Provider store={store}>
	<AppContainer />
</Provider>, document.getElementById('main'));