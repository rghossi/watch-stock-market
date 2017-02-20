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
			datasets: [
        {
          label: 'My First dataset',
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
          data: [{
            x: new Date(2016, 10, 10),
            y: 10
          },{
            x: new Date(2016, 11, 10),
            y: 15
          },{
            x: new Date(2016, 12, 10),
            y: 20
          },{
            x: new Date(2017, 1, 10),
            y: 15
          },{
            x: new Date(2017, 2, 10),
            y: 25
          }]
        }
      ]
		}
	}

	getStockmarkets() {
		const {stockMarkets} = this.props;
		fetch("/api/getStockmarkets", {credentials: 'same-origin'})
      .then(response => response.json())
      .then(json => {
			  if (err) throw err;
			  let newDatasets = this.state.datasets.slice(0);
			  let data = json.map((q) => {
			  	return {
	          x: new Date(q.date),
	          y: q.open
	        }
			  })
			  newDatasets.push({
	        label: json[0].symbol,
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
	      })
			})
	}

	componentDidMount() {
		// this.getStockmarkets();
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