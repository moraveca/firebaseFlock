import React, { useState } from 'react';
import DevLogIn from "./devComponents/DevLogIn";
import DevDetailForm from "./devComponents/DevDetailForm";
import DevChat from "./devComponents/DevChat";

function App() {
  const [user, setUser] = useState({})

  return (
     <div>
      <DevLogIn user={user} setUser={setUser}/>
      <DevDetailForm user={user} />
      <DevChat user={user} />
    </div>
  )
}

export default App;
