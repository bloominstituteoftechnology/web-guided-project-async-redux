import React from "react";
import ReactDOM from "react-dom";

import Title from "./components/Title";
import "./styles.css";

// Redux Step 1: create the store


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
