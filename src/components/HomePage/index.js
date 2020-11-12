import React from "react";
import {Jumbotron} from 'react-bootstrap';
import '../App/App.css';
import stars from '../images/starryNight.jpeg';
import logo from '../images/2.png';

function HomePage() {
  return (
    <>
      <div>
    <div className="page-intro">
     <Jumbotron style = {{backgroundImage:`url(${stars})`,backgroundSize:"cover", backgroundPosition:"center", borderRadius: "0"}} >
    
  <h1 style={{color:"white"}}>Mentor Diary</h1>
 
</Jumbotron>
</div>
<div> 
<p style={{color:"black",fontSize:"24px"}}>
  As we embark on this exciting and nerve-wracking experience, remember that everyone had to start somewhere. By embracing the relationship with your mentor you will learn to focus on your goals and help you to see how the subjects you are studying now will help your career in the future.  It is also an incredible opportunity to extend your professional
   network and learn to engage with established members of the tech community.
  </p>
  <img src = {logo} style = {{width:"20%", display: "right"}} alt="Mentor Diary Logo" /> 
</div>
</div>
<br></br>
<br></br>
</>

  );
}

export default HomePage;
