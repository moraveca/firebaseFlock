import React, { Component } from "react";
import { db, storage } from "../api/firebase/index";
import axios from 'axios';
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
    const getURL = "https://us-central1-flock-51279.cloudfunctions.net/api/userphoto/" + this.props.user.uid;
    console.log("getURL: ", getURL)

    axios.get(getURL).
      then(response => {
        console.log("response.data: ", response.data);
        const photoURL = response.data.photoURL
        if (photoURL) {
          this.setState({
            picture: photoURL
          });
        };
        console.log("state.picture: ", this.state.picture)
      })
      .catch(error => {
        console.log(error)
      })


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

    console.log("picture: ", picture);
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

            // this.setState({
            //   picture: this.props.user.photoURL
            // });

            const getURL = "https://us-central1-flock-51279.cloudfunctions.net/api/userphoto/" + this.props.user.uid;
            console.log("getURL: ", getURL)

            axios.post(getURL, {
              pictureURL: this.props.user.photoURL
            }).
              then(response => {
                console.log("post response.data: ", response.data);

                this.loadPicture();

                this.props.setUser({
                  ...this.props.user,
                  photoURL: this.props.user.photoURL
                }
                )

                // const photoURL = response.data.photoURL;
                // console.log("response.data.photoURL: ", photoURL)
                // if (photoURL) {
                //   this.setState({
                //     picture: photoURL
                //   });
                // };
                // console.log("state.picture: ", this.state.picture)
              })
              .catch(error => {
                console.log(error)
              })

            // the following post should be turned into a http post
            // db.collection("users").doc(this.props.user.uid).update({
            //   pictureURL: this.state.picture
            // })
            //   .then(function () {
            //     console.log("PictureURL successfully written!");
            //   })
            //   .catch(function (error) {
            //     console.error("Error adding document: ", error);
            //   });

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

  changePicture = () => {
    this.setState({
      picture: ""
    })
  }

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
      <>
        <div>
          <div>
            <div>
              <div className="jumbotron" id="jumbotronProfile">
                <div className="justified">
                  <aside id="intro-aside">
                  <div className="lead">
                  <blockquote>
                    <h3>“Have a big enough heart to love unconditionally,
                      and a broad enough mind to embrace the differences
                      that make each of us unique."</h3>-D.B. Harrop</blockquote></div>
                  </aside>
                </div>
              </div>
                {/* <div className="text-center">
                  <form className="form-inline"  action="Resource.html">
                  <button className="btn-lg btn-secondary" id="Search">Resources</button>
                </form>
                  <button type="button" className="btn btn-outline-secondary" id="Search">Chat Room</button>&nbsp;&nbsp;
      
                  <button type="button" className="btn btn-outline-secondary"id="Search">Friend Search</button>
                </div> */}
            </div>
          </div>

          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-4">
                {!this.state.picture && <ImageUploader
                  withIcon={true}
                  buttonText='Choose images'
                  onChange={this.onDrop}
                  imgExtension={['.jpg', '.gif', '.png', '.gif', 'jpeg']}
                  maxFileSize={5242880}
                />}
                {this.state.picture &&
                  <div className="card" style={{ width: "19rem;" }}>
                    <img className="card-img-top" src={this.state.picture} alt="Profile Picture" />
                    <div className="card-body">
                      <p className="card-text">My Picture</p>
                      <button className="btn btn-sm btn-outline-secondary"
                        onClick={this.changePicture}
                      >Change Picture</button>
                    </div>
                  </div>
                }
                <br />
                <br />
                <h2 className="display-8">Personal Links:</h2>

                <div className="text-center">


                  <p> Connect at the following...</p>
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
                <br />
                <div className="content">

                  <h2>Who I am:</h2>
                  <div id="example-one" >
                    {this.state.aboutFromFirebase}
                  </div>


                  <form id="example-one">

                    <input value={this.state.about}
                      name="about"
                      onChange={this.handleInputChange}
                      type="text"
                      placeholder="Tell us about yourself!">
                    </input>
                    <br />
                    <br />
                  </form>
                  <br />
                  <button className="btn btn-outline-secondary" onClick={this.handleFormSubmit}>Submit Changes</button>
                  <br />
                  <br />
                  <br />
                  <br />
                  {/* <h2>Ways I can help:</h2>
                  <div id="example-one" contenteditable="true">
                    <p>edit here.. </p>

                  </div> */}
                </div>


              </div>
            </div>
          </div>

        </div >
        <br />
        <Footer />
      </>
    );
  }
}




export default Profile;

