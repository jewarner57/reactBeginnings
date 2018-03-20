import React, { Component } from 'react';
import Note from './Note';
import Button from './Button';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        
        <Note/>
        
      </div>
    );
  }
}
export default App;

/*





*/