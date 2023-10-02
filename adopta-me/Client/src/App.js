import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import { AddForm } from './Pages/AddForm';


function App() {
  return (
  <Router>
      <div className="App">
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/AddForm" component={AddForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
