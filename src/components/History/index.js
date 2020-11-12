import React, { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import {Jumbotron, Accordion, Card, Button} from 'react-bootstrap';
import '../App/App.css';

function History() {
  const [week, setWeek] = useState(null);
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

  return (
    <>
  <div className="page-intro" >
      <Jumbotron>
  <h1>History of Achievements</h1>
  <br></br>
  <p>
    Use the drop-down bar below to look back and reflect on your progress from previous weekly forms.
  </p>
  <br></br>
  <p>
     <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Choose Week Number
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setWeek(1)}>
            1
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setWeek(2)}>
            2
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setWeek(3)}>
            3
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setWeek(4)}>
            4
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </p>
</Jumbotron>
</div>

<Accordion defaultActiveKey="0">

<Card>
  <Card.Header>
    <Card.Body style={{fontWeight: "bold"}}>Week Number {diary.week}</Card.Body>
  </Card.Header>
</Card>

  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
      What have you achieved this week?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>{diary.q1}</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
      How would you implement what you have learned day to day?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>{diary.q2}</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="2">
      What could you improve on?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
      <Card.Body>{diary.q3}</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="3">
      Share an example of something that you struggled with?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="3">
      <Card.Body>{diary.q4}</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="4">
      What do I want to achieve next?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="4">
      <Card.Body>{diary.q5}</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
<br>
</br>
<br>
</br>

      {/* <p className="date">{diary.week} </p>
      <p>What have you achieved this week?</p>
      <p className="q1">{diary.q1}</p>
      <p>How would you implement what you have learned day to day?</p>
      <p className="q2">{diary.q2}</p>
      <p>What could you improve on?</p>
      <p className="q3">{diary.q3}</p>
      <p>Share an example of something that you struggled with?</p>
      <p className="q4">{diary.q4}</p>
      <p>What do I want to achieve next?</p>
      <p className="q5">{diary.q5}</p> */}
      
      </>
  );
}

export default History;
