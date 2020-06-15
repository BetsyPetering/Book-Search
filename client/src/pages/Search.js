import React, { useEffect, useState } from 'react';
import Jumbotron from '../components/Jumbotron';
import SaveBtn from '../components/SaveBtn';
import API from '../utils/API';
import { Col, Row, Container } from '../components/Grid';
import { List, ListItem } from '../components/List';
import { Input, TextArea, FormBtn } from '../components/Form';

function Search() {
  // Setting our component's initial state
  const [books, setBooks] = useState([]);
  const [formObject, setFormObject] = useState({});

  // Load all books and store them with setBooks
  useEffect(() => {
    handleFormSubmit();
  }, []);

  // Loads all books and sets them to books
  function handleFormSubmit() {
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
            <h1>Find Books Search?</h1>
            <h2>Search Returns Up to 15 Books</h2>
          </Jumbotron>
          <form>
            <Input
              onChange={() => {}}
              name='searchOn'
              placeholder='Search for:'
            />
            <FormBtn disabled={!formObject.searchOn} onClick={handleFormSubmit}>
              Run Search
            </FormBtn>
          </form>
        </Col>
      </Row>
      <Row>
        <Col size='md-2'></Col>
        <Col size='md-6'>
          <h4>Books Found:</h4>
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
              Search
            </FormBtn>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default Search;
