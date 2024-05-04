import { useEffect, useState } from "react";
import { Container, DropdownButton, Navbar, Dropdown } from "react-bootstrap";
import Cookies from "js-cookie";

import checkWeek from "./checkWeek";
import IO32_GROUP_IMAGE from "../assets/chat_logo_io-32.svg";
import IO35_GROUP_IMAGE from "../assets/chat_logo_io-35.jpg";
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

function GroupDropdown({ currentGroup, setCurrentGroup }) {
  const handleSelect = (group) => {
    setCurrentGroup(group);
    Cookies.set("group", group);
  };

  return (
    <DropdownButton variant="outline-primary" title={currentGroup} data-bs-theme="dark">
      <Dropdown.Item onClick={() => handleSelect("ІО-32")}>ІО-32</Dropdown.Item>
      <Dropdown.Item onClick={() => handleSelect("ІО-35")}>ІО-35</Dropdown.Item>
    </DropdownButton>
  );
}

export default function App({ currentGroup, setCurrentGroup }) {
  return (
    <Navbar fixed="top">
      <Container>
        <Navbar.Brand>
          {currentGroup === "ІО-32" && (
            <img src={IO32_GROUP_IMAGE} alt="logo" />
          )}
          {currentGroup === "ІО-35" && (
            <img src={IO35_GROUP_IMAGE} alt="logo" />
          )}
          <WeekInfo />
        </Navbar.Brand>
        <GroupDropdown
          currentGroup={currentGroup}
          setCurrentGroup={setCurrentGroup}
        />
      </Container>
    </Navbar>
  );
}
