import React from 'react';
import './style.css';
import { Container, Row, Col } from 'reactstrap';

const BookSearchResultsContainer = (props) => {
  return (
    <Container id='booksearchresultscontainer'>
      <h1>Results</h1>
      {props.children}
    </Container>
  );
}

export default BookSearchResultsContainer;