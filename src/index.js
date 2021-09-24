import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import allReducers from "./redux/reducer";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';


const store = createStore(allReducers, composeWithDevTools(
  applyMiddleware(thunk)));


ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
      <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);