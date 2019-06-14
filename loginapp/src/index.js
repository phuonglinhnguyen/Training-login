import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// --
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
// --
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
import "./index.css";
import logger from "redux-logger";
import UserReducer from "./reduxStore/userReducer";
import { composeWithDevTools } from "redux-devtools-extension";
// import { ConnectedRouter } from "connected-react-router";
// import configureStore, { history } from "./reduxStore/configureStore";
// import { Route, Switch } from "react-router"; // react-router v4/v5

const reducers = combineReducers({
  user: UserReducer
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(ReduxThunk, logger))
);

ReactDOM.render(
  <Provider store={store}>
    {/* <ConnectedRouter history={history}> */}
      <BrowserRouter>
        <App />
        {/* <Switch>
          <Route exact path="/" render={() => (<div>Match</div>)} />
          <Route render={() => (<div>Miss</div>)} />
        </Switch> */}
      </BrowserRouter>
    {/* </ConnectedRouter> */}
  </Provider>,
  document.getElementById("root")
);
