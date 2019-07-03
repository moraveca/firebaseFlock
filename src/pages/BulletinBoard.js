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
                        <h5 className="card-title">Volunteer Family Board</h5>
                        <p className="card-text" >
                            <p>To us, family means putting your arms about each other and being there. -Barbara Bush</p>
                        </p>
                        <br />

                        <button type="button" className="btn btn-outline-secondary">Return to your profile</button>
                        &nbsp;&nbsp;&nbsp;
                        <button type="button" className="btn btn-outline-secondary">Seeking Family Board</button>
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
                                    <a href="#" className="btn btn-primary">Contact Me</a>
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
                                    <a href="#" className="btn btn-primary">Contact Me</a>
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
                                    <a href="#" className="btn btn-primary">Contact Me</a>
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
                                    <a href="#" className="btn btn-primary">Contact Me</a>
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
                                    <a href="#" className="btn btn-primary">Contact Me</a>
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
                                    <a href="#" className="btn btn-primary">Contact Me</a>
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

