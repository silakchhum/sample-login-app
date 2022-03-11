import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './style/App.css';
import { Provider } from 'react-redux';
import Login from './component/Login';
import HomePage from './component/HomePage';
import store from './store';

function App() {
  return <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={HomePage} />
      </Switch>
    </Router>
  </Provider>
}

export default App;
