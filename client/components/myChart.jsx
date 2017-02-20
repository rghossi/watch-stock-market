import React, { Component, PropTypes } from 'react';
import {Line} from 'react-chartjs-2';

export default class MyChart extends Component {
  render() {
    const data = {
      datasets: [
        {
          label: 'My First dataset',
          fill: false,
          lineTension: 0.1,
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
    };

    const options = {
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
        <Line data={data} options={options}/>
      </div>
    );
  }
}