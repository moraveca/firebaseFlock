import React, { Component } from "react";
import NavBar from "../components/NavBar";
import DevLogIn from "../devComponents/DevLogIn";
import ImageEditor from "../components/ImageEditor";
import ImageUploader from 'react-images-upload';
import Footer from "../components/Footer";



class Profile extends Component {


    constructor(props) {
        super(props);
         this.state = { pictures: [] };
    }
 
    onDrop = picture => this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    


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
                      
                      <button type="button" className="btn btn-outline-secondary">Volunteer Family Board</button>
                      <button type="button" className="btn btn-outline-secondary">Seeking Family Board</button>
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
                  <div contenteditable="true">
              This text can be edited by the user when they edit bio section.
            </div>
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
              
                  <br />
                  <h2>Family Members I'm Seeking</h2>
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
