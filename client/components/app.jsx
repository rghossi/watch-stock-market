import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import MyNavbar from './navbar';
import MyFooter from './footer';
import MyChart from './myChart';
import NewStockForm from './newStockForm';
import StockPreview from './stockPreview';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import fetch from 'isomorphic-fetch';

class App extends Component {
	constructor() {
		super();
		this.state = {
			datasets: []
		}
		this.removeStock = this.removeStock.bind(this);
	}

	getStockmarkets() {
		const {stockMarkets} = this.props;
		fetch("/api/stockmarkets", {credentials: 'same-origin'})
      .then(response => response.json())
      .then(json => {
			  this.setState({datasets: json.datasets});
			})
	}

	removeStock(stock) {
		const { dispatch } = this.props;
		dispatch(actions.removeStockMarket(stock));
	}

	componentDidMount() {
		this.getStockmarkets();
	}

	componentDidUpdate(prevProps) {
		const a1 = prevProps.stockMarkets;
		const a2 = this.props.stockMarkets;
		if (a1 && a2 && !(a1.length === a2.length && a1.every((v,i)=> v === a2[i]))){
			this.getStockmarkets();
		}
	}

	render() {
		let {stockMarkets} = this.props;
		if (!stockMarkets) stockMarkets = []
		return (
			<div>
				<MyNavbar />
				<Grid>
					Syncs in realtime across clients
					<NewStockForm />
					<Row>
					{stockMarkets.map(stock => 
						<StockPreview key={stock} stockMarket={stock} removeStock={this.removeStock} />)}
					</Row>
					<Row>
						<MyChart datasets={this.state.datasets}/>
					</Row>
				</Grid>
				<MyFooter />
			</div>
		);
	}
}

function mapStateToProps(state) {
  return {
    stockMarkets: state.stockMarkets,
    from: state.from,
    to: state.to
  };
}

export const AppContainer = connect(
  mapStateToProps
)(App);