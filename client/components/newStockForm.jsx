import React, { Component, PropTypes } from 'react';
import { Grid, FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap';
import { addStockMarket } from '../actions';
import { connect } from 'react-redux';

class NewStockForm extends Component {
  constructor(props) {
    super(props);
    this.addNewStock = this.addNewStock.bind(this);
  }

  addNewStock(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    const stockCode = this.input.value;
    fetch("/api/isValidCode/" + this.input.value, {credentials: 'same-origin'})
      .then(response => response.json())
      .then(json => {
        if (json.valid) {
          dispatch(addStockMarket(stockCode));
        } else {
          alert("Invalid stock code!");
        }
        this.input.value = '';
      })
    
  }

  render() {
    return (
      <form onSubmit={this.addNewStock}>
        <FormGroup>
          <InputGroup>
            <FormControl inputRef={(input) => this.input = input} type="text" placeholder="Enter stock code" />
            <InputGroup.Button>
              <Button bsStyle="primary" type="submit">Add</Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
      </form>
    );
  }
}

export default connect()(NewStockForm);