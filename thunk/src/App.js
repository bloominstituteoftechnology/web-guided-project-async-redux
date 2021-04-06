import React from 'react';
import { connect } from 'react-redux';

import Quotes from './components/Quotes';
import { getQuote } from './actions'

import './styles.css';


function App(props) {
  const handleGetQuote = e =>{
    e.preventDefault();
    props.getQuote();
  }
  return (
    <div className="App">
      <h1>Hello Kanye🎤</h1>
      <Quotes />
      <button onClick={ handleGetQuote }>Get Quote</button>
    </div>
  );
}

export default connect(()=> { return {} }, {getQuote})(App);
