import React from 'react';
import './style.css';
import { Container } from 'reactstrap';

const BookSearchResultsContainer = (props) => {
  return (
    <Container id='booksearchresultscontainer'>
      <h1>{props.containerTitle}</h1>
      {props.children}
    </Container>
  );
}

export default BookSearchResultsContainer;