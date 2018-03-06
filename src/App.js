import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        <Note name="Name"/>
      </div>
    );
  }
}

class Note extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {started: true};
        this.change = this.change.bind(this);
    } 
    
    change() {
        this.setState({started: !this.state.started});
    }
    
    render() {
        
        var display = "decoration";
        
        if(this.state.started) {
            display = "decoration";
        }
        else {
            display = "none";
        }
        
        return (
            <div>
                <h1 className = {display} >Hello, {this.props.name}</h1>
                <button className="button" onClick={this.change} />
            </div>
        )
    }
}


export default App;
