import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import DevLogIn from "./devPages/DevLogIn";
import DevDetailForm from "./devComponents/DevDetailForm";
import DevChat from "./devComponents/DevChat";
import Profile from "./pages/Profile";
import Homepage from "./pages/Homepage";
import BulletinBoard from "./pages/BulletinBoard";

// function App() {
//   const [user, setUser] = useState({})

//   return (
//      <div>
//       <DevLogIn user={user} setUser={setUser}/>
//       <DevDetailForm user={user} />
//       <DevChat user={user} />
//     </div>
//   )
// }

function App() {
  const [user, setUser] = useState({})

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" render={(props) => <DevLogIn {...props} user={user} setUser={setUser} />} />
          <Route exact path="/form" render={(props) => <DevDetailForm {...props} user={user} />} />
          <Route exact path="/message" render={(props) => <DevChat {...props} user={user} />} />
          <Route exact path="/profile" render={(props) => <Profile {...props} user={user} setUser={setUser} />} />
          <Route exact path="/homepage" render={(props) => <Homepage {...props} user={user} setUser={setUser} />} />
          <Route exact path="/bulletin" render={(props) => <BulletinBoard {...props} user={user} />} />

          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
