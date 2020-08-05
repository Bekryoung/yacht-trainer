import React, { Component } from 'react';
import './App.css';
import Game from './Components/game'

class App extends Component {
  render() {
    const basic_div = {
      border: '3px solid black',
      margin: '3px'
    }
    return (
      <div className="App">
        <div style={basic_div}>yacht-trainer</div>
        <Game />
      </div>
    );
  }
}

export default App;
