import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LeaderBoard from "./LeaderBoard";
import SignUp from "./SignUp";
import Home from "./Home";

class App extends Component {
  render() {
      if(false){
         return( <div style={{display:"flex"}} >
              <Home/>
          </div>);
      }else
    return (
      <div style={{display:"flex"}} >

        <SignUp />
        <LeaderBoard/>
      </div>
    );
  }
}

export default App;
