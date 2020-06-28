import React, { useEffect, useState } from 'react';
import Jumbotron from '../components/Jumbotron';
import API from '../utils/API';
import { Col, Row, Container } from '../components/Grid';
import { Input, TextArea, FormBtn } from '../components/Form';

function Search() {
  // Setting our component's initial state
  const [found, setBooks] = useState([]);
  const [formObject, setFormObject] = useState({});
  const [parameter, setParameter] = useState({});

  // Load all books and store them with setBooks
  useEffect(() => {
    handleFormSubmit();
  }, []);

  // Loads all books and sets them to books
  function handleFormSubmit() {
    console.log("I'm in the handleFormSubmit, Search.js");
    console.log(parameter);
    API.getBooks(parameter)
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }

  function handleInputChange(event) {
    setParameter(event.target.value);
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
              onChange={handleInputChange}
              name='searchOn'
              placeholder='Search for:'
            />
            <FormBtn onClick={handleFormSubmit}>Run Search</FormBtn>
          </form>
        </Col>
      </Row>
      <Row>
        <Col size='md-2'></Col>
        <Col size='md-6'>
          <h4>Books Found:</h4>
        </Col>
      </Row>
      <Row>
        <Col size='md-1'></Col>
        <Col size='md-2'>
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
          </form>
        </Col>
        <Col size='md-1'></Col>
        <Col size='md-2'>
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
          </form>
        </Col>
        <Col size='md-1'></Col>
        <Col size='md-2'>
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
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default Search;

// disabled={!formObject.searchOn}
