import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { db } from "../api/firebase/index"



class BulletinBoard extends Component {

    state = {
        profiles: []
    };

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

                        {this.state.profiles.length ? (

                            this.state.profiles.map(profile => (

                                <div className="col-sm">
                                    <div className="card" style={{ width: "18rem" }}>
                                        <div className="fakeimg">Add Image here</div>
                                        <div className="card-body">
                                            <h5 className="card-title">{profile.firstName} {profile.lastName}</h5>
                                            <p className="card-text">{profile.about}</p>
                                            <a href="#" className="btn btn-primary">Contact Me</a>
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

                    <Footer />
                </div >
                );
            }
        }
        
        
        
        
        export default BulletinBoard;
        
