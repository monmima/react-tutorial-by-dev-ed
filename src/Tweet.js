import React from "react";
import "./App.css";

function Tweet({name, message}) {
    return (
        <div className="tweet">
            <h4>{name}</h4>
            <p>{message}</p>
            <h5>Number of likes</h5>
        </div>
    ); 
}

export default Tweet;