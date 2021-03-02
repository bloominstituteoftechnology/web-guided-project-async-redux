import { statement } from "@babel/template";
import React from "react";

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

export default Joke;