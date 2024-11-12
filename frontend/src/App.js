import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

function App() {
  const [userAdded, setUserAdded] = useState(null);

  const handleUserAdded = (newUser) => {
    setUserAdded(newUser);
  };

  return (
    <div className="bg-bluez text-white min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md">
        <UserForm onUserAdded={handleUserAdded} />
        <UserList userAdded={userAdded} />
      </div>
    </div>
  );
}

export default App;
