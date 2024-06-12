import { useState, useEffect, useMemo, useContext } from "react";

import checkWeek from "../../utils/checkWeek";
import getWeekText from "../../utils/getWeekText";
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
