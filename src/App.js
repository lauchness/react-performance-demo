import React, {useState} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'
import Loading from './components/Loading/Loading'
import Login from './components/Login/Login'
import NavBar from './components/NavBar/NavBar'
import {AppContextProvider} from './components/AppContext'

const Main = React.lazy(() =>
  import(/* webpackPrefetch: true */ './components/Main/Main'),
)
const ProfileEditor = React.lazy(() =>
  import(
    /* webpackPrefetch: true */ './components/ProfileEditor/ProfileEditor'
  ),
)

function App() {
  const [user, setUser] = useState(null)

  return (
    <AppContextProvider>
      <div className="app">
        {!user ? (
          <Login setUser={setUser} />
        ) : (
          <Router>
            <NavBar />
            <React.Suspense fallback={<Loading />}>
              <Main user={user} />
            </React.Suspense>
            <Switch>
              <Route path="/profile">
                <React.Suspense fallback={<Loading />}>
                  <ProfileEditor />
                </React.Suspense>
              </Route>
            </Switch>
          </Router>
        )}
      </div>
    </AppContextProvider>
  )
}

export default App
