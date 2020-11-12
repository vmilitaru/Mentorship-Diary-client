import React, { useState, useEffect } from "react";
import { Form, Button, Jumbotron } from "react-bootstrap";

function InputForm() {
  const [q1, setq1] = useState("");
  const [q2, setq2] = useState("");
  const [q3, setq3] = useState("");
  const [q4, setq4] = useState("");
  const [q5, setq5] = useState("");
  const [week, setWeek] = useState(0);

  async function handleClick(e) {
    console.log("clicked");

    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: "POST",

      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: { week, q1, q2, q3, q4, q5 } }),
    };
    const response = await fetch(`http://localhost:3000`, requestOptions);
    const data = await response.json();
    setq1({ q1: data.q1 });
  }

  return (
    <>
    <div className="page-intro"> 
<Jumbotron>
  <h1>Weekly Form</h1>
  <br></br>
  <p>
    Intro to weekly form here
  </p>
  <p>
  </p>
</Jumbotron>
</div>

      <Form>
        <Form.Group controlId="week">
          <Form.Label>Week Number</Form.Label>
          <Form.Control
            autocomplete="off"
            onChange={(e) => setWeek(e.target.value)}
            className="Week"
            type="number"
            placeholder="Which week is it?"
          />
        </Form.Group>

        <Form.Group controlId="formq1">
          <Form.Label>What have you achieved this week?</Form.Label>
          <Form.Control
            autocomplete="off"
            onChange={(e) => setq1(e.target.value)}
            className="answer1"
            type="q1"
            placeholder="Enter answer here..."
          />
        </Form.Group>

        <Form.Group controlId="formq2">
          <Form.Label>How would you implement what you have learned day to day?</Form.Label>
          <Form.Control
            autocomplete="off"
            onChange={(e) => setq2(e.target.value)}
            type="q2"
            placeholder="Enter answer here..."
          />
        </Form.Group>
        <Form.Group controlId="formq3">
          <Form.Label>What could you improve on?</Form.Label>
          <Form.Control
            autocomplete="off"
            onChange={(e) => setq3(e.target.value)}
            type="q3"
            placeholder="Enter answer here..."
          />
        </Form.Group>
        <Form.Group controlId="formq4">
          <Form.Label>Share an example of something that you struggled with?</Form.Label>
          <Form.Control
            autocomplete="off"
            onChange={(e) => setq4(e.target.value)}
            type="q4"
            placeholder="Enter answer here..."
          />
        </Form.Group>
        <Form.Group controlId="formq5">
          <Form.Label>What do I want to achieve next?</Form.Label>
          <Form.Control
            autocomplete="off"
            onChange={(e) => setq5(e.target.value)}
            type="q5"
            placeholder="Enter answer here..."
          />
        </Form.Group>
        <Button onClick={handleClick} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default InputForm;
