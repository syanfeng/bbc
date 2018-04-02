import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'

import './App.css';

import Home from './pages/Home'
import PrivateRoute from './pages/PrivateRoute'
import Login from './pages/Login'
import Greeting from './pages/Greeting'
import Coffers from './pages/Coffers'
import Mining from './pages/Mining'
import Exchange from './pages/Exchange'
import Payment from './pages/Payment'
import Receiveable from './pages/Receiveable'


class App extends Component {
  render() {
    return (
        <Switch>
            <Route exact path="/" component={Greeting}/>
            <Route path="/login" component={Login}/>
            <Route path="/greeting" component={Greeting}/>
            <Route path="/coffers" component={Coffers}/>
            <PrivateRoute path="/mining" component={Mining}/>
            <Route path="/exchange" component={Exchange}/>
            <Route path="/payment" component={Payment}/>
            <Route path="/receiveable" component={Receiveable}/>
        </Switch>
    );
  }
}

export default App;
