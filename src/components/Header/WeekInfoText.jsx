import { useState, useEffect, useMemo, useContext } from "react";

import checkWeek from "../../utils/checkWeek";
import { LessonsExamContext } from "../../context/LessonsExamsContext";

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

export default function WeekInfo(props) {
  const { selectedTabKey } = useContext(LessonsExamContext);
  const isOddWeek = useMemo(checkWeek, []);
  const [weekText, setWeekText] = useState("");

  useEffect(() => {
    const newText =
      selectedTabKey === "exams"
        ? examText(props.screen)
        : getWeekText(props.screen, isOddWeek);
        
    setWeekText(newText);
  }, [isOddWeek, props.screen, selectedTabKey]);

  return <b className={`p-3 text-2xl ${props.className}`}>{weekText}</b>;
}
