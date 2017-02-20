import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import MyNavbar from './navbar';
import MyFooter from './footer';
import MyChart from './myChart';
import NewStockForm from './newStockForm';
import { Grid, Row } from 'react-bootstrap';
import fetch from 'isomorphic-fetch';

class App extends Component {
	constructor() {
		super();
		this.state = {
			datasets: []
		}
	}

	getStockmarkets() {
		const {stockMarkets} = this.props;
		fetch("/api/stockmarkets", {credentials: 'same-origin'})
      .then(response => response.json())
      .then(json => {
			  this.setState({datasets: json.datasets});
			})
	}

	componentDidMount() {
		this.getStockmarkets();
	}

	render() {
		return (
			<div>
				<MyNavbar />
				<Grid>
					<NewStockForm />
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
  mapStateToProps,
  actions
)(App);