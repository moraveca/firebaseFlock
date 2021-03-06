import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import WatchUser from "./components/WatchUser";
import Profile from "./pages/Profile";
import Homepage from "./pages/Homepage";
import BulletinBoard from "./pages/BulletinBoard";
import SeekingFamilyBoard from "./pages/seekingFamilyBoard";
// import SignIn from "./pages/SignIn";
import MessageBoard from "./pages/MessageBoard";

import DevProfiles from "./devComponents/DevProfiles";
import DevMessages from "./devComponents/DevMessages";
import DevChat from "./devComponents/DevChat";
import DevMyMessages from "./devPages/DevMyMessages";
import DevLogIn from "./devPages/DevLogIn";
import DevDetailForm from "./devComponents/DevDetailForm";
import About from "./pages/About";
import Resources from "./pages/Resources"

import NavBar from "./components/NavBar";



function PrivateRoute({ component: Component, ...rest }) {
  console.log(rest)
  // debugger
  return (
    <Route
      {...rest}
      render={props =>
        rest.user.uid ? (
          <Component {...props} {...rest} />
        ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location }
              }}
            />
          )
      }
    />
  );
}



function App() {
  const [user, setUser] = useState({})


  return (
    <>
      <WatchUser setUser={setUser} />

      <Router>
        <div>
          <NavBar
            user={user}
            url={user.photoURL}
          />
          <Switch>
            <Route exact path="/" render={(props) => <Homepage {...props} user={user} setUser={setUser} />} />

            <PrivateRoute exact path="/profile" component={Profile} user={user} setUser={setUser} />
            <PrivateRoute exact path="/bulletin" component={BulletinBoard} user={user} />} />

            <Route exact path="/seekingboards" render={(props) => <SeekingFamilyBoard {...props} user={user} setUser={setUser} />} />

            {/* <Route exact path="/signin" render={(props) => <SignIn {...props} user={user} />} /> */}

            <Route exact path="/devlogin" render={(props) => <DevLogIn {...props} user={user} setUser={setUser} />} />
            {/* <Route exact path="/form" render={(props) => <DevDetailForm {...props} user={user} />} /> */}
            {/* <Route exact path="/messages" render={(props) => <MessageBoard {...props} user={user} />} /> */}

            {/* <Route exact path="/devmessages" render={(props) => <DevMessages {...props} user={user} />} /> */}
            {/* <Route exact path="/devprofiles" render={(props) => <DevProfiles {...props} user={user} />} /> */}

            {/* <Route exact path="/profile" render={(props) => <Profile {...props} user={user} setUser={setUser} />} /> */}
            {/* <Route exact path="/homepage" render={(props) => <Homepage {...props} user={user} setUser={setUser} />} /> */}
            <Route exact path="/about" render={(props) => <About {...props} user={user} setUser={setUser} />} />
            <Route exact path="/resources" render={(props) => <Resources {...props} user={user} setUser={setUser} />} />

            {/* <Route component={NoMatch} /> */}
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;