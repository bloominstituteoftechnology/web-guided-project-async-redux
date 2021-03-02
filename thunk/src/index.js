import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

import Title from "./components/Title";
import { titleReducer } from "./reducers/titleReducer";
import "./styles.css";

// Redux Step 1: create the store
const store = createStore(titleReducer, applyMiddleware(logger));

function App() {
  return (
    <div className="App">
      <Title />
    </div>
  );
}

// Redux step 2: provide the store

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
