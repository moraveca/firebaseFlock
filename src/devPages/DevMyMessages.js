import React, { Component } from "react";
import { database } from "../api/firebase/index";
import { db } from "../api/firebase/index";
import { Launcher } from 'react-chat-window';


class DevMyMessages extends Component {
    // Setting the component's initial state
    constructor() {
        super();
        this.state = {
            messages: [],
            messageList: [],
            senderURL: "",
            senderName: ""
        };
    }


    componentDidMount() {
        this.checkingUser();
    };

    checkingUser = () => {
        if (!this.props.user.uid) {
            // console.log("user: ", this.props.user);
            // console.log("setting timer");
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
                // console.log("messages: ", messages);
                const messagesArray = Object.entries(messages);
                console.log("messagesArray: ", messagesArray);
                const chatsToState = [];

                messagesArray.forEach(message => {
                    console.log("message: ", message);
                    if (message[1].senderID != this.props.user.uid) {
                        const chatToDisplay = {
                            author: "them",
                            type: "text",
                            data: {
                                text: message[1].message
                            }
                        };
                        // console.log("chatToDisplay: ", chatToDisplay);
                        chatsToState.push(chatToDisplay)
                    } else {
                        const chatToDisplay = {
                            author: "me",
                            type: "text",
                            data: {
                                text: message[1].message
                            }
                        };
                        // console.log("chatToDisplay: ", chatToDisplay);
                        chatsToState.push(chatToDisplay)
 
                    }
                });

                // console.log("chatsToState: ", chatsToState)
                this.setState({
                    messageList: chatsToState
                });

                // console.log("this.state.messageList: ", this.state.messageList)

                this.setState({ messages: messagesArray });
            };

            this.grabMessageSender();


        })
    };

    _onMessageWasSent(message) {
        this.setState({
            messageList: [...this.state.messageList, message]
        })
    }

    _sendMessage(text) {
        if (text.length > 0) {
            this.setState({
                messageList: [...this.state.messageList, {
                    author: 'them',
                    type: 'text',
                    data: { text }
                }]
            })
        }
    };

    grabMessageSender = () => {
        const senderID = this.state.messages[0][1].senderID;

        var docRef = db.collection("users").doc(senderID);
        
        docRef.get().then(doc => {
            if (doc.exists) {
                // console.log("Document data:", doc.data());
                const senderURL = doc.data().pictureURL;

                const senderFirstName = doc.data().firstName;
                const senderLastName = doc.data().lastName;
                const senderName = senderFirstName + " " + senderLastName;
                // console.log("senderName: ", senderName);

                this.setState({
                    senderURL: senderURL,
                    senderName: senderName
                });
                // console.log("this.state.picture: ", this.state.senderURL)


            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    }




    render() {
        return (
            <div>
                {this.state.messages.length ? (
                    <div>
                        {this.state.messages.map(post => (
                            <h2>
                                {post[1].message} by {post[1].senderFirstName} {post[1].senderLastName}
                            </h2>
                        ))}

                    </div>
                ) : (
                        <h3>No Results to Display</h3>
                    )}

                <Launcher
                    agentProfile={{
                        teamName: this.state.senderName,
                        imageUrl: this.state.senderURL
                    }}
                    onMessageWasSent={this._onMessageWasSent.bind(this)}
                    messageList={this.state.messageList}
                    showEmoji
                />

            </div>
        );
    }
}

export default DevMyMessages;
