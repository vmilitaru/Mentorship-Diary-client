import React from "react";
import "./App.css";
import NavBar from "../NavBar";
import InputForm from "../InputForm/index";
import History from "../History/index";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "../HomePage";
import Contact from '../Contact';

function App() {
  return (
    <div>
    
      <Router>
        <NavBar />
        <div className="App">
          <Switch>
            <Route path="/form">
              <InputForm />
            </Route>
            <Route path="/history">
              <History />
            </Route>
            <Route path="/">
              <HomePage/>
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
