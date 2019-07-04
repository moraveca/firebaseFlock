import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SignUp from "../components/SignUp";
import { createLogin, signIn, watchCurrentUser, signOut } from "../api/firebase/auth";
import { db } from "../api/firebase/index"



class Homepage extends Component {

    state = {
        email: "",
        password: "",
        passwordCheck: "",
        firstName: "",
        lastName: "",
        selectedOption: "seeking"
    };

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


        createLogin(this.state.email, this.state.password);

        this.setState({
            email: "",
            password: ""
        });

        // this part should set firestore profile, but I think it's going
        //  too early, or before a user is set, and is breaking
        // db.collection("users").doc(this.props.user.uid).set({
        //     uid: this.props.user.uid,
        //     email: this.props.user.email,
        //     firstName: this.state.firstName,
        //     lastName: this.state.lastName,
        //     selectedOption: this.state.selectedOption,
        //     about: ""
        // })
        // .then(function() {
        //     console.log("Document successfully written!");
        // })
        // .catch(function(error) {
        //     console.error("Error adding document: ", error);
        // });

    };

    //   clickedSignOut = event => {
    //       event.preventDefault();
    //       signOut();
    //   }




    render() {
        return (
            <div>
                <div>
                    <div className="card text-center">
                        <NavBar />
                        <div className="card-body" id="logo-and-blurb">
                            <a className="navbar-brand" href="index.html" id="logo">

                                <img src="Flock-transparent.png" width="90%" height="90%" className="d-inline-block align-top" alt="Flock logo" />
                            </a>
                            <h5 className="card-title"></h5>
                            <p className="card-text">An app that links volunteer family and those seeking family.</p>
                        </div>
                        <div className="card" id="login-box">
                            <div className="card-body">
                                <p className="card-title"><strong>Already a member? Log in here.</strong></p>
                                <div id="email-header">Email address</div>
                                <input type="text" id="email" className="box" />
                                <div id="password-header">Password</div>
                                <input type="text" id="password" className="box" />
                                <div id="enter-box">
                                    <a href="#" className="btn btn-primary">Enter</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                                    <p className="change_link">
                                        Already a member ?
                    <a href="#tologin" className="to_register"> Go and log in </a>
                                    </p>
                                </form>
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

