import React from 'react';
import './App.scss';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Projects from './Components/Projects'
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
        <Route path="/projects">
          <Projects/>
        </Route>
      </div>
    </Switch>
  );
}

export default App;
