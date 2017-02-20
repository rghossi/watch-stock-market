import React, { Component, PropTypes } from 'react';
import { Grid, FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap';

export default class NewStockForm extends Component {
  constructor(props) {
    super(props);
    this.addNewStock = this.addNewStock.bind(this);
  }

  addNewStock(e) {
    e.preventDefault();
    const { dispatch } = this.props
    const stockCode = this.input.value;
    console.log(stockCode);
  }

  render() {
    return (
      <form onSubmit={this.addNewStock}>
        <FormGroup>
          <InputGroup>
            <FormControl inputRef={(input) => this.input = input} type="text" placeholder="Enter stock code" />
            <InputGroup.Button>
              <Button type="submit">Add</Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
      </form>
    );
  }
}