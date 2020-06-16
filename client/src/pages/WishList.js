import React, { useEffect, useState } from 'react';
import Jumbotron from '../components/Jumbotron';
import DeleteBtn from '../components/DeleteBtn';
import API from '../utils/API';
import { Col, Row, Container } from '../components/Grid';
import { Input, TextArea, FormBtn } from '../components/Form';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

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
          <form>
            <Input
              onChange={() => {}}
              name='title'
              placeholder='Title (required)'
            />
            <Input
              onChange={() => {}}
              name='author'
              placeholder='Author (required)'
            />
            <TextArea
              onChange={() => {}}
              name='synopsis'
              placeholder='Synopsis (Optional)'
            />
            <FormBtn
              disabled={!(formObject.author && formObject.title)}
              onClick={() => {}}
            >
              Delete Book
            </FormBtn>
          </form>
        </Col>
      </Row>

      <Row>
        <Col size='md-1'></Col>
        <Col size='md-8'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' src='holder.js/100px180?text=Image cap' />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup className='list-group-flush'>
              <ListGroupItem>Cras justo odio</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link href='#'>Card Link</Card.Link>
              <Card.Link href='#'>Another Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Books;
