import React, { Component } from "react";
// import ReactDom from 'react-dom';

import AppRoutes from "./routes/AppRouter";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
          <AppRoutes />
      </div>
    );
  }
}

export default App;
