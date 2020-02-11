import React, {useState} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'
import Loading from './components/Loading/Loading'
import Login from './components/Login/Login'
import NavBar from './components/NavBar/NavBar'

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
  const [favouriteColor, setFavouriteColor] = useState('')

  return (
    <div className="app">
      {!user ? (
        <Login setUser={setUser} />
      ) : (
        <Router>
          <NavBar favouriteColor={favouriteColor} />
          <React.Suspense fallback={<Loading />}>
            <Main user={user} />
          </React.Suspense>
          <Switch>
            <Route path="/profile">
              <React.Suspense fallback={<Loading />}>
                <ProfileEditor
                  favouriteColor={favouriteColor}
                  setFavouriteColor={setFavouriteColor}
                />
              </React.Suspense>
            </Route>
          </Switch>
        </Router>
      )}
    </div>
  )
}

export default App
