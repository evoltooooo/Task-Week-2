import logo from './logo.svg';
import './App.css';
import React from 'react';
import Landing from './Landing';
import Login from './Login';
import Home from './Home';
import Register from './Register'
import Detailbook from './Detailbook';
import Increment from './Incrementbookpage';
import Homeincrement from './incrementhome';
import Profile from './Profile';
import Download from './Download';
import Cartpage from './Cartpage';
import Admin from './Adminmainpage';
import Addbook from './Addbook'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className='App'>
      <div className='content'>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/detailbook">
            <Detailbook />
          </Route>
          <Route path="/incrementdetailbook">
            <Increment />
          </Route>
          <Route path="/homecart+1">
            <Homeincrement />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/download">
            <Download />
          </Route>
          <Route path="/payment">
            <Cartpage />
          </Route>
          <Route path="/adminpage">
            <Admin />
          </Route>
          <Route path="/addbook">
            <Addbook />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
