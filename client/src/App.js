import React, { Component } from "react";
import "./App.css";
import { Title, MyNav } from "./components";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyNav></MyNav>
        <Title></Title>
      </div>
    );
  }
}

export default App;
