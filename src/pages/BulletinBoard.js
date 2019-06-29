import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


class BulletinBoard extends Component {

    render() {
        return (
            <div>
                <div>
                    <NavBar />

                    <div className="card-body text-center">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text" >
                            <blockquote className="blockquote mb-0">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                            </blockquote>
                        </p>
                        <br />

                        <button type="button" className="btn btn-outline-secondary">Volunteer Family Members</button>
                        <button type="button" className="btn btn-outline-secondary">Friend Search</button>
                        <br />
                    </div>
                </div>
                <br />
                <br />
                <br />
                {/* // <!--Availble Volunteer List--> */}
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <div className="card" style={{width: "18rem"}}>
                                <div className="fakeimg">Add Image
                            </div>
                                <div className="card-body">
                                    <h5 className="card-title">Volunteer Name</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Connect with Family Member</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card" style={{width: "18rem;"}}>
                                <div className="fakeimg">Add Image
                            </div>
                                <div className="card-body">
                                    <h5 className="card-title">Volunteer Name</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Connect with Family Member</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card" style={{width: "18rem;"}}>
                                <div className="fakeimg">Add Image
                            </div>
                                <div className="card-body">
                                    <h5 className="card-title">Volunteer Name</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Connect with Family Member</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <br />
                <br />
                <br />

                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <div className="card" style={{width: "18rem;"}}>
                                <div className="fakeimg">Add Image
                              </div>
                                <div className="card-body">
                                    <h5 className="card-title">Volunteer Name</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Connect with Family Member</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card" style={{width: "18rem;"}}>
                                <div className="fakeimg">Add Image
                              </div>
                                <div className="card-body">
                                    <h5 className="card-title">Volunteer Name</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Connect with Family Member</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card" style={{width: "18rem;"}}>
                                <div className="fakeimg">Add Image
                              </div>
                                <div className="card-body">
                                    <h5 className="card-title">Volunteer Name</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Connect with Family Member</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <br />
                <br />
                <br />
            
                <Footer />
            </div >
        );
    }
}




export default BulletinBoard;

