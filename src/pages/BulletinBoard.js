import React, { Component } from "react";
import Modal from 'react-modal';

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
            modalIsOpen: false,
            message: "",
            receiver: ""
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

    loadProfiles = () => {

        db.collection("users").limit(10).get().then(querySnapshot => {

            const profileArray = [];

            querySnapshot.forEach(doc => {
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data());
                profileArray.push(doc.data())

            });

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
        this.openModal();
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



                    database.ref("messages/" + receiver + "/" + sender).push({
                        senderID: sender,
                        senderFirstName: senderFirstName,
                        senderLastName: senderLastName,
                        message: message
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
                    <NavBar />

                    <Modal
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
                    </Modal>


                    <div className="jumbotron jumbotron-fluid" id="jumbotron">
                        <aside id="intro-aside">
                            <div className="bg-img card-body text-center">

                                <blockquote className="blockquote mb-0">
                                    To us, family means putting your arms around each other and being there.
                          </blockquote>
                                <footer className="blockquote-footer"><cite title="Source Title">Barbara Bush</cite></footer>

                                <button type="button" className="btn btn-outline-secondary">Volunteer Search</button>&nbsp;&nbsp;
                      <button type="button" className="btn btn-outline-secondary">Friend Search</button>

                                <div className="card-body text-center">
                                    <h5 className="card-title">Volunteer Family Board</h5>
                                    <p className="card-text" >
                                        <p>To us, family means putting your arms about each other and being there. -Barbara Bush</p>
                                    </p>
                                    <br />

                                </div>
                            </div>
                        </aside>
                    </div>

                    <br />
                    <br />
                    <br />
                    {/* // <!--Availble Volunteer List--> */}
                    <div className="container">
                        <div className="row">

                            {this.state.profiles.length ? (


                                this.state.profiles.map(profile => (

                                    <div className="col-sm">
                                        <div className="card" style={{ width: "18rem" }}>
                                            <img className="fakeimg" src={profile.pictureURL} alt="Profile Image" />
                                            <div className="card-body">
                                                <h5 className="card-title">{profile.firstName} {profile.lastName}</h5>
                                                <p className="card-text">{profile.about}</p>
                                                <button
                                                    value={profile.uid}
                                                    // button onClick={this.deleteRow.bind(this, id)}
                                                    // button onClick={(e) => this.deleteRow(id, e)}
                                                    onClick={this.handleButtonClick}
                                                    className="btn btn-primary"
                                                >Contact Me</button>
                                            </div>
                                        </div>
                                    </div>
                                ))

                            ) : (
                                    <h3>No Results to Display</h3>
                                )}
                        </div>
                    </div>


                    <br />
                    <br />
                    <br />

                </div>
            </div>

            <Footer />
            </>
                );

    }
}




export default BulletinBoard;

