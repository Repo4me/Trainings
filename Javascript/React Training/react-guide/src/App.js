import React from 'react';
import './App.css';

import { Component } from 'react'
import Welcome from './components/Welcome';
import Greet from './components/Greet';
import Clock from './components/Clock';
import Counter from './components/Counter';
import GorceryList from './components/GorceryList';
import PersonListSample from './components/PersonListSample';
import User from './components/User';
import Formdemo from './components/Formdemo';
import RefDemo from './components/RefDemo';
import FancyButton from './components/FancyButton';
import Login from './components/Login';
import Logout from './components/Logout';
import Tables from './components/Tables';
import HttpGet from './components/HttpGet';
import HttpPost from './components/HttpPost';
import { Switch, Route, Link } from "react-router-dom";


// class component
class App extends Component {
  render() {
    return (
      // in react there can be only one root element.
      <div className='container'>
        
        {/* <Link to = '/wel'>Welcome</Link>
        <Link to = '/greet'>Greet</Link> */}
        <Link to = '/wel'>Welcome</Link><br/>
        <Link to = '/greet'>Greet</Link><br/>
        <Link to = '/'>Timer</Link><br/>

        <Switch>
          <Route exact path = '/'>
            <Clock></Clock>
          </Route>
          <Route path = '/wel'>
            <Welcome></Welcome>
          </Route>
          <Route path = '/greet'>
            <Greet></Greet>
          </Route>
        </Switch>
        {/* <h1 className='text-center'>Hello Class component</h1> */}
         {/* <Clock></Clock>
         <RefDemo></RefDemo>
         <FancyButton></FancyButton> */}
         {/* <Login></Login>
         <Logout></Logout>
         <Tables/> */}
         {/* <HttpGet/>
         <HttpPost/> */}
        {/*<Counter/> */}
        {/* the attribute name can be anything for a child */}
        {/* <Welcome anyname='Gajanan' city='pune'/>
        <Welcome anyname='Gajanan123'/>
        <Greet yetAnotherAttrName='Chilkewar' city='pune'/> */}
        {/* <GorceryList/> */}
        {/* <User>
          <h1>Please Login</h1>
          <h1>Welcom Back</h1>
        </User> */}
        {/* <Formdemo/> */}
        {/* <PersonListSample/> */}
      </div>
    )
  }
}

// functional component

// function App() {
//   return (
  // <div>
//     <h1>Hello function component</h1>
    //<h1> from react </h1>
    //</div>
//   );
// }

export default App;
