import { useEffect, useState } from "react";

import { GROUP } from "../data/io-32";
import GROUP_IMAGE from "../img/chat_logo.jpg";
import "../styles/Navbar.css";

export function checkWeek() {
  let now = new Date();
  let start = new Date(now.getFullYear(), 0, 0);

  let diff = now - start;
  let oneDay = 1000 * 60 * 60 * 24;
  let day = Math.floor(diff / oneDay);
  let weekNumber = Math.ceil(day / 7);
  return weekNumber % 2 === 1;
}

function WeekInfo() {
  const isOddWeek = checkWeek();
  const [weekText, setWeekText] = useState("");

  useEffect(() => {
    setWeekText(
      isOddWeek ? "Непарний тиждень: розклад" : "Парний тиждень: розклад"
    );
  }, [isOddWeek]);

  return <b id="weekInfo">{weekText}</b>;
}

function GroupInfo() {
  return <b id="academic-group">{GROUP}</b>;
}

export default function App() {
  return (
    <header className="navbar">
      <div className="header-content">
        <div className="header-left">
          <img src={GROUP_IMAGE} alt="logo" id="chat_logo" />
          <WeekInfo />
        </div>
          <GroupInfo />
      </div>
    </header>
  );
}
