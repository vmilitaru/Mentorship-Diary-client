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
      </Jumbotron>
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
          </Dropdown.Menu>
        </Dropdown>
      </p>

      <History week={week} uuid={currentUser} />
    </div>
  );
};

export default DropDown;
