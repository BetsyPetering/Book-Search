import React, { useEffect, useState } from 'react';
import Jumbotron from '../components/Jumbotron';
import DeleteBtn from '../components/DeleteBtn';
import API from '../utils/API';
import { Col, Row, Container } from '../components/Grid';
import { FormBtn } from '../components/Form';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import './style.css';

function Books() {
  // Setting our component's initial state
  const [books, setBooks] = useState([]);
  const [formObject, setFormObject] = useState({});

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks();
  }, []);

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <Container fluid>
      <Row>
        <Col size='md-2'></Col>
        <Col size='md-6'>
          <Jumbotron>
            <h1>The Wish List</h1>
          </Jumbotron>
        </Col>
      </Row>

      <Row>
        <Col size='md-1'></Col>
        <Col size='md-2'>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>
                <h3>Card Title</h3>
              </Card.Title>
              <Card.Title>
                <h4>Author</h4>
              </Card.Title>
              <Card.Text>Synopsis</Card.Text>
            </Card.Body>
            <ListGroup className='list-group-flush'>
              <ListGroupItem>Title</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link href='#'>Book One</Card.Link>
              <Card.Link href='#'>Book Two</Card.Link>
            </Card.Body>
          </Card>
          <FormBtn
            size='sm'
            disabled={!(formObject.author && formObject.title)}
            onClick={() => {}}
          >
            Delete Book
          </FormBtn>
        </Col>
        <Col size='md-1'></Col>
        <Col size='md-2'>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>
                <h3>Card Title</h3>
              </Card.Title>
              <Card.Title>
                <h4>Author</h4>
              </Card.Title>
              <Card.Text>Synopsis</Card.Text>
            </Card.Body>
            <ListGroup className='list-group-flush'>
              <ListGroupItem>Title</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link href='#'>Book One</Card.Link>
              <Card.Link href='#'>Book Two</Card.Link>
            </Card.Body>
          </Card>
          <FormBtn
            size='sm'
            disabled={!(formObject.author && formObject.title)}
            onClick={() => {}}
          >
            Delete Book
          </FormBtn>
        </Col>
        <Col size='md-1'></Col>
        <Col size='md-2'>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>
                <h3>Card Title</h3>
              </Card.Title>
              <Card.Title>
                <h4>Author</h4>
              </Card.Title>
              <Card.Text>Synopsis</Card.Text>
            </Card.Body>
            <ListGroup className='list-group-flush'>
              <ListGroupItem>Title</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link href='#'>Book One</Card.Link>
              <Card.Link href='#'>Book Two</Card.Link>
            </Card.Body>
          </Card>
          <FormBtn
            size='sm'
            disabled={!(formObject.author && formObject.title)}
            onClick={() => {}}
          >
            Delete Book
          </FormBtn>
        </Col>
      </Row>
    </Container>
  );
}

export default Books;
