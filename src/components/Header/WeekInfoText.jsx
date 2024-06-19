import { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";

import checkWeek from "../../utils/checkWeek";
import { getWeekText, getExamText } from "../../utils/getData";

export default function WeekInfo(props) {
  const isOddWeek = useMemo(checkWeek, []);
  const [weekText, setWeekText] = useState("");
  const location = useLocation();
  const pathname = location.pathname.replace(/\/$/, '');

  useEffect(() => {
    switch (pathname) {
      case "/lessons-schedule":
        setWeekText(getWeekText(props.screen, isOddWeek));
        break;
      case "/lessons-schedule/exams":
        setWeekText(getExamText(props.screen));
        break;
    }
  }, [isOddWeek, pathname, props.screen]);

  return <b className={`p-3 text-2xl ${props.className}`}>{weekText}</b>;
}
