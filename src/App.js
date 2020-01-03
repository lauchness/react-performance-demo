import React, { useState } from 'react';
import './App.css';
import Login from './components/Login/Login';
import Main from './components/Main/Main';

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="app">
      {!user ? <Login setUser={setUser} /> : <Main user={user} />}
    </div>
  );
}

export default App;
