import { useContext, useCallback } from "react";
import { Tab, Tabs } from "@nextui-org/react";

import checkWeek from "../utils/checkWeek";
import { ManualScheduleContext } from "../context/ManualScheduleContext";
import { LessonsExamContext } from "../context/LessonsExamsContext";

export default function WeekTabs() {
  const { setIsManualWeek } = useContext(ManualScheduleContext);
  const { selectedTabKey } = useContext(LessonsExamContext);

  const handleSelectionChange = useCallback(
    (key) => {
      setIsManualWeek(key === "even");
    },
    [setIsManualWeek]
  );

  if (selectedTabKey === "exams") return null;

  return (
    <Tabs
      className="flex items-center justify-center mt-3"
      defaultSelectedKey={checkWeek() ? "odd" : "even"}
      onSelectionChange={handleSelectionChange}
    >
      <Tab title="Парний" key="even" />
      <Tab title="Непарний" key="odd" />
    </Tabs>
  );
}
