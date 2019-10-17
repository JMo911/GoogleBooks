import React, { Component } from "react";
import "./App.css";
import { Title, MyNav, BookSearchForm, BookSearchResultsContainer, BookCards } from "./components";
import { BrowserRouter as Router, Route } from "react-router-dom";
const axios = require('axios');
// import API from "./utils/API";

class App extends Component {

  state = {
    books: [],
    title: ""
  };
  
handleChange = (e) => {
  e.preventDefault();
  this.setState({title: e.target.value});
}

  handleSubmit = (e) => {
    this.setState({books: [],
      title: ""})
    e.preventDefault();
    fetch("/scrape/" + this.state.title).then(response => response.json()).then(response => this.setState({books: response}))
  };

  saveBook = (e, index, title, authors, description, image, link) => {
    e.preventDefault();
    // console.log(index + '\n' + title + '\n' + authors + '\n' + description + '\n' + image + '\n' + link);
    const book = {
      title: title,
      authors: [authors],
      description: description,
      image: image,
      link: link
    }
    // console.log(book);

    // fetch('/api/books', {
    //   method: 'POST', // or 'PUT'
    //   body: book, // data can be `string` or {object}!
    // }).then(response => console.log(response));

    axios.post('/api/books', book)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  }
  

  render() {
    return (
      <Router>
        {/* CONSTANT COMPONENTS */}
        <MyNav></MyNav>
        <Title></Title>

        {/* SEARCH BOOKS ROUTE */}
        <Route path='/search'>
          <BookSearchForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          value={this.state.title}> 
          </BookSearchForm>
          <BookSearchResultsContainer
            containerTitle="Search Results"
            >
              {this.state.books ? (
              this.state.books.map(({ title, authors, description, image, link }, index) =>
              <BookCards
              key={index}
              title={title}
              authors = {authors}
              description = {description}
              image = {image}
              link = {link}
              saveBook = {(e) => this.saveBook(e, index, title, authors, description, image, link)}>
              </BookCards>
              )
              ) : (
                <h3>No Books to display.</h3>
              )}
          </BookSearchResultsContainer>
        </Route>

        {/* SAVED BOOKS ROUTE */}
        <Route exact path='/saved'>
          <BookSearchResultsContainer
            containerTitle="Saved Books"
          ></BookSearchResultsContainer>
        </Route>

      </Router>
    );
  }
}

export default App;
