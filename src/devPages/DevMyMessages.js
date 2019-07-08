import React, { Component } from "react";
import { database } from "../api/firebase/index";


class DevMyMessages extends Component {
    // Setting the component's initial state
    state = {
        messages: [],
    };

    componentDidMount() {
        this.checkingUser();

    };

    checkingUser = () => {
        if (!this.props.user.uid) {
            console.log("user: ", this.props.user);
            console.log("setting timer");
            setTimeout(this.checkingUser, 500)
        } else {
            this.loadMessages()
        }
    };

    loadMessages = () => {

        console.log(this.props.user);

        database.ref("/messages/" + this.props.user.uid).on("value", snapshot => {

            const messages = snapshot.val();
            if (!messages) {
                return
            } else {

            console.log("messages: ", messages);
            const messagesArray = Object.entries(messages);
            console.log("messagesArray: ", messagesArray);

            this.setState({ messages: messagesArray });
            }

        })
    }




    render() {
        return (
            <div>
                {this.state.messages.length ? (
                    <list>
                        {this.state.messages.map(post => (
                            <h2>
                                {post[1].message} by {post[1].senderFirstName} {post[1].senderLastName}
                            </h2>
                        ))}

                    </list>
                ) : (
                        <h3>No Results to Display</h3>
                    )}

            </div>
        );
    }
}

export default DevMyMessages;
