import React, { Component, PropTypes } from 'react';
import { Col, Button } from 'react-bootstrap';

export default class StockPreview extends Component {
  render() {
  	const { stockMarket, removeStock } = this.props;
    return (
      <Col xs={3} md={1}>
        <h3>{stockMarket}</h3>
        <p>
          <Button onClick={() => removeStock(stockMarket)} bsStyle="danger">Remove</Button>
        </p>
    	</Col>
    );
  }
}