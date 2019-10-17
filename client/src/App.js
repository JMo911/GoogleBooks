import React, { Component } from "react";
import "./App.css";
import { Title, MyNav, BookSearchForm, BookSearchResultsContainer, BookCards } from "./components";
import { BrowserRouter as Router, Route } from "react-router-dom";
const axios = require('axios');
// import API from "./utils/API";

class App extends Component {
  state = {
    books: [],
    savedBooks: [],
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

  saveBook = (e, title, authors, description, image, link) => {
    e.preventDefault();
    const book = {
      title: title,
      authors: [authors],
      description: description,
      image: image,
      link: link
    }

    axios.post('/api/books', book)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  componentDidMount() {
      axios.get('/api/books')
      .then( response => {
        // handle success
        const dbBooks = response.data;
        const dbStateBooks = [];
        dbBooks.forEach(e => {
          dbStateBooks.push(e);
        });
        // console.log(dbStateBooks);
        this.setState({ savedBooks: dbStateBooks});
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
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
                <h3>No books to display.</h3>
              )}
          </BookSearchResultsContainer>
        </Route>

        {/* SAVED BOOKS ROUTE */}
        <Route exact path='/saved'>
          {/* {this.retrieveSavedBooks()} */}
          <BookSearchResultsContainer
            containerTitle="Saved Books">
                          {this.state.savedBooks ? (
              this.state.savedBooks.map(({ title, authors, description, image, link }, index) =>
              <BookCards
              key={index}
              title={title}
              authors = {authors}
              description = {description}
              image = {image}
              link = {link}>
              </BookCards>
              )
              ) : (
                <h3>No saved books to display.</h3>
              )}
          </BookSearchResultsContainer>
        </Route>

      </Router>
    );
  }
}

export default App;
