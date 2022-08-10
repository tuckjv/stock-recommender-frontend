import React from 'react';

class UserInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            number: this.props.number,
        }
    }

    render() { 
        return (
            <div>
                Stock {this.state.number}:<br></br>
                <input onChange = {this.props.handleChange(this.props.id)} defaultValue = "" type = "text"></input>
            </div>
        );
    }
}
 
export default UserInput;