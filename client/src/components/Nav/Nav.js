import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Col, Row, Container } from '../Grid';

function NavTabs() {
  const location = useLocation();
  return (
    <Container fluid>
      <Row>
        <Col size='md-2'></Col>
        <Col size='md-6'>
          <ul className='nav'>
            <li className='nav-item'>
              <Link
                to='/'
                className={
                  location.pathname === '/' ? 'nav-link active' : 'nav-link'
                }
              >
                Search
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/WishList'
                className={
                  location.pathname === '/WishList'
                    ? 'nav-link active'
                    : 'nav-link'
                }
              >
                Wish List
              </Link>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default NavTabs;
