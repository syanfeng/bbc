import React, { Component } from 'react';
import {BrowserRouter, Route, NavLink, Switch} from 'react-router-dom'

import { Button } from 'antd-mobile';

import logo from './logo.svg';
import './App.css';

import Home from './pages/Home'
import Login from './pages/Login'
import Greeting from './pages/Greeting'
import Coffers from './pages/Coffers'
import Mining from './pages/Mining'
import Exchange from './pages/Exchange'


class App extends Component {
  render() {
    return (
        <Switch>
            <Route exact path="/" component={Greeting}/>
            <Route path="/login" component={Login}/>
            <Route path="/greeting" component={Greeting}/>
            <Route path="/coffers" component={Coffers}/>
            <Route path="/mining" component={Mining}/>
            <Route path="/exchange" component={Exchange}/>
        </Switch>
    );
  }
}

export default App;
