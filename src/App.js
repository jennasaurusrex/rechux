import React, { Component } from 'react';
import './App.css';
import Joke from './Joke'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Joke />
      </div>
    );
  }
}

export default App;
