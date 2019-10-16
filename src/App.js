import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import mainLogo from './colorCollapseWideLogo.svg'
import PrivacyPolicy from './PrivacyPolicy'

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/privacy/" exact component={PrivacyPolicy} />
    </Router>
  )
}

const Home = () => {
  return (
    <div className="App">
      <img className="logo" src={mainLogo} />
      <Link className="link" to="/privacy/">
        Privacy Policy
      </Link>
    </div>
  );
}

export default App;
