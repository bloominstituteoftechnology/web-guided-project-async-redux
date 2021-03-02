import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

import Title from "./components/Title";
import { appReducer } from "./reducers";
import "./styles.css";
import Joke from "./components/Joke";

// Redux Step 1: create the store
const store = createStore(appReducer, applyMiddleware(logger));

function App() {
  return (
    <div className="App">
      <Title />
      <Joke />
    </div>
  );
}

// Redux step 2: provide the store
const rootElement = document.getElementById("root");
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
