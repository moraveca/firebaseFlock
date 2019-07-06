import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";




class SignIn extends Component {

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
                                <p className="card-title"><strong>Log in here</strong></p>
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
            <Footer />


            </div >
        );
    }
}

export default SignIn;
