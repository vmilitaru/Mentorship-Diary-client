import React from 'react';
import {Jumbotron} from 'react-bootstrap';
import '../App/App.css';
import stars from '../images/starryNight.jpeg';

function Contact() {
    return (
        <div className="page-intro">
            <Jumbotron style = {{backgroundImage:`url(${stars})`,backgroundSize:"cover", backgroundPosition:"center"}} >
  <p style = {{color:"white", fontSize:"40px",fontWeight:"550"}}>Contact</p>
  <br></br>
  <p style ={{color:"white"}}>
   Contact content here
  </p>
</Jumbotron>
        </div>
    )
}

export default Contact;
