import React from 'react';

class UserInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            number: this.props.number,
        }
    } //Constructor which sets the number variable to whatever was passed in through props

    render() { 
        return (
            <div>
                Ticker {this.state.number}:<br></br>
                <input onChange = {this.props.handleChange(this.props.id)} defaultValue = "" type = "text"></input>
            </div>
        );
    } //Displays the ticker number and allows for the user to input a ticker
}
 
export default UserInput;