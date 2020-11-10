import React from 'react';
import Form from "../InputForm";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "../NavBar/index";
import InputForm from '../InputForm/index';
import {Card,} from 'react-bootstrap';
// import "./App.css";



function App() {
  return (
    <div>
      <NavBar/>
      <InputForm/>
      <p></p>
     
    {/* <Router>
    <Switch>
    <Route path="/Form">
    <InputForm/>
    </Route>
    </Switch>
    </Router>  */}
    </div>
  );
}

export default App;
