import React from 'react';

function Output(props) {
    if (props.data.length !== 0) {
        const stocks = props.data.map((out) => <li className = "list-style: none">{out}</li>);
        return(<div>
            <strong>We {props.status}:</strong>
            <ul>{stocks}</ul>
        </div>);
    } //Display the reccomendation status and whatever stocks fall into that category
    else {
        return null;
    } //If there are no stocks in the particular reccomendation category, then nothing will be displayed
}

export default Output;
