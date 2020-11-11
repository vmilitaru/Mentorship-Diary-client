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
          <Dropdown.Item onClick={() => setWeek(1)} href="#/action-1">
            1
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setWeek(2)} href="#/action-2">
            2
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setWeek(3)} href="#/action-3">
            3
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setWeek(4)} href="#/action-4">
            4
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <p className="date">{diary.week} </p>
      <p className="q1">{diary.q1}</p>
      <p className="q2">{diary.q2}</p>
      <p className="q3">{diary.q3}</p>
      <p className="q4">{diary.q4}</p>
      <p className="q5">{diary.q5}</p>
    </div>
  );
}

export default History;
