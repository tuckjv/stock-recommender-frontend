import React from 'react';
import UserInput from "./userInput"
import Output from "./output"

class Inputs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputs: [
                {id: 0, number: "One", value: ""},
                {id: 1, number: "Two", value: ""},
                {id: 2, number: "Three", value: ""},
                {id: 3, number: "Four", value: ""},
                {id: 4, number: "Five", value: ""},
            ],
            reccomend : "",
            notRec: "",
            neutral: "",
            setResponse : 0,
        } //Set the initial state so that each input is empty, each reccomendation group is also empty/
        //setResponse is equal to 0, so the proram will display the initial form
    } //Contstuctor for the main program component

    handleClick = async () => {
        const sleep = ms => new Promise(res => setTimeout(res, ms));
        this.setState({setResponse: 1});
        await sleep('400');
        await fetch(`https://polar-tundra-85946.herokuapp.com/https://stock-backend-2.herokuapp.com/`,{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({
                first: this.state.inputs[0].value,
                second: this.state.inputs[1].value,
                third: this.state.inputs[2].value,
                fourth: this.state.inputs[3].value,
                fifth: this.state.inputs[4].value,
            }),
        }).then(response => response.json())
        .then(responseJson => {
            this.setState({
            reccomend : responseJson.reccomend, notRec : responseJson.notRec, neutral: responseJson.neutral})})
        .then(this.setState({setResponse : 2})); //Make a request to the server, update the recommendation states, update the response state to 2
    }//Handles updating the program after the user submits the form

    handleChange = (id) => e => {
        let inputs = [...this.state.inputs];
        let input = {...inputs[id]};
        input.value = e.target.value;
        inputs[id] = input;
        this.setState({inputs});
    } //Updates the state of the input when the user makes a change in the form

    render() { 
        if (this.state.setResponse === 0) {
            var content = (
            <body id = "body">
                <div className = "formContainer">
                    <h1>What Stocks are You Interested In?</h1>
                    <form onSubmit = {this.handleClick}>
                        {this.state.inputs.map(input => (<UserInput class = "userInput" key = {input.id} id = {input.id} handleChange = {this.handleChange} number = {input.number}></UserInput>))}
                        <input type = "submit" value = "Submit"></input>
                    </form>
                </div>
            </body>);
        } //If the user has not submitted the form, display the form
        else if (this.state.setResponse === 2) {
            if (this.state.reccomend === 'fail') {
                content = (<text>{"Error, please try again!"}</text>);
            } //If the recommendation was a failure, display an error message
            else {
                content = (
                    <div className = "text-center">
                        <Output status = "Reccomend" data = {this.state.reccomend}/>
                        <Output status = "Do Not Reccomend" data = {this.state.notRec}/>
                        <Output status = "Are Neutral Towards" data = {this.state.neutral}/>
                    </div>
                );
            } //If it was a succes, display the results
        } //Display either the results or an error message
        else {
            content = (<text>{"Loading"}</text>)
        } //If the client has not recieved a response yet, display a loading message
        return (<div>{content}</div>);
    }
}
export default Inputs;