import React from 'react';
import { Switch } from "react-router-dom"
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Pages/Home';
import AddForm from './Pages/AddForm';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/AddForm" component={AddForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
