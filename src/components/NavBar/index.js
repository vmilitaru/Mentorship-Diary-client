import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import InputForm from '../Form';

function NavBar() {
  //function to update the drop down dates based on the database dates that have been submitted

  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <Link to="../App" style={{ textDecoration: "none" }}>
            Mentorship Experience
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="../App">
              <Link to="../App" style={{ textDecoration: "none" }}>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link href="../Form">
              <Link to="../Form" style={{ textDecoration: "none" }}>
                Forms
              </Link>
            </Nav.Link>
            <NavDropdown
              title="History of Achievements"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">09/11/20</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">02/11/20</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">26/10/20</NavDropdown.Item>
              {/* <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </Router>
  );
}
export default NavBar;
