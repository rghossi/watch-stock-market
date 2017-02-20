import React, { Component, PropTypes } from 'react';
import { line as LineChart } from 'zingchart-react';

export default class MyChart extends Component {
  render() {
    const myLineValues = [
      { text : "First Series", values : [0,1,2,2,4,6,7] },
      { text : "Second Series", values : [18,12,7,14,1,19,4] },
      { text : "Third Series", values : [0,1,12,12,4,6,17] },
      { text : "Fourth Series", values : [18,22,17,4,1,9,4] },
      { text : "Fifth Series", values : [4,2,7,3,23,7,2] },
      { text : "Sixth Series", values : [10,6,8,2,6,3,9] },
    ];

    return (
      <div>
        <LineChart id="chart1" height="300" width="100%" series={myLineValues} legend="true" theme="light" title="Hello Line Chart"/>
      </div>
    );
  }
}