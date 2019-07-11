import React, { Component } from "react";
import Footer from "../components/Footer";




class About extends Component {

    render() {
        return (
            <div>
                <div class="jumbotron jumbotron-fluid" id="resource-jumbo">
                    <div class="container">
                        <div id="logo-box">
                            {/* <a class="navbar-brand" id="logo">
                                <img src="Flock-transparent.png" id="small-logo" alt="Flock logo" />
                            </a> */}
                            <div id="resources-box">
                                <h1>About</h1>
                                <p>A place to create family and share all the love</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="card text-center">
                        <div className="card-body" id="logo-and-blurb">
                            <a className="navbar-brand" href="index.html" id="logo">

                            </a>
                            <h5 className="card-title"></h5>

                        <p>Flock is a place where members of the LGBTQI community who have lost or left
                            their family to come and choose surrogate families to belong to, temporarily or
                            long term. Our goal is to help connect people in need of family with families or
                            family members who are willing to open their hearts, share their time and even
                            their homes. We hope to help reduce rates of depression, suicide, homelessness and
                           drug abuse by facilitating connection and building community.</p>
                           </div>
                    </div>
                </div>
                <Footer />


            </div >
        );
    }
}

export default About;
