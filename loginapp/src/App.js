import React, { Component } from 'react';
// import ReactDom from 'react-dom';
import logo from './logo.svg';
// import Users from './components/usersComponents/userComponents';
// import Login from './components/loginComponents/login';
import AppRoutes from './routes/AppRouter';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
        </div>
        <div className="App-intro">
          {/* <Users /> */}
          {/* <Login /> */}
          <AppRoutes />
        </div>
      </div>
    );
  }
}

export default App;
