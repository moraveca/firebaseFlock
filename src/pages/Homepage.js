import React, { Component } from "react";
import Modal from 'react-modal';

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SignUp from "../components/SignUp";
import { createLogin, signIn, watchCurrentUser, signOut } from "../api/firebase/auth";
import { db } from "../api/firebase/index";

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

Modal.setAppElement('#root')



class Homepage extends Component {

    constructor() {
        super();

        this.state = {
            email: "",
            password: "",
            passwordCheck: "",
            firstName: "",
            lastName: "",
            selectedOption: "seeking",
            modalIsOpen: false,
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    };

    openModal = () => {
        console.log("open modal")
        this.setState({ modalIsOpen: true });
    }

    afterOpenModal = () => {
        // references are now sync'd and can be accessed.
        // this.subtitle.style.color = '#f00';
    }

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;

        if (name === "password") {
            value = value.substring(0, 15);
        }
        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    handleOptionChange = event => {
        this.setState({
            selectedOption: event.target.value
        });
    };

    handleSignIn = event => {
        event.preventDefault();
        signIn(this.state.email, this.state.password)

    }

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        if (this.state.password != this.state.passwordCheck) {
            return alert("Your passwords don't match...")
        }

        // if (!this.state.email) {
        //     return alert("Fill out your email please!");
        // } else if (this.state.password.length < 6) {
        //     return alert("Choose a more secure password");
        // }

        console.log("email: ", this.state.email);
        console.log("firstName: ", this.state.firstName);
        console.log("lastName: ", this.state.lastName);
        console.log("selectedOption: ", this.state.selectedOption);

        this.logInFirst(this.thenSetProfile);

        this.setState({
            email: "",
            password: ""
        });


    };

    handleButtonClick = event => {
        // event.preventDefault();
        this.openModal();
    }

    //   clickedSignOut = event => {
    //       event.preventDefault();
    //       signOut();
    //   }
    logInFirst = cb => {
        createLogin(this.state.email, this.state.password);
        cb();
    }

    thenSetProfile = () => {
        if (!this.props.user.uid) {
            console.log("setting timer");
            setTimeout(this.thenSetProfile, 500)

        } else {

            const user = this.props.user;

            user.updateProfile({
                displayName: this.state.firstName
            }).then(() => {
                if (user != null) {
                    user.providerData.forEach(profile => {
                        console.log("Sign-in provider: " + profile.providerId);
                        console.log("  Provider-specific UID: " + profile.uid);
                        console.log("  Name: " + profile.displayName);
                        console.log("  Email: " + profile.email);
                        console.log("  Photo URL: " + profile.photoURL);
                    });
                }
                // Update successful.
            }).catch(function (error) {
                // An error happened.
            });



            console.log("this.props.user: ", user)

            db.collection("users").doc(user.uid).set({
                uid: this.props.user.uid,
                email: this.props.user.email,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                selectedOption: this.state.selectedOption,
                about: ""
            })
                .then(function () {
                    console.log("Document successfully written!");
                })
                .catch(function (error) {
                    console.error("Error adding document: ", error);
                });
        }

    }




    render() {
        return (
            <div>
                {/* <NavBar /> */}

                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >

                    <div className="form_wrapper">
                        <div className="form_container">
                            <div className="title_container">
                                <h2> Registration Form </h2>
                            </div>
                            <div className="row clearfix">
                                <div className="">

                                    {/* //   <input
                            //   value={this.state.email}
                            //   name="email"
                            //   onChange={this.handleInputChange}
                            //   type="text"
                            //   placeholder="Email"
                            // /> */}

                                    <form>
                                        <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
                                            <input value={this.state.email}
                                                onChange={this.handleInputChange}
                                                type="email"
                                                name="email"
                                                placeholder="Email"
                                                required />
                                        </div>
                                        <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                                            <input value={this.state.password}
                                                onChange={this.handleInputChange}
                                                type="password"
                                                name="password"
                                                placeholder="Password"
                                                required />
                                        </div>
                                        <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                                            <input value={this.state.passwordCheck}
                                                onChange={this.handleInputChange}
                                                type="password"
                                                name="passwordCheck"
                                                placeholder="Re-type Password"
                                                required />
                                        </div>
                                        <div className="row clearfix">
                                            <div className="col_half">
                                                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                                                    <input value={this.state.firstName}
                                                        onChange={this.handleInputChange}
                                                        type="text"
                                                        name="firstName"
                                                        placeholder="First Name" />
                                                </div>
                                            </div>
                                            <div className="col_half">
                                                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                                                    <input value={this.state.lastName}
                                                        onChange={this.handleInputChange}
                                                        type="text"
                                                        name="lastName"
                                                        placeholder="Last Name"
                                                        required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input_field radio_option">
                                            <h3>Please choose one</h3>
                                            <input
                                                type="radio"
                                                name="radiogroup1"
                                                value="seeking"
                                                checked={this.state.selectedOption === "seeking"}
                                                onChange={this.handleOptionChange}
                                                id="rd1" />
                                            <label htmlFor="rd1">Seeking Family</label>
                                            <input
                                                type="radio"
                                                name="radiogroup1"
                                                value="volunteering"
                                                checked={this.state.selectedOption === "volunteering"}
                                                onChange={this.handleOptionChange}
                                                id="rd2" />
                                            <label htmlFor="rd2">Volunteer Family</label>
                                        </div>

                                        <input
                                            className="button"
                                            type="submit"
                                            onClick={this.handleFormSubmit}
                                            value="Register" />
                                    </form>
                                    <p className="change_link">
                                        Already a member ?
                                <a href="#" onClick={this.handleButtonClick} className="to_register"> Go and log in </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>


                <div>
                    <div>
                        <div className="card text-center">
                            <br></br>
                            <p className="lead">An app that links volunteer family and those seeking family</p>
                            <div className="bg-img">


                            </div>
                            <div className="jumbotron">
                                <div className="card" id="login-box">
                                    <div className="card-body">
                                        <button
                                            onClick={this.openModal}
                                            href="#"
                                            className="btn btn-primary">Sign Up Here!</button>
                                        <br />
                                        <br />
                                        <form>
                                            <p className="card-title"><strong>Already a member? Log in here.</strong></p>
                                            <div id="email-header">Email address</div>                                            
                                            <input 
                                                value={this.state.email}
                                                onChange={this.handleInputChange}
                                                type="email"
                                                name="email"
                                                id="email"
                                                className="box" />
                                            <br>
                                            </br>
                                            <div id="password-header">Password</div>
                                            <input
                                                value={this.state.password}
                                                onChange={this.handleInputChange}
                                                type="password"
                                                name="password"
                                                id="password"
                                                className="box" />
                                            <br>
                                            </br>
                                            <div id="enter-box">
                                                <br>
                                                </br>
                                                <button
                                                    onClick={this.handleSignIn}
                                                    href="#"
                                                    className="btn btn-sm btn-outline-secondary">Enter</button>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div >
        );
    }
}



export default Homepage;

