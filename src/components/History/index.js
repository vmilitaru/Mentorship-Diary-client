import React, { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";

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
    <div>
      
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Choose which week
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

      <p className="date">{diary.week} </p>
      <p>What have I achieved this week?</p>
      <p className="q1">{diary.q1}</p>
      <p>how would you implement what you have learned day to day?</p>
      <p className="q2">{diary.q2}</p>
      <p>What could I improve on?</p>
      <p className="q3">{diary.q3}</p>
      <p>share an example of something that you struggled with?</p>
      <p className="q4">{diary.q4}</p>
      <p>What do I want to achieve next?</p>
      <p className="q5">{diary.q5}</p>
    </div>
  );
}

export default History;
