import React, { useState } from 'react';
import './App.css';
import Loading from './components/Loading/Loading';
import Login from './components/Login/Login';
const Main = React.lazy(() => import('./components/Main/Main'));

function App() {
  const [user, setUser] = useState(null);
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
