import React from 'react';
import Form from "../Form";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "../NavBar/index";
import InputForm from '../Form/index';
import {Card, CardBody} from 'react-bootstrap';
// import "./App.css";



function App() {
  return (
    <Router>
    <Switch>
    <Route path="/Form">
    <Form/>
    </Route>
    </Switch>
    </Router>
  );
}

export default App;
