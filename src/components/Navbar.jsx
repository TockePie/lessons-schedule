import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import {
  Container,
  DropdownButton,
  Navbar,
  Dropdown,
  Form,
} from "react-bootstrap";

import checkWeek from "../utils/checkWeek";
import isDarkMode from "../utils/isDarkMode";
import { groupData } from "../data/groupData";

import "../styles/Navbar.scss";

function WeekInfo(props) {
  const isOddWeek = checkWeek();
  const [weekText, setWeekText] = useState("");

  useEffect(() => {
    switch (props.screen) {
      case "desktop":
        setWeekText(
          isOddWeek ? "Непарний тиждень: розклад" : "Парний тиждень: розклад"
        );
        break;
      case "mobile":
        setWeekText(isOddWeek ? "Непарний" : "Парний");
        break;
    }
  }, [isOddWeek, props.screen]);

  return (
    <h2>
      <b>{weekText}</b>
    </h2>
  );
}

function GroupDropdown(props) {
  const handleSelect = (group) => {
    props.setCurrentGroup(group);
    localStorage.setItem("group", group);
    if (group === "ІО-35") {
      props.setIsPwaZoom(false);
      localStorage.setItem("isPwaZoom", "0");
    }
  };

  const handlePwaZoom = () => {
    const newState = !props.isPwaZoom;
    props.setIsPwaZoom(newState);
    localStorage.setItem("isPwaZoom", newState ? "1" : "0");
  };

  return (
    <DropdownButton
      variant="outline-primary"
      title={props.currentGroup}
      data-bs-theme={isDarkMode() ? "dark" : "light"}
      align={{ md: "start" }}
      id="dropdown-menu-align-responsive-1"
    >
      <Dropdown.Header>
        <Form>
          <Form.Check
            type="switch"
            label="PWA ZOOM"
            id="custom-switch"
            onChange={handlePwaZoom}
            checked={props.isPwaZoom}
            disabled={localStorage.getItem("group") === "ІО-35"}
          />
        </Form>
      </Dropdown.Header>
      <Dropdown.Divider />
      {Object.keys(groupData).map((group) => (
        <Dropdown.Item key={group} onClick={() => handleSelect(group)}>
          {group}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
}

export default function App(props) {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 645 });
  const isMobile = useMediaQuery({ maxDeviceWidth: 645 });
  const groupLogo = groupData[props.currentGroup]?.image;

  return (
    <Navbar fixed="top">
      <Container>
        <Navbar.Brand>
          {groupLogo && <img src={groupLogo} alt="logo" />}
          {isDesktopOrLaptop && <WeekInfo screen="desktop" />}
        </Navbar.Brand>
        {isMobile && <WeekInfo screen="mobile" />}
        <GroupDropdown
          currentGroup={props.currentGroup}
          setCurrentGroup={props.setCurrentGroup}
          isPwaZoom={props.isPwaZoom}
          setIsPwaZoom={props.setIsPwaZoom}
        />
      </Container>
    </Navbar>
  );
}
