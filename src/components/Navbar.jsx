import { useEffect, useState } from "react";
import { Container, DropdownButton, Navbar } from "react-bootstrap";

import { checkWeek } from "../App.jsx";
import GROUP_IMAGE from "../img/chat_logo.jpg";
import "../styles/Navbar.scss";

function WeekInfo() {
  const isOddWeek = checkWeek();
  const [weekText, setWeekText] = useState("");

  useEffect(() => {
    setWeekText(
      isOddWeek ? "Непарний тиждень: розклад" : "Парний тиждень: розклад"
    );
  }, [isOddWeek]);

  return (
    <h2>
      <b>{weekText}</b>
    </h2>
  );
}

export default function App() {
  return (
    <Navbar fixed="top">
      <Container>
        <Navbar.Brand>
          <img src={GROUP_IMAGE} alt="logo" />
          <WeekInfo />
        </Navbar.Brand>
        <DropdownButton
          variant="outline-primary"
          title="ІО-32"
        ></DropdownButton>
      </Container>
    </Navbar>
  );
}
