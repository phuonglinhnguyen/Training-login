import React, { Component } from "react";
// import ReactDom from 'react-dom';

import AppRoutes from "./routes/AppRouter";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header" />
        <div className="App-intro">
          <AppRoutes />
        </div>
      </div>
    );
  }
}

export default App;
