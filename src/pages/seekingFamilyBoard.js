import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


class seekingFamilyBoard extends Component {

    render() {
        return (
            <div>
                <div>
                    <NavBar />

                    <div className="card-body text-center">
                        <h5 className="card-title">Seeking Family Board</h5>
                        <p className="card-text" >
                            <blockquote className="blockquote mb-0">
                                <p>To us, family means putting your arms around each other and being there. –Barbara Bush</p>
                                <footer className="blockquote-footer">To us, family means putting your arms around each other and being there. –Barbara Bush <cite title="Source Title"></cite></footer>
                            </blockquote>
                        </p>
                        <br />

                        <button type="button" className="btn btn-outline-secondary">Return to your profile</button>
                        <button type="button" className="btn btn-outline-secondary">Volunteer Board</button>
                        <br />
                    </div>
                </div>
                <br />
                <br />
                <br />
                {/* // <!--Seeking Family List--> */}
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <div className="card" style={{width: "18rem"}}>
                                <div className="fakeimg">Add Image
                            </div>
                                <div className="card-body">
                                    <h5 className="card-title">"Kid" Name</h5>
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
                                    <h5 className="card-title">"Kid" Name</h5>
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
                                    <h5 className="card-title">"Kid" Name</h5>
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
                                    <h5 className="card-title">"Kid" Name</h5>
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
                                    <h5 className="card-title">"Kid" Name</h5>
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
                                    <h5 className="card-title">"Kid" Name</h5>
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




export default seekingFamilyBoard;