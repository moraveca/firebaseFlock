import React, { Component } from "react";
import { createLogin, signIn, watchCurrentUser, signOut } from "../../api/firebase/auth";

class LogIn extends Component {
  // Setting the component's initial state
  state = {
    email: "",
    password: "",
  };

  componentDidMount() {
      watchCurrentUser( (user) => {
        this.props.setUser(user)
      })
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
    if (!this.state.email) {
        return alert("Fill out your email please!");
    } else if (this.state.password.length < 6) {
      return alert("Choose a more secure password");
    }

    createLogin(this.state.email, this.state.password);

    this.setState({
      email: "",
      password: ""
    });

  };

  clickedSignOut = event => {
      event.preventDefault();
      signOut();
  }

  render() {
    return (
      <div>
          
        {!this.props.user.uid && <form className="form">
          <input
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Email"
          />
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>}
        {this.props.user.uid && <button onClick={this.clickedSignOut}>Logout: {this.props.user.email}</button>}

      </div>
    );
  }
}

export default LogIn;
