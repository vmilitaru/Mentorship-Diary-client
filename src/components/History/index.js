import React, { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";

function History() {
  const [date, setDate] = useState(null);
  const [diary, setDiary] = useState([]);

  useEffect(() => {
    async function getQ1() {
      const res = await fetch(`http://localhost:3000/${date}`);
      const data = await res.json();
      console.log(data);
      setDiary(data.payload);
    }
    if (date !== null) {
      getQ1();
    }
  }, [date]);
  console.log(date);
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Choose A Date
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setDate(1)} href="#/action-1">
            1
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setDate(24)} href="#/action-2">
            2
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setDate(2)} href="#/action-3">
            3
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <p className="date">{diary.date} </p>
      <p className="q1">{diary.q1}</p>
      <p className="q2">{diary.q2}</p>
      <p className="q3">{diary.q3}</p>
      <p className="q4">{diary.q4}</p>
      <p className="q5">{diary.q5}</p>
    </div>
  );
}

export default History;
