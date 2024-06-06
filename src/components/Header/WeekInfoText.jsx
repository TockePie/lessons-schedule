import { useState, useEffect, useMemo } from "react";

import checkWeek from "../../utils/checkWeek";

export default function WeekInfo(props) {
  const isOddWeek = useMemo(checkWeek, []);
  const [weekText, setWeekText] = useState("");

  const getWeekText = (screen, isOdd) => {
    switch (screen) {
      case "desktop":
        return isOdd ? "Непарний тиждень: розклад" : "Парний тиждень: розклад";
      case "mobile":
        return isOdd ? "Непарний" : "Парний";
      default:
        return "";
    }
  };

  useEffect(() => {
    setWeekText(getWeekText(props.screen, isOddWeek));
  }, [isOddWeek, props.screen]);

  return <b className={`p-3 text-2xl ${props.className}`}>{weekText}</b>;
}
