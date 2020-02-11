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
        <React.Suspense fallback={<Loading />}>
          <Router>
            <NavBar favouriteColor={favouriteColor} />
            <Main user={user} />
            <Switch>
              <Route path="/profile">
                <ProfileEditor
                  favouriteColor={favouriteColor}
                  setFavouriteColor={setFavouriteColor}
                />
              </Route>
            </Switch>
          </Router>
        </React.Suspense>
      )}
    </div>
  )
}

export default App
