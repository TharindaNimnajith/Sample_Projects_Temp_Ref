import React from 'react';
import MainComponent from './components/MainComponent'
import Login from './components/login/Login'
import SignUp from './components/signup/SignUp'
import Navigation from './components/navigator/Navigation'
import './App.css'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navigation/>

      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/sign">
            <SignUp />
          </Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
