import React from "react";
// import NavBar from "../NavBar";
import { Form, Button } from "react-bootstrap";

function InputForm() {
  const 
  
  function onChange(){
    console.log(.answer1)



}

  return (

    //function for onChange
    //onSubmit on button//
     <div>
      <Form>
        <Form.Group controlId="formq1">
          <Form.Label>Q1</Form.Label>
          <Form.Control className="answer1" type="q1" placeholder="Enter answer here..." />
        </Form.Group>

        <Form.Group controlId="formq2" >
          <Form.Label>Q2</Form.Label>
          <Form.Control type="q2" placeholder="Enter answer here..." />
        </Form.Group>
        <Form.Group controlId="formq3">
          <Form.Label>Q3</Form.Label>
          <Form.Control type="q3" placeholder="Enter answer here..." />
        </Form.Group>
        <Form.Group controlId="formq4">
          <Form.Label>Q4</Form.Label>
          <Form.Control type="q4" placeholder="Enter answer here..." />
        </Form.Group>
        <Form.Group controlId="formq5">
          <Form.Label>Q5</Form.Label>
          <Form.Control type="q5" placeholder="Enter answer here..." />
        </Form.Group>
        {/* <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}
        <Button onClick = {onChange} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default InputForm;