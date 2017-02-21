import http from 'http';
import express from 'express';
import socketIO from 'socket.io';
import path from 'path';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import React from 'react';
import { renderToString } from 'react-dom/server';
import {AppContainer} from '../client/components/app';
import configureStore from '../client/configureStore';
import yahooFinance from 'yahoo-finance';

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const PORT = process.env.PORT || 3000;

const store = createStore(reducer);
store.subscribe(
  () => io.emit('state', store.getState())
);

io.on('connection', (socket) => {
  socket.emit('state', store.getState());
  socket.on('action', store.dispatch.bind(store));
});

app.use(express.static('dist'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/api/isValidCode/:code', function(req, res) {
	const code = req.params.code;
	yahooFinance.historical({
		symbol: code,
		from: '2016-01-01',
		to: '2017-01-01'
	}, function(err, result){
		if (err || result.length < 1 || store.getState().stockMarkets.indexOf(code) > -1) res.json({valid: false});
		else res.json({valid: true});
	})
})

app.get('/api/stockmarkets', function(req, res) {
	let stocks = store.getState().stockMarkets;
	if (stocks.length < 1) {
		res.json({datasets: []});
		return;
	}
	yahooFinance.historical({
	  symbols: stocks,
	  from: '2016-01-01',
	  to: new Date().toISOString().substring(0, 10),
	  period: 'd'
	}, function (err, result) {
		if (err) throw err;
		let datasets = [];
		stocks.forEach(function(stock){
			let quotes = result[stock];
			let data = quotes.map((q) => {
		  	return {
	        x: new Date(q.date),
	        y: q.open
	      }
		  })
		  const dataset = {
	      label: stock,
	      fill: false,
	      lineTension: 0,
	      backgroundColor: 'rgba(75,192,192,0.4)',
	      borderColor: 'rgba(75,192,192,1)',
	      borderCapStyle: 'butt',
	      borderDash: [],
	      borderDashOffset: 0.0,
	      borderJoinStyle: 'miter',
	      pointBorderColor: 'rgba(75,192,192,1)',
	      pointBackgroundColor: '#fff',
	      pointBorderWidth: 1,
	      pointHoverRadius: 5,
	      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
	      pointHoverBorderColor: 'rgba(220,220,220,1)',
	      pointHoverBorderWidth: 2,
	      pointRadius: 1,
	      pointHitRadius: 10,
	      data: data
	    }
	    datasets.push(dataset);
		})
		res.json({datasets: datasets});
	});
});

app.get('/', function (req, res) {
  const clientStore = configureStore();
  const appString = renderToString(<Provider store={clientStore}><AppContainer /></Provider>);
  res.render('index', { markup: appString });
});

server.listen(PORT, function() {
  console.log(`Listening on port ${PORT}...`);
});