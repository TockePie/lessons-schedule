import { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";

import checkWeek from "../../utils/checkWeek";
import getWeekText from "../../utils/getWeekText";

const examText = (screen) => {
  switch (screen) {
    case "desktop":
      return "Розклад іспитів";
    case "mobile":
      return "Іспити";
    default:
      return "";
  }
};

export default function WeekInfo(props) {
  const isOddWeek = useMemo(checkWeek, []);
  const [weekText, setWeekText] = useState("");
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/lessons-schedule":
        setWeekText(getWeekText(props.screen, isOddWeek));
        break;
      case "/lessons-schedule/exams":
        setWeekText(examText(props.screen));
        break;
      default:
        break;
    }
  }, [isOddWeek, location.pathname, props.screen]);

  return <b className={`p-3 text-2xl ${props.className}`}>{weekText}</b>;
}
