import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

function InputForm() {
  const [q1, setq1] = useState("");
  const [q2, setq2] = useState("");
  const [q3, setq3] = useState("");
  const [q4, setq4] = useState("");
  const [q5, setq5] = useState("");
  const [date, setDate] = useState(0);

  async function handleClick(e) {
    console.log("clicked");

    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: "POST",

      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: { date, q1, q2, q3, q4, q5 } }),
    };
    const response = await fetch(`http://localhost:3000`, requestOptions);
    const data = await response.json();
    setq1({ q1: data.q1 });
  }

  return (
    //function for onChange
    //onSubmit on button//
    <div>
      <Form>
        <Form.Group controlId="weekNum">
          <Form.Label>Week number</Form.Label>
          <Form.Control
            autocomplete="off"
            onChange={(e) => setDate(e.target.value)}
            className="Date"
            type="number"
            placeholder="Which week is it?"
          />
        </Form.Group>

        <Form.Group controlId="formq1">
          <Form.Label>Q1</Form.Label>
          <Form.Control
            autocomplete="off"
            onChange={(e) => setq1(e.target.value)}
            className="answer1"
            type="q1"
            placeholder="Enter answer here..."
          />
        </Form.Group>

        <Form.Group controlId="formq2">
          <Form.Label>Q2</Form.Label>
          <Form.Control
            autocomplete="off"
            onChange={(e) => setq2(e.target.value)}
            type="q2"
            placeholder="Enter answer here..."
          />
        </Form.Group>
        <Form.Group controlId="formq3">
          <Form.Label>Q3</Form.Label>
          <Form.Control
            autocomplete="off"
            onChange={(e) => setq3(e.target.value)}
            type="q3"
            placeholder="Enter answer here..."
          />
        </Form.Group>
        <Form.Group controlId="formq4">
          <Form.Label>Q4</Form.Label>
          <Form.Control
            autocomplete="off"
            onChange={(e) => setq4(e.target.value)}
            type="q4"
            placeholder="Enter answer here..."
          />
        </Form.Group>
        <Form.Group controlId="formq5">
          <Form.Label>Q5</Form.Label>
          <Form.Control
            autocomplete="off"
            onChange={(e) => setq5(e.target.value)}
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
