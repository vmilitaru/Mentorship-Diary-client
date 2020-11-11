import React, { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";

function History() {
  const [date, setDate] = useState("");
  // const [answers2, setAnswers2] = useState("");
  // const [answers3, setAnswers3] = useState("");
  // const [answers4, setAnswers4] = useState("");
  // const [answers5, setAnswers5] = useState("");

  //fetch req

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Choose A Date
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item
            onClick={(e) => setDate(e.target.value)}
            href="#/action-1"
          >
            11/11/20
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">10/11/20</Dropdown.Item>
          <Dropdown.Item href="#/action-3">09/11/20</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <p className="date"> </p>
      <p className="q1"></p>
      <p className="q2"></p>
      <p className="q3"></p>
      <p className="q4"></p>
      <p className="q5"></p>
    </div>
  );
}

export default History;
