import React, { Component, PropTypes } from 'react';
import {Line} from 'react-chartjs-2';

export default class MyChart extends Component {
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
        <Line data={data} options={options} height={100} />
      </div>
    );
  }
}