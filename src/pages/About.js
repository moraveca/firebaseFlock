import React, { Component } from "react";
import Footer from "../components/Footer";




class SignIn extends Component {

    render() {
        return (
            <div>
                <div>
                    <div className="card text-center">
                            <div className="card-body" id="logo-and-blurb">
                            <a className="navbar-brand" href="index.html" id="logo">

                                <img src="Flock-transparent.png" width="90%" height="90%" className="d-inline-block align-top" alt="Flock logo" />
                            </a>
                            <h5 className="card-title"></h5>
                            
                        </div>
                       <h1>Welcome to Flock</h1>
                       <h2>A place to create family and share all the love</h2>
                       <p>Flock is a place where members of the LGBTQI community who have lost or left 
                           their family to come and choose surrogate families to belong to, temporarily or 
                           long term. Our goal is to help connect people in need of family with families or 
                           family members who are willing to open their hearts, share their time and even 
                           their homes. We hope to help reduce rates of depression, suicide, homelessness and 
                           drug abuse by facilitating connection and building community.</p>
                    </div>
                </div>
            <Footer />


            </div >
        );
    }
}

export default SignIn;
