import React, { useState, useEffect } from "react";

import { Accordion, Card, Button } from "react-bootstrap";
import "../App/App.css";

function History({ week, uuid }) {
  const [diary, setDiary] = useState([]);

  useEffect(() => {
    async function getDiary() {
      const res = await fetch(`http://localhost:3000/${week}`);
      const data = await res.json();
      console.log(data);
      setDiary(data.payload);
    }
    if (week !== null) {
      getDiary();
    }
  }, [week]);
  console.log(week);

  return uuid !== diary.uuid ? (
    <div>
      <p></p>
    </div>
  ) : (
    <>
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Card.Body style={{ fontWeight: "bold" }}>
              Week Number {diary.week}
            </Card.Body>
          </Card.Header>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              What have you achieved this week?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>{diary.q1}</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
              How would you implement what you have learned day to day?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>{diary.q2}</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="3">
              What could you improve on?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>{diary.q3}</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="4">
              Share an example of something that you struggled with?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="4">
            <Card.Body>{diary.q4}</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card.Header>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="5">
              What do I want to achieve next?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="5">
            <Card.Body>{diary.q5}</Card.Body>
          </Accordion.Collapse>
        </Card.Header>
      </Accordion>
      <br></br>
      <br></br>
    </>
  );
}

export default History;
