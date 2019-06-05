import React, { Component } from 'react';
import logo from './logo.svg';
import Users from './components/usersComponents/userComponents';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
        </div>
        <div className="App-intro">
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
