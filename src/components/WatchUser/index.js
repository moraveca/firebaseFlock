import React, { Component } from "react";
import { watchCurrentUser } from "../../api/firebase/auth";

class WatchUser extends Component {
  // Setting the component's initial state

  componentDidMount() {

      watchCurrentUser( (user) => {
        this.props.setUser(user)
      });
  };
  
  render() {
    return (
      <div>
          
      </div>
    );
  }
}

export default WatchUser;
