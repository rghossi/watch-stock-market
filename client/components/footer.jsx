import React, { Component, PropTypes } from 'react';
import { Grid, Row } from 'react-bootstrap';

export default class MyFooter extends Component {
  render() {
    return (
      <footer className="footer">
        <Grid>
          <Row>
          <p className="text-muted">
            Demo SPA to showcase <strong>React</strong>, <strong>Redux</strong>, <strong>Node</strong>, <strong>Express</strong> and <strong>Socket.io</strong>. <a href="https://github.com/rghossi" target='_blank'>@rghossi</a>
          </p>
          </Row>
        </Grid>
      </footer>
    );
  }
}