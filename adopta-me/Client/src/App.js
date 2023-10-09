import React from 'react';
import { Switch } from "react-router-dom"
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Pages/Home';
import AddForm from './Pages/AddForm';
import LandingPage from './Pages/LandingPage';
import Profile from './Pages/Profile';
import Detail from "./Pages/Detail"

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/home" component={Home} />
          <Route path="/AddForm" component={AddForm} />
          <Route path="/Profile" component={Profile} />
          <Route path="/Detail" component={Detail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
