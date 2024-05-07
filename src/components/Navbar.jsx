import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Container, DropdownButton, Navbar, Dropdown } from "react-bootstrap";

import checkWeek from "../utils/checkWeek";
import isDarkMode from "../utils/isDarkMode";
import { groupData } from "../data/groupData";

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
    <DropdownButton
      variant="outline-primary"
      title={currentGroup}
      data-bs-theme={isDarkMode ? "dark" : "light"}
    >
      {Object.keys(groupData).map((group) => (
        <Dropdown.Item key={group} onClick={() => handleSelect(group)}>
          {group}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
}

export default function App({ currentGroup, setCurrentGroup }) {
  const groupLogo = `${groupData[currentGroup]?.image}`;

  return (
    <Navbar fixed="top">
      <Container>
        <Navbar.Brand>
          {groupLogo && <img src={groupLogo} alt="logo" />}
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
