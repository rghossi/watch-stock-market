import React, { Component, PropTypes } from 'react';
import {Line} from 'react-chartjs-2';

export default class MyChart extends Component {
  shouldComponentUpdate(nextProps) {
    return (this.props.datasets.length !== nextProps.datasets.length);
  }

  render() {
    const data = {
      datasets: this.props.datasets
    };
    const options = {
      responsive: true,
      scales: {
        xAxes: [{
          type: 'time',
          time: {
            unit: 'month'
          }
        }]
      }
    }

    return (
      <div>
        <Line ref={(lineChart) => this.lineChart = lineChart} data={data} options={options} height={100} redraw/>
      </div>
    );
  }
}