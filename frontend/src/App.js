import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

import logo from './assets/logo-white-text.webp'

function App() {
  const [userAdded, setUserAdded] = useState(null);

  const handleUserAdded = (newUser) => {
    setUserAdded(newUser);
  };

  return (
    <div className="bg-gradient-to-br from-50% from-bluez to-pinkz text-white min-h-screen flex items-center justify-center">
       <img src={logo} className="h-16 absolute top-4 right-8"/>
      <div className="w-full max-w-md">
        <UserForm onUserAdded={handleUserAdded} />
        <UserList userAdded={userAdded} />
      </div>
    </div>
  );
}

export default App;
