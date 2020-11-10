import React from "react";
import NavBar from "../NavBar";
import { Form, Button } from "react-bootstrap";

function InputForm() {
  return (

    //function for onChange
    //onSubmit on button 


    <div>
      <NavBar></NavBar>

      <Form>
        <Form.Group controlId="formq1">
          <Form.Label>Q1</Form.Label>
          <Form.Control type="q1" placeholder="Enter answer here..." />
        </Form.Group>

        <Form.Group controlId="formq2">
          <Form.Label>Q2</Form.Label>
          <Form.Control type="q2" placeholder="Enter answer here..." />
        </Form.Group>
        {/* <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default InputForm;