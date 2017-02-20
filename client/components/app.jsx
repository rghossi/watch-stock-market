import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import MyNavbar from './navbar';
import MyFooter from './footer';
import MyChart from './myChart';
import NewStockForm from './newStockForm';
import { Grid } from 'react-bootstrap';

class App extends Component {
	render() {
		return (
			<div>
				<MyNavbar />
				<Grid>
					<MyChart />
					<NewStockForm />
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