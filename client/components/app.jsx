import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class App extends Component {

	render() {
		return (
			<div>
				<h1>Hello world!</h1>
				<p>{new Date(this.props.from).getFullYear()}</p>
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