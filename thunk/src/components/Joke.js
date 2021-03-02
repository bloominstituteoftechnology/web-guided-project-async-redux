import { map } from "async";
import React from "react";
import { connect } from "react-redux";
import { getJoke } from "../actions";

const Joke = () => {
    return (
        <>
            <h2>Dad says:</h2>
            <button onClick={props.getJoke()}>Get new joke</button>
        </>
    )
}

// Step 3 (again): connect components
const mapStateToProps = (state) => {
    return {
        joke: state.joke,
        error: state.error,
        loading: state.loading
    }
}

const mapDipatchToProps = {getJoke}

export default connect(mapStateToProps,mapDipatchToProps)(Joke);