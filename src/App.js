import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Login from './Login';
import HomePage from './HomePage';

function App() {
  return <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/home" component={HomePage} />
    </Switch>
  </Router>
}

export default App;
