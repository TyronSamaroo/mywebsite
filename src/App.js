import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from './components/NavBar';
import {Intro} from './components/Intro';
import {ProfilePhoto} from './components/ProfilePhoto';
import {Project} from './components/Project';

class App extends Component{
  render(){
    return(
     // <NavBar></NavBar>
     <div>
       <NavBar/>
       <ProfilePhoto/>
       <Intro/>
       <Project/>
       
       <h2>Hello</h2>
     </div>
    )
  }
}
export default App;
