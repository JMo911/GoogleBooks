import React, { Component } from "react";
import "./App.css";
import { Title, MyNav, BookSearchForm, BookSearchResultsContainer } from "./components";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyNav></MyNav>
        <Title></Title>
        <BookSearchForm></BookSearchForm>
        <BookSearchResultsContainer></BookSearchResultsContainer>
      </div>
    );
  }
}

export default App;
