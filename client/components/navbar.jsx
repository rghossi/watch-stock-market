import React, { Component, PropTypes } from 'react';
import { Navbar } from 'react-bootstrap';

export default class MyNavbar extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            Watch Stocket Markets
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    );
  }
}