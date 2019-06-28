import React, { Component } from "react";
import { watchCurrentUser } from "../../api/firebase/auth";
import { database } from "../../api/firebase/index";

class Chat extends Component {
    // Setting the component's initial state
    state = {
        user: {},
        message: ""
    };

    componentDidMount() {
        watchCurrentUser((user) => {
            this.setState({
                user
            })
        });
    };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;

        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();

        console.log("user: ", this.state.user.email);
        console.log("message: ", this.state.message)

        database.ref("messages/").set({
            user: this.state.user.email,
            message: this.state.message
        })

    
    };

    




    render() {
        return (
            <div>
                <form>
                    <input
                        value={this.state.message}
                        name="message"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Write message here..."
                    />
                
                    <button onClick={this.handleFormSubmit}>Send message!</button>
                </form>
            </div>
        );
    }
}

export default Chat;
