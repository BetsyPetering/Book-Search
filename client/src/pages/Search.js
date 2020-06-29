import React, { useEffect, useState } from 'react';
import Jumbotron from '../components/Jumbotron';
import API from '../utils/API';
import { Col, Row, Container } from '../components/Grid';
import { Input, TextArea, FormBtn } from '../components/Form';
import {} from '../components/Result';

function Search() {
  // Setting our component's initial state
  const [found, setBooks] = useState([]);
  const [parameter, setParameter] = useState({});

  // Load all books and store them with setBooks
  useEffect(() => {
    handleSearchRequest();
  }, []);

  // Loads all books and sets them to books
  function handleSearchRequest() {
    API.getBooks(parameter)
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }

  function handleSearchData(event) {
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
              onChange={handleSearchData}
              name='searchOn'
              placeholder='Search for:'
            />
            <FormBtn onClick={handleSearchRequest}>Run Search</FormBtn>
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
          <form></form>
        </Col>
        <Col size='md-1'></Col>
        <Col size='md-2'>
          <form></form>
        </Col>
        <Col size='md-1'></Col>
        <Col size='md-2'>
          <form></form>
        </Col>
      </Row>
    </Container>
  );
}

export default Search;

// disabled={!formObject.searchOn}
