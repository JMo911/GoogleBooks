import React, { Component } from "react";
import "./App.css";
import { Title, MyNav, BookSearchForm, BookSearchResultsContainer } from "./components";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        {/* CONSTANT COMPONENTS */}
        <MyNav></MyNav>
        <Title></Title>

        {/* SEARCH BOOKS ROUTE */}
        <Route exact path='/search'>
          <BookSearchForm></BookSearchForm>
          <BookSearchResultsContainer
            containerTitle="Search Results"
          ></BookSearchResultsContainer>
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
