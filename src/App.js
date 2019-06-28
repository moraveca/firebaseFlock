import React, { useState } from 'react';
import LogIn from "./devComponents/LogIn";
import DetailForm from "./devComponents/DetailForm";
import Chat from "./devComponents/Chat";

function App() {
  const [user, setUser] = useState({})

  return (
     <div>
      <LogIn user={user} setUser={setUser}/>
      <DetailForm user={user} />
      <Chat user={user} />
    </div>
  )
}

export default App;
