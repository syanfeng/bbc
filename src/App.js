import React, { Component } from 'react';
import {BrowserRouter, Route, NavLink, Switch} from 'react-router-dom'

import { Button } from 'antd-mobile';

import logo from './logo.svg';
import './App.css';

import Home from './pages/Home'
import Login from './pages/Login'
import Greeting from './pages/Greeting'

class App extends Component {
  render() {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/greeting" component={Greeting}/>
        </Switch>
    );
  }
}

export default App;
