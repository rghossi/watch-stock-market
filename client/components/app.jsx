import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import MyNavbar from './navbar';

class App extends Component {
	render() {
		return (
			<div>
				<MyNavbar />
				<h1>Hello world!</h1>
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