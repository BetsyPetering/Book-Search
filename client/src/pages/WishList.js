import React, { useEffect, useState } from 'react';
import Jumbotron from '../components/Jumbotron';
import DeleteBtn from '../components/DeleteBtn';
import API from '../utils/API';
import { Col, Row, Container } from '../components/Grid';
import Card from 'react-bootstrap/Card';
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
        <Col size='md-3'></Col>
        <Col size='md-8'>
          <Jumbotron>
            <h1>The Wish List</h1>
          </Jumbotron>
        </Col>
      </Row>

      <Row>
        <Col size='md-3'></Col>
        <Col size='md-8'>
          <Card>
            <Card.Body>
              <Card.Title>
                <h3>Book Title</h3>
              </Card.Title>
              <Card.Title>
                <h4>Author</h4>
              </Card.Title>
              <Card.Text>Synopsis</Card.Text>
            </Card.Body>
          </Card>
          <DeleteBtn
            size='lg'
            disabled={!(formObject.author && formObject.title)}
            onClick={() => {}}
          >
            Delete Book
          </DeleteBtn>
        </Col>
      </Row>
    </Container>
  );
}

export default Books;
