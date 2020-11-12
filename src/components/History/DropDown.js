import React, { useContext, useState, useEffect } from "react";
import { auth } from "../../firebase/firebase";
import { Jumbotron, Dropdown } from "react-bootstrap";
import History from "./index";
const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}
const DropDown = () => {
  const [currentUser, setCurrentUser] = useState();
  const [week, setWeek] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user.uid);
      console.log(currentUser);
    });

    return unsubscribe;
  }, [currentUser]);

  return (
    <div className="page-intro">
      <Jumbotron>
        <h1>History of Achievements</h1>
        <br></br>
        <p>
          Use the drop-down bar below to look back and reflect on your progress
          from previous weekly forms.
        </p>
        <br></br>

        <p>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Choose Week Number
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setWeek(1)}>1</Dropdown.Item>
              <Dropdown.Item onClick={() => setWeek(2)}>2</Dropdown.Item>
              <Dropdown.Item onClick={() => setWeek(3)}>3</Dropdown.Item>
              <Dropdown.Item onClick={() => setWeek(4)}>4</Dropdown.Item>
              <Dropdown.Item onClick={() => setWeek(5)}>5</Dropdown.Item>
              <Dropdown.Item onClick={() => setWeek(6)}>6</Dropdown.Item>
              <Dropdown.Item onClick={() => setWeek(7)}>7</Dropdown.Item>
              <Dropdown.Item onClick={() => setWeek(8)}>8</Dropdown.Item>
              <Dropdown.Item onClick={() => setWeek(9)}>9</Dropdown.Item>
              <Dropdown.Item onClick={() => setWeek(10)}>10</Dropdown.Item>
              <Dropdown.Item onClick={() => setWeek(11)}>11</Dropdown.Item>
              <Dropdown.Item onClick={() => setWeek(12)}>12</Dropdown.Item>
              <Dropdown.Item onClick={() => setWeek(13)}>13</Dropdown.Item>
              <Dropdown.Item onClick={() => setWeek(14)}>14</Dropdown.Item>
              <Dropdown.Item onClick={() => setWeek(15)}>15</Dropdown.Item>
              <Dropdown.Item onClick={() => setWeek(16)}>16</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </p>
      </Jumbotron>
      <History week={week} uuid={currentUser} />
    </div>
  );
};

export default DropDown;
