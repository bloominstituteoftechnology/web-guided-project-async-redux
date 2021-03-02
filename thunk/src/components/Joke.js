import React, { useEffect } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { getJoke } from "../actions";

const Joke = (props) => {
    const dispatch = useDispatch();
    const { joke, loading } = useSelector((state) => state);
    useEffect(() => {
        // run api call async action when the component mounts
        getJoke(dispatch);
    }, [getJoke]);

    if (loading) {
        return <><h2>Loading...</h2></>;
    }

    return (
        <>
            <h2>Dad says: {joke}</h2>
            <button onClick={() => getJoke(dispatch)}>Get new joke</button>
        </>
    )
}

export default Joke;