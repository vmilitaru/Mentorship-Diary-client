import React from "react";
import {Jumbotron} from 'react-bootstrap';
import '../App/App.css';

function HomePage() {
  return (
    <div className="page-intro">
     <Jumbotron>
  <h1>Homepage</h1>
  <p>
  As we embark on this exciting and nerve-wracking experience, remember that everyone had to start somewhere. By embracing the relationship with your mentor you will learn to focus on your goals and help you to see how the subjects you are studying now will help your career in the future.  It is also an incredible opportunity to extend your professional
   network and learn to engage with established members of the tech community.
  </p>
</Jumbotron>
    </div>
  );
}

export default HomePage;
