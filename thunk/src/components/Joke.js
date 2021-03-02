import React from "react";
import { getJoke } from "../actions";

const Joke = () => {
    return (
        <>
            <h2>Dad says:</h2>
            <button>Get new joke</button>
        </>
    )
}

const mapStateToProps = () => {
    return {
        joke: state.joke,
        error: state.error,
        loading: state.loading
    }
}

const mapDipatchToProps = {getJoke}

export default Joke;