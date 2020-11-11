import React from "react";
import "./App.css";
import NavBar from "../NavBar";
import InputForm from "../InputForm/index";
import History from "../History/index";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
   <div>
      
    <Router>
      <NavBar/>
      <div className="App">
        

        <Switch>
          <Route path="/InputForm">
            <InputForm />
          </Route>
          <Route path="/History">
            <History />
          </Route>
         
          
        
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
