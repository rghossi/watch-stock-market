import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import MyNavbar from './navbar';
import MyFooter from './footer';

class App extends Component {
	render() {
		return (
			<div>
				<MyNavbar />
				<h1>Hello world!</h1>
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