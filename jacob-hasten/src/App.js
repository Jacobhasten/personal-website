import React from 'react';
import './App.scss';
import Home from './Components/Home';
import Nav from './Components/Nav';
import { Switch, Route } from "react-router-dom";


function App() {
  return (
    <Switch>
      <div className="app-container">
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/nav">
          <Nav />
        </Route>
      </div>
    </Switch>
  );
}

export default App;
