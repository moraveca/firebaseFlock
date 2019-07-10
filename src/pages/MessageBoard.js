import React, { Component } from "react";
import { database } from "../api/firebase/index";
import { db } from "../api/firebase/index";
import { Launcher } from 'react-chat-window';


class MessageBoard extends Component {
    // Setting the component's initial state
    constructor() {
        super();
        this.state = {
            messages: [],
            messageList: [],
            messagesToDisplay: [],
            chattingName: "",
            chattingURL: "",
            chattingUID: "",
            chatWindowIsOpen: false
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


        database.ref("/messages/").on("value", snapshot => {

            const messages = snapshot.val();
            if (!messages) {
                return
            } else {
                // console.log("messages: ", messages);
                const messagesArray = Object.entries(messages);
                // console.log("messagesArray: ", messagesArray);

                const messagesToDisplay = [];

                messagesArray.forEach(message => {
                    console.log("message: ", message);

                    const senderID = message[0];
                    console.log("senderID: ", senderID);

                    var docRef = db.collection("users").doc(senderID);

                    docRef.get().then(doc => {
                        if (doc.exists) {
                            // console.log("Document data:", doc.data());
                            const senderURL = doc.data().pictureURL;

                            const senderFirstName = doc.data().firstName;
                            const senderLastName = doc.data().lastName;
                            const senderName = senderFirstName + " " + senderLastName;
                            console.log("senderName: ", senderName);
                            console.log("senderURL: ", senderURL);
                            const objectifiedMessages = Object.values(message[1]);
                            const lastMessage = objectifiedMessages[(objectifiedMessages.length - 1)].message
                            console.log("last message: ", lastMessage)

                            const messageBoardMessage = {
                                senderUID: senderID,
                                senderName: senderName,
                                senderPicture: senderURL,
                                lastMessage: lastMessage
                            };

                            messagesToDisplay.push(messageBoardMessage);

                            // console.log("messagesToDisplay: ", messagesToDisplay)

                            this.setState({
                                messagesToDisplay: messagesToDisplay
                            });

                            console.log("state.messagesToDisplay: ", this.state.messagesToDisplay)

                        } else {
                            // doc.data() will be undefined in this case
                            console.log("No such document!");
                        }
                    }).catch(error => {
                        console.log("Error getting document:", error);
                    });


                });



                // this.grabMessageSender();

            }
        });
    };

    openChat = event => {
        
        console.log(event.target.attributes);
        let senderPicture = "";
        if (!event.target.attributes.photoURL) {
            senderPicture = ""
        } else {
            senderPicture = event.target.attributes.photoURL.nodeValue;
        };
        console.log("senderPicture: ", senderPicture);    
        const senderName = event.target.name;
        console.log("senderName: ", senderName);
        const chattingUID = event.target.value;
        // console.log("chattingUID: ", chattingUID)

        this.setState({
            chattingName: senderName,
            chattingURL: senderPicture,
            chattingUID: chattingUID
        });

        console.log("state.chattingURL: ", this.state.chattingURL)
        console.log("state.chattingUID: ", this.state.chattingUID)
        console.log("state.chatwindow: ", this.state.chatWindowIsOpen)

        const senderUID = event.target.value;
        // console.log("button value: ", senderUID);
        const userUID = this.props.user.uid;
        // console.log("user uid: ", userUID);

        const query = "/messages/" + userUID + "/" + senderUID;
        // console.log("query: ", query)

        database.ref(query).on("value", snapshot => {

            const messages = snapshot.val();
            // console.log("snapshot: ", messages);

            const chatsToState = [];

            const messagesArray = Object.entries(messages);
            // console.log("messagesArray: ", messagesArray);

            messagesArray.forEach(message => {
                // console.log("message: ", message[1])

                if (message[1].senderID !== this.props.user.uid) {
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

                // console.log("chatsToState: ", chatsToState)
                this.setState({
                    messageList: chatsToState,
                    messages: messagesArray,
                    chatWindowIsOpen: true
                });
            })
        })
    }

    _onMessageWasSent(message) {
        console.log("message: ", message);

        const userUID = this.props.user.uid;
        console.log("userUID: ", userUID);
        const receiverUID = this.state.chattingUID;
        console.log("receiverUID: ", receiverUID);
        let userFirstName = "";
        let userLastName = "";

        const docRef = db.collection("users").doc(userUID)

        docRef.get().then(doc => {
            if (doc.exists) {
                console.log("Document data:", doc.data());
                userFirstName = doc.data().firstName;
                userLastName = doc.data().lastName;
                console.log("userFirstName: ", userLastName);
                console.log("userLastName: ", userFirstName);

                const query = "/messages/" + userUID + "/" + receiverUID;
                console.log("query: ", query);
        
        
                const messageToSend = {
                    message: message.data.text,
                    senderFirstName: userFirstName,
                    senderID: userUID,
                    senderLastName: userLastName
                };

                console.log("messageToSend: ", messageToSend)
        
                // database.ref(query).push()
                database.ref(query).push({
                    message: message.data.text,
                    senderFirstName: userFirstName,
                    senderID: userUID,
                    senderLastName: userLastName
                  }, error => {
                    if (error) {
                      // The write failed...
                    } else {
                      // Data saved successfully!
                    }
                  });
                
        
        
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(error => {
            console.log("Error getting document:", error);
        });






        // this.setState({
        //     messageList: [...this.state.messageList, message]
        // })
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
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });
    };



    closeChat = () => {
        if (!this.state.chatWindowIsOpen) {
            this.setState({
                chatWindowIsOpen: true
            })
        } else {
            this.setState({
                chatWindowIsOpen: false
            })
        }
    }



    render() {
        return (
            <div>
                {this.state.messagesToDisplay.length ? (
                    <div>
                        {this.state.messagesToDisplay.map(message => (
                            <>

                                <h2>
                                    {message.lastMessage} by {message.senderName}
                                </h2>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    value={message.senderUID}
                                    photourl={message.senderPicture}
                                    name={message.senderName}
                                    onClick={this.openChat}
                                >
                                    Chat with {message.senderName}</button>
                            </>
                        ))}

                    </div>
                ) : (
                        <h3>No Results to Display</h3>
                    )}

                <Launcher
                    agentProfile={{
                        teamName: this.state.chattingName,
                        imageUrl: this.state.chattingURL
                    }}
                    onMessageWasSent={this._onMessageWasSent.bind(this)}
                    messageList={this.state.messageList}
                    showEmoji={false}
                    handleClick={this.closeChat}
                    isOpen={this.state.chatWindowIsOpen}
                />

            </div>
        );
    }
}

export default MessageBoard;
