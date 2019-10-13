import React, { Component } from "react";
import "./App.css";
import { Title, MyNav, BookSearchForm, BookSearchResultsContainer, BookCards } from "./components";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import API from "./utils/API";

class App extends Component {

  state = {
    books: []
  };
  


  handleSubmit = (e) => {
    e.preventDefault();
    fetch("/scrape").then(response => response.json()).then(response => this.setState({books: response}))
  };

  render() {
    return (
      <Router>
        {/* CONSTANT COMPONENTS */}
        <MyNav></MyNav>
        <Title></Title>

        {/* SEARCH BOOKS ROUTE */}
        <Route exact path='/search'>
          <BookSearchForm
          onSubmit={this.handleSubmit}> 
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
              saveBook = {(() => this.saveBook())}>
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
