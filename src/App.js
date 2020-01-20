import React, { useState, useEffect } from 'react';
import './App.css';
import Loading from './components/Loading/Loading';
import Login from './components/Login/Login';

const loadMain = () => import('./components/Main/Main')
const Main = React.lazy(loadMain);

function App() {
  const [user, setUser] = useState(null);

  // eager load Main component
  useEffect(() => {
    loadMain()
  }, [])

  return (
    <div className="app">
      {!user ? (
        <Login setUser={setUser} />
      ) : (
        <React.Suspense fallback={<Loading />}>
          <Main user={user} />
        </React.Suspense>
      )}
    </div>
  );
}

export default App;
