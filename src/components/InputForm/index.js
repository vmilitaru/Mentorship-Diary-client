import React, { useState } from "react";
// import NavBar from "../NavBar";
import { Form, Button } from "react-bootstrap";

function InputForm() {
  const [q1, setq1] = useState("");
  const [q2, setq2] = useState("");
  const [q3, setq3] = useState("");
  const [q4, setq4] = useState("");
  const [q5, setq5] = useState("");

  function handleQ1Change(e) {
    setq1(e.target.value);
  }
  function handleQ2Change(e) {
    setq2(e.target.value);
  }
  function handleQ3Change(e) {
    setq3(e.target.value);
  }
  function handleQ4Change(e) {
    setq4(e.target.value);
  }
  function handleQ5Change(e) {
    setq5(e.target.value);
  }

  function handleClick() {
    console.log(q1);
    console.log(q2);
    console.log(q3);
    console.log(q4);
    console.log(q5);
  }

  return (
    //function for onChange
    //onSubmit on button//
    <div>
      <Form>
        <Form.Group controlId="formq1">
          <Form.Label>Q1</Form.Label>
          <Form.Control
            onChange={handleQ1Change}
            className="answer1"
            type="q1"
            placeholder="Enter answer here..."
          />
        </Form.Group>

        <Form.Group controlId="formq2">
          <Form.Label>Q2</Form.Label>
          <Form.Control
            onChange={handleQ2Change}
            type="q2"
            placeholder="Enter answer here..."
          />
        </Form.Group>
        <Form.Group controlId="formq3">
          <Form.Label>Q3</Form.Label>
          <Form.Control
            onChange={handleQ3Change}
            type="q3"
            placeholder="Enter answer here..."
          />
        </Form.Group>
        <Form.Group controlId="formq4">
          <Form.Label>Q4</Form.Label>
          <Form.Control
            onChange={handleQ4Change}
            type="q4"
            placeholder="Enter answer here..."
          />
        </Form.Group>
        <Form.Group controlId="formq5">
          <Form.Label>Q5</Form.Label>
          <Form.Control
            onChange={handleQ5Change}
            type="q5"
            placeholder="Enter answer here..."
          />
        </Form.Group>
        {/* <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}
        <Button onClick={handleClick} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default InputForm;
