import React from 'react';
import './App.scss';
import Home from './Components/Home';
import MobileNav from './Components/MobileNav.jsx';
import Projects from './Components/Projects'
import { Switch, Route } from "react-router-dom";
import Bio from "./Components/Bio";
import Contact from "./Components/Contact"

function App() {
  return (
    <Switch>
      <div className="app-container">
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/nav">
          <MobileNav />
        </Route>
        <Route path="/projects">
          <Projects/>
        </Route>
        <Route path="/bio">
          <Bio/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
      </div>
    </Switch>
  );
}

export default App;
