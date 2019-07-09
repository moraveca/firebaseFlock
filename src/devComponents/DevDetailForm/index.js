import React, { Component } from "react";
import { db } from "../../api/firebase/index"


class DevDetailForm extends Component {
    // Setting the component's initial state
    state = {
        firstName: "",
        lastName: "",
        location: "",
        // image: "",
        about: ""
    };


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

        console.log("props: ", this.props)
        console.log("props.user: ", this.props.user)
        console.log("uid: ", this.props.user.uid);
        console.log("email: ", this.props.user.email);
        console.log("firstName: ", this.state.firstName);
        console.log("lastName: ", this.state.lastName);
        console.log("location: ", this.state.location);
        console.log("about: ", this.state.about);

        db.collection("users").doc(this.props.user.uid).set({
            uid: this.props.user.uid,
            email: this.props.user.email,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            location: this.state.location,
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
                <form>
                    <input
                        value={this.state.firstName}
                        name="firstName"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="First Name"
                    />
                    <input
                        value={this.state.lastName}
                        name="lastName"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Last Name"
                    />
                    <input
                        value={this.state.location}
                        name="location"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="City and State (ex. Minneapolis, MN)"
                    />
                    <input
                        value={this.state.about}
                        name="about"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Tell us about yourself!"
                    />

                    <button onClick={this.handleFormSubmit}>Complete this form!</button>
                    {/* <h1>{this.state.user.email}</h1> */}
                </form>
            </div>
        );
    }
}

export default DevDetailForm;
