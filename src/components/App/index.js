import React from "react";
import "./App.css";
import NavBar from "../NavBar";
import InputForm from "../InputForm/index";
import Login from "../Authcomponents/Login";
import DropDown from "../../components/History/DropDown";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "../HomePage";
import Contact from "../Contact";

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
              <DropDown />
            </Route>

            <Route path="/contact">
              <Contact />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
