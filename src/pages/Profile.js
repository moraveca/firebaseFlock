import React, { Component } from "react";
import { db } from "../api/firebase/index"

import NavBar from "../components/NavBar";
import DevLogIn from "../devComponents/DevLogIn";
import ImageEditor from "../components/ImageEditor";
import ImageUploader from 'react-images-upload';
import Footer from "../components/Footer";



class Profile extends Component {


    constructor(props) {
        super(props);
         this.state = { 
            pictures: [],
            aboutFromFirebase: "",
            about: "",
         };
    }

    componentDidMount() {
      this.checkingUser()
      // this.loadAbout();
  };

  checkingUser = () => {
    if (!this.props.user.uid) {
    console.log("user: ", this.props.user);
    console.log("setting timer");
    setTimeout(this.checkingUser, 500)
    } else {
      this.loadAbout()
    }

  }

  loadAbout = () => {

    db.collection("users").doc(this.props.user.uid)
    .onSnapshot(doc => {
        console.log("Current data: ", doc.data());
        this.setState({
          aboutFromFirebase: doc.data().about
        });
        console.log("this.state.aboutFromFirebase: ", this.state.aboutFromFirebase)
    });
  };

    // this is for pic upload
    onDrop = picture => this.setState({
            pictures: this.state.pictures.concat(picture),
        });



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

    handleFormSubmit = event => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      event.preventDefault();
      
      db.collection("users").doc(this.props.user.uid).update({
          about: this.state.about
      })
      .then(function() {
          console.log("Document successfully written!");
      })
      .catch(function(error) {
          console.error("Error adding document: ", error);
      });

      this.setState({
          firstName: "",
          lastName: "",
          location: "",
          about: "",
            });

  };
    


    render() {
        return (
            <div>
        <div>
        <NavBar />
        <DevLogIn user={this.props.user} setUser={this.props.setUser} />

                    <div className="card-body text-center">
                      <h5 className="card-title">Special title treatment</h5>
                      <p className="card-text">
                      <blockquote className="blockquote mb-0">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                          <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                        </blockquote>
                      </p>
                      <br />
                      
                      <button type="button" className="btn btn-outline-secondary">Volunteer Search</button>
                      <button type="button" className="btn btn-outline-secondary">Friend Search</button>
                      <br />
                    </div>
                   </div>
          
            <div className="container">
          
              <br />
              <div className="row">
                <div className="col-sm-4">
                <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
                  <br />
                  <br />
                  <h3>Personal Links</h3>
                  <p> Connect with me at the following.</p>
                  <ul className="nav nav-pills flex-column">
                    <li className="nav-item">
                      <a className="nav-link" href="#">Facebook</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Twitter</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Snapchat</a>
                    </li>
                  </ul>
                  <hr className="d-sm-none" />
                </div>
                <div className="col-sm-8">
                  <h2>About Me</h2>
                  <br />
            {/* <input
                        value={this.state.firstName}
                        name="firstName"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="First Name"
                    /> */}

                    <div id="example-one">
                        {this.state.aboutFromFirebase}
                    </div>

            <form id="example-one">
            {/* <style scoped>
              #example-one { margin-bottom: 10px; }
              [contenteditable="true"] { padding: 10px; outline: 2px dashed #CCC; }
              [contenteditable="true"]:hover { outline: 2px dashed #0090D2; }
            </style> */}
            <input value={this.state.about}
              name="about"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Tell us about yourself!">
            </input>
            <button onClick={this.handleFormSubmit}>Submit Changes</button>

            </form>
              
                  <br />
                  <h2>How I can help.</h2>
                  <br />
                  <div className="fakeimg">Add Image
                    
                  </div>
                  <div className="input-group">
                      <div className="custom-file">
                        <input type="file" className="custom-file-input" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" />
                        <label className="custom-file-label" for="inputGroupFile04">Choose file</label>
                      </div>
                    </div>
                    <br />
                    <div id="example-one" contenteditable="true">
                        {/* <style scoped>
                          #example-one { margin-bottom: 10px; }
                          [contenteditable="true"] { padding: 10px; outline: 2px dashed #CCC; }
                          [contenteditable="true"]:hover { outline: 2px dashed #0090D2; }
                        </style> */}
                        <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco. </p>
                          <code>HTML5</code>
                        </div>
                  
                </div>
              </div>
            </div>
            <br />
            <Footer />
            </div>
        );
    }
}




export default Profile;

