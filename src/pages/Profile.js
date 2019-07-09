import React, { Component } from "react";
import { db, storage } from "../api/firebase/index"

import NavBar from "../components/NavBar";
import DevLogIn from "../devComponents/DevLogIn";
import ImageEditor from "../components/ImageEditor";
import ImageUploader from 'react-images-upload';
import Footer from "../components/Footer";

class Profile extends Component {


  constructor(props) {
    super(props);
    this.state = {
      picture: "",
      aboutFromFirebase: "",
      about: "",
    };
  }

  componentDidMount() {
    this.checkingUser()
  };

  checkingUser = () => {
    if (!this.props.user.uid) {
      console.log("user: ", this.props.user);
      console.log("setting timer");
      setTimeout(this.checkingUser, 500)
    } else {
      this.loadPicture();
      this.loadAbout()
    }
  };

  loadPicture = () => {
    if (this.props.user.photoURL) {
      this.setState({
        picture: this.props.user.photoURL
      });
    }
  }

  loadAbout = () => {
    console.log("user: ", this.props.user);

    db.collection("users").doc(this.props.user.uid)
      .onSnapshot(doc => {
        console.log("Current data: ", doc.data());
        this.setState({
          aboutFromFirebase: doc.data().about
        });
      });
  };

  // this is for pic upload
  onDrop = picture => {

    // console.log("picture: ", picture);
    const file = picture[0];
    console.log("file: ", file);

    const storageRef = storage.ref();

    const imagesRef = storageRef.child("images");
    const spaceRef = storageRef.child("images/" + file.name);

    spaceRef.put(file).then(snapshot => {
      console.log('Uploaded a blob or file!');
      snapshot.ref.getDownloadURL().then(downloadURL => {
        console.log('File available at', downloadURL);


        const user = this.props.user;

        user.updateProfile({
          photoURL: downloadURL
        }).then(() => {
          if (user != null) {
            user.providerData.forEach(profile => {
              console.log("Sign-in provider: " + profile.providerId);
              console.log("  Provider-specific UID: " + profile.uid);
              console.log("  Name: " + profile.displayName);
              console.log("  Email: " + profile.email);
              console.log("  Photo URL: " + profile.photoURL);
            });

            this.setState({
              picture: this.props.user.photoURL
            });

            db.collection("users").doc(this.props.user.uid).update({
              pictureURL: this.state.picture
            })
              .then(function () {
                console.log("PictureURL successfully written!");
              })
              .catch(function (error) {
                console.error("Error adding document: ", error);
              });

          }
          // Update successful.
        }).catch(function (error) {
          // An error happened.
        });

      });
    });


  }



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
      .then(function () {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });

    this.setState({
      firstName: "",
      lastName: "",
      location: "",
      about: "",
    });

  };

  // db.collection("users").doc(this.props.user.uid).update({
  //     about: this.state.about
  // })
  // .then(function() {
  //     console.log("Document successfully written!");
  // })
  // .catch(function(error) {
  //     console.error("Error adding document: ", error);
  // });

  // this.setState({
  //     firstName: "",
  //     lastName: "",
  //     location: "",
  //     about: "",
  //       });


  render() {
    return (
      <div>
        <div>

          {/* <NavBar /> */}
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

        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-4">

              {this.state.picture === "" &&
                <ImageUploader
                  withIcon={true}
                  buttonText='Choose images'
                  onChange={this.onDrop}
                  imgExtension={['.jpg', '.gif', '.png', '.gif', '.jpeg']}
                  maxFileSize={5242880}
                />}
              {this.state.picture != "" &&
                <img src={this.state.picture} alt="Profile Pic"></img>
              }

              <br />
              <br />
              <h2 className="display-8">Personal Links:</h2>

              <div className="text-center">


                <p> Connect with me at the following..</p>
                <ul className="nav nav-pills flex-column">

                  <li className="nav-item" >
                    <a className="social-icon" href="www.facebook.com" target="_blank"><img src="facebook.png" width="20" height="20" /></a>
                    <a className="social-icon" href="www.twitter.com" target="_blank"><img src="twitter.png" width="20" height="20" /></a>
                    <a className="social-icon" href="www.snapchat.com" target="_blank"><img src="snapchat.png" width="20" height="20" /></a>

                  </li>
                </ul>

              </div>
            </div>


            <div className="col-sm-8">
              <div className="row">

                <h1>About Me</h1>
              </div>
              <br></br>
              <div className="content">
                <div className="row">
                  <h2>Who I am:</h2>

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
              #example-one { margin-bottom: 30px; }
              [contenteditable="true"] { padding: 10px; outline: 2px dashed #CCC; }
              [contenteditable="true"]:hover { outline: 2px dashed #0090D2; }
            </style> */}

                    <input value={this.state.about}
                      name="about"
                      onChange={this.handleInputChange}
                      type="text"
                      placeholder="Tell us about yourself!">
                    </input>
                    <br></br>
                    <br></br>
                  </form>
                  <br></br>
                  <button onClick={this.handleFormSubmit}>Submit Changes</button>

                  <br></br>
                  <br />
                  <div className="row">
                    <h2>Ways I can help:</h2>
                  </div>
                  <br />


                  <br />
                  <div id="example-one" contentEditable="true">
                    {/* <style scoped>
                          #example-one { margin-bottom: 10px; }
                          [contenteditable="true"] { padding: 10px; outline: 2px dashed #CCC; }
                          [contenteditable="true"]:hover { outline: 2px dashed #0090D2; }
                        </style> */}
                    <p>edit here.. </p>

                  </div>
                </div>
              </div>

            </div>
          </div>
          <br />
          <Footer />
        </div>
      </div>
    );
  }
}




export default Profile;

