import React, { Component } from "react";
import Modal from 'react-modal';
import { Launcher } from 'react-chat-window';


import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { db } from "../api/firebase/index";
import { database } from "../api/firebase/index";


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')



class BulletinBoard extends Component {

    constructor() {
        super();

        this.state = {
            profiles: [],
            message: "",
            receiver: "",
            messages: [],
            messageList: [],
            messagesToDisplay: [],
            chattingName: "",
            chattingURL: "",
            chattingUID: "",
            chatWindowIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    // state = {
    //     profiles: [],
    //     modalIsOpen: false

    // };

    componentDidMount() {
        this.loadProfiles();
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
        console.log("senderUID: ", senderUID);
        const userUID = this.props.user.uid;
        console.log("useruid: ", userUID);

        // user1 comes alphabetically first
        const unsortedUsers = [senderUID, userUID];
        console.log("unsortedUsers: ", unsortedUsers)
        const sortedUsers = unsortedUsers.sort();
        console.log("sortedUsers: ", sortedUsers)
        //  database.ref("messages/" + user1 +"_" + user2).push({
        // database.ref("messages/" + sortedUsers[0] + "_" + sortedUsers[1]).push({


        const query = "/messages/" + sortedUsers[0] + "_" + sortedUsers[1];
        console.log("query: ", query)

        database.ref(query).on("value", snapshot => {


            const messages = snapshot.val();
            console.log("snapshot: ", messages);

            if (messages) {

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
            } else {

                this.setState({
                    messageList: [],
                    message: [],
                    chatWindowIsOpen: true
                });
            }
            this.setState({
                chatWindowIsOpen: true
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

                // user1 comes alphabetically first
                const unsortedUsers = [userUID, receiverUID];
                console.log("unsortedUsers: ", unsortedUsers)
                const sortedUsers = unsortedUsers.sort();
                console.log("sortedUsers: ", sortedUsers)
                //  database.ref("messages/" + user1 +"_" + user2).push({
                // database.ref("messages/" + sortedUsers[0] + "_" + sortedUsers[1]).push({


                const query = "/messages/" + sortedUsers[0] + "_" + sortedUsers[1];
                console.log("query: ", query)




                const messageToSend = {
                    message: message.data.text,
                    senderFirstName: userFirstName,
                    senderID: userUID,
                    senderLastName: userLastName,
                    time: Date.now(),
                    read: false

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

    loadProfiles = () => {

        db.collection("users").limit(10).get().then(querySnapshot => {

            const profileArray = [];

            const ownSelf = [];

            querySnapshot.forEach(doc => {
                // console.log(doc.id, " => ", doc.data());
                if (doc.id === this.props.user.uid) {
                    ownSelf.push(doc.data())
                } else if (!doc.data().pictureURL) {
                    console.log(doc.data().firstName + " has no picture!");

                    const target = doc.data() ;
                    const source = { pictureURL: "avatar.png" };

                    const returnedTarget = Object.assign(target, source);
                    console.log("returnedTarget: ", returnedTarget)
                    profileArray.push(returnedTarget)

                } else {
                    profileArray.push(doc.data())
                }

            });
            console.log("ownSelf: ", ownSelf)
            console.log("profileArray: ", profileArray);
            this.setState({ profiles: profileArray });
            console.log("this.profiles: ", this.state.profiles)
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


    handleButtonClick = event => {
        console.log("button value: ", event.target.value);
        this.setState({
            receiver: event.target.value
        })
        this.openChat();
    }

    openModal = () => {
        this.setState({ modalIsOpen: true });
    }

    afterOpenModal = () => {
        // references are now sync'd and can be accessed.
        // this.subtitle.style.color = '#f00';
    }

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    }

    handleFormSubmit = event => {

        event.preventDefault();

        const sender = this.props.user.uid;
        const receiver = this.state.receiver;
        const message = this.state.message;
        let senderFirstName = "";
        let senderLastName = "";

        db.collection("users").doc(sender).
            get().then(function (doc) {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    console.log("document data firstname: ", doc.data().firstName)
                    senderFirstName = doc.data().firstName;
                    senderLastName = doc.data().lastName;

                    console.log("sender.uid: ", sender);
                    console.log("sender name: ", senderFirstName);
                    console.log("receiver.uid: ", receiver);
                    console.log("message: ", message);

                    // user1 comes alphabetically first
                    const unsortedUsers = [receiver, sender];
                    console.log("unsortedUsers: ", unsortedUsers)
                    const sortedUsers = unsortedUsers.sort();
                    console.log("sortedUsers: ", sortedUsers)
                    //  database.ref("messages/" + user1 +"_" + user2).push({
                    database.ref("messages/" + sortedUsers[0] + "_" + sortedUsers[1]).push({
                        senderID: sender,
                        senderFirstName: senderFirstName,
                        senderLastName: senderLastName,
                        message: message,
                        time: Date.now(),
                        read: false
                    });

                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch(function (error) {
                console.log("Error getting document:", error);
            });

        this.closeModal();




    }



    render() {
        return (
            <>
                <div>
                    <div>
                        {/* <NavBar /> */}

                        {/* <Modal
                        isOpen={this.state.modalIsOpen}
                        onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
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
                    </Modal> */}


                        <div className="jumbotron jumbotron-fluid" id="jumbotron">
                            <aside id="intro-aside">
                                <div className="bg-img card-body text-center">

                                    <blockquote className="blockquote mb-0">
                                        To us, family means putting your arms around each other and being there.
                                    </blockquote>
                                    <footer className="blockquote-footer"><cite title="Source Title">Barbara Bush</cite></footer>

                                    {/* <button type="button" className="btn btn-outline-secondary">Volunteer Search</button>&nbsp;&nbsp;
                                    <button type="button" className="btn btn-outline-secondary">Friend Search</button> */}

                                    {/* <div className="card-body text-center">
                                        <h5 className="card-title">Volunteer Family Board</h5>
                                        <p className="card-text" >
                                            <p>To us, family means putting your arms about each other and being there. -Barbara Bush</p>
                                        </p>
                                        <br />

                                    </div> */}
                                </div>
                            </aside>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    {/* // <!--Availble Volunteer List--> */}
                    <div className="container-fluid">


                        <div id="myBulletin">
                            <div className="carousel-inner row w-100 mx-auto">




                                {this.state.profiles.length ? (

                                    this.state.profiles.map(profile => (

                                        <div className="col-sm">
                                            <div className="card" style={{ width: "18rem" }}>
                                                <img className="card-img-top" src={profile.pictureURL} alt="Profile Image" />
                                                <div className="card-body">
                                                    <h5 className="card-title">{profile.firstName} {profile.lastName}</h5>
                                                    <p className="card-text">{profile.about}</p>
                                                    <button
                                                        value={profile.uid}
                                                        photourl={profile.pictureURL}
                                                        name={profile.firstName}
                                                        // button onClick={this.deleteRow.bind(this, id)}
                                                        // button onClick={(e) => this.deleteRow(id, e)}
                                                        onClick={this.openChat}
                                                        className="btn btn-sm btn-outline-secondary"
                                                    >Chat with {profile.firstName}</button>
                                                </div>
                                            </div>
                                        </div>

                                    ))
                                ) :
                                    (
                                        <h3>No Results to Display</h3>
                                    )}
                            </div>
                        </div>
                        {/* </div> */}
                    </div>


                    <br />
                    <br />
                    <br />
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
                <Footer />
            </>
        );

    }
}




export default BulletinBoard;

