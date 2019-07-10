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
        <div className="jumbotron">
  <h1 className="display-4">Hello, world!</h1>
  <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr className="my-4"/>
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <form className="form-inline" action="Resource.html">
                  <button className="btn btn-lg btn-outline-secondary">Resources</button>
                </form>
 
      </div>
       
        <div className="jumbotron jumbotron-fluid" id="jumbotron">
        <aside id="intro-aside">
            <div className="card-body text-center">
                          <button type="button" className="btn btn-outline-secondary">Volunteer Search</button>&nbsp;&nbsp;
                      <button type="button" className="btn btn-outline-secondary">Friend Search</button>
             

                    </div>
         </aside>
    </div>
       </div>
        
            <div className="container-fluid">
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
                  <h2 class="display-8">Personal Links:</h2>
              
                  <div className="text-center">
                 
    
                  <p> Connect with me at the following..</p>
                  <ul className="nav nav-pills flex-column">
                  
                    <li className="nav-item" >
                    <a class="social-icon" href="www.facebook.com"target="_blank"><img src="facebook.png" width="20" height="20"/></a> 
                    <a class="social-icon" href="www.twitter.com"target="_blank"><img src="twitter.png" width="20" height="20"/></a> 
                    <a class="social-icon" href="www.snapchat.com"target="_blank"><img src="snapchat.png" width="20" height="20"/></a> 

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
     
                    {/* <input
                        value={this.state.firstName}
                        name="firstName"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="First Name"
                    /> */}
           
      <h2>Who I am:</h2>
<div id="example-one" >
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
              
                  <br />
                 
                 
                    <br />
                    <h2>Ways I can help:</h2>
                    <div id="example-one" contenteditable="true">
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
        );
    }
}




export default Profile;

