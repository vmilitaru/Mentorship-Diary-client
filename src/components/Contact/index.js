import React from "react";
import { Jumbotron, Table, Card } from "react-bootstrap";
import "../App/App.css";
import stars from "../images/starryNight.jpeg";
import {FiTwitter, FiFacebook, FiYoutube, FiLinkedin} from 'react-icons/fi';
import {AiOutlineMedium} from 'react-icons/ai';
import {SiGooglemaps} from 'react-icons/si';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Contact() {
  return (
    <div className="page-intro">
      <Jumbotron
        style={{
          backgroundImage: `url(${stars})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "0",
        }}
      >
        <p style={{ color: "white", fontSize: "40px", fontWeight: "550" }}>
          Contact
        </p>
        <br></br>
        <p style={{ color: "white" }}>Find contact information here</p>
      </Jumbotron>
      <br></br>
      <Card>
          <Card.Body>
              <Card.Title> School of Code Team Contact Info</Card.Title>
          </Card.Body>
      </Card> 
      <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email Address</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>General</td>
      <td>bootcamp@schoolofcode.co.uk</td>
    </tr>
    <tr>
      <td>Chris Meah</td>
      <td>chris@schoolofcode.co.uk</td>
    </tr>
    <tr>
      <td>Ben Lee</td>
      <td>ben@schoolofcode.co.uk</td>
    </tr>
       <tr>
      <td>Banwo Idowu</td>
      <td>banwo@schoolofcode.co.uk</td>
    </tr>
    <tr>
      <td>Joe Trodden</td>
      <td>joe@schoolofcode.co.uk</td>
    </tr>
    <tr>
      <td>Tim Knight</td>
      <td>tim@schoolofcode.co.uk</td>
    </tr>
    <tr>
      <td>Liz Edrop</td>
      <td>liz@schoolofcode.co.uk</td>
    </tr>
    <tr>
      <td>Liz Kaufman</td>
      <td>liz.k@schoolofcode.co.uk</td>
    </tr>
    <tr>
      <td>Mell Russon</td>
      <td>mell@schoolofcode.co.uk</td>
    </tr>
    <tr>
      <td>Tao Sharma</td>
      <td>tao@schoolofcode.co.uk</td>
    </tr>
  </tbody>
</Table>
<br></br>
<Router>
<Table> 
<thead>
<tr> 
<Link to="https://twitter.com/theschoolofcode?lang=en"><th><FiTwitter style={{color: "black"}}/></th></Link>
<Link to ="https://www.facebook.com/schoolofcode"><th><FiFacebook style={{color: "black"}}/></th></Link>
<Link to="https://www.youtube.com/channel/UCKBzheEKcrqsaJhMV0f_Dmg"><th><FiYoutube style={{color: "black"}}/></th></Link>
<Link to="https://www.linkedin.com/school/school-of-code/"><th><FiLinkedin style={{color: "black"}}/></th></Link>
<Link to="https://blog.schoolofcode.co.uk/"><th><AiOutlineMedium style={{color: "black"}}/></th></Link>
<Link to="https://www.google.co.uk/maps/place/School+of+Code/@52.4755077,-1.8859678,17z/data=!3m1!4b1!4m5!3m4!1s0x4870bc8ef033dafd:0x716efdbd64f96d78!8m2!3d52.4892523!4d-1.8883594"><th><SiGooglemaps style={{color: "black"}}/></th></Link>
</tr>
</thead>
</Table>
</Router>
<br></br>
    </div>
  );
}

export default Contact;
