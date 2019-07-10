import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


class BulletinBoard extends Component {

    render() {
        return (
            <div>
                <div>
                    <NavBar />

                    <div className="jumbotron jumbotron-fluid" id="jumbotron">
        <aside id="intro-aside">
            <div className="bg-img card-body text-center">
                      
                      <blockquote className="blockquote mb-0">
                        To us, family means putting your arms around each other and being there.
                          </blockquote>
                          <footer className="blockquote-footer"><cite title="Source Title">Barbara Bush</cite></footer>
                 
                          <button type="button" className="btn btn-outline-secondary">Volunteer Search</button>&nbsp;&nbsp;
                      <button type="button" className="btn btn-outline-secondary">Friend Search</button>

                    </div>
         </aside>
    </div>
       </div>
                    
                <br />
                <br />
                <br />
                {/* // <!--Availble Volunteer List--> */}
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <div className="card" style={{width: "18rem;"}}>
                                <div className="fakeimg">Add Image
                            </div>
                                <div className="card-body">
                                    <h5 className="card-title">Volunteer Name</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                       
                                        <a href="#" class="btn btn-outline-dark">Contact Me</a>
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
                                    <a href="#" class="btn btn-outline-dark">Contact Me</a>
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
                                    <a href="#" class="btn btn-outline-dark">Contact Me</a>
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
                                    <a href="#" class="btn btn-outline-dark">Contact Me</a>
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
                                    <a href="#" class="btn btn-outline-dark">Contact Me</a>
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
                                    <a href="#" class="btn btn-outline-dark">Contact Me</a>
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

