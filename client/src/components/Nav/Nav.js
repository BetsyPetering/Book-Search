import React from 'react';
import { Col, Row, Container } from '../Grid';

function Nav() {
  return (
    <Container fluid>
      <Row>
        <Col size='md-2'></Col>
        <Col size='md-6'>
          <ul class='nav'>
            <li class='nav-item'>
              <a class='nav-link active' href='#'>
                Search
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='#'>
                Wish List
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Nav;
