import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// --
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
// --
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import "./index.css";

import UserReducer from "./reduxStore/userReducer";
import MainReducer from "./reduxStore/mainReducer";


const reducers = combineReducers({
  user: UserReducer,
  main: MainReducer
});

const store = createStore(reducers, applyMiddleware(ReduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById("root")
);
