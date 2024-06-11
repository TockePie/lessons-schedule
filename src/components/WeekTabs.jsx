import { useContext, useCallback } from "react";
import { Button } from "@nextui-org/react";

import { ManualScheduleContext } from "../context/ManualScheduleContext";
import { LessonsExamContext } from "../context/LessonsExamsContext";

export default function WeekTabs() {
  const { setIsManualWeek } = useContext(ManualScheduleContext);
  const { selectedTabKey } = useContext(LessonsExamContext);

  const handleSelectionChange = useCallback(() => {
    setIsManualWeek((prev) => !prev);
  }, [setIsManualWeek]);

  if (selectedTabKey === "exams") return null;

  return (
    // <Tabs
    //   className="flex items-center justify-center mt-3"
    //   defaultSelectedKey={checkWeek() ? "odd" : "even"}
    //   onSelectionChange={handleSelectionChange}
    // >
    //   <Tab title="Парний" key="even" />
    //   <Tab title="Непарний" key="odd" />
    // </Tabs>
    <div className="flex items-center justify-center mt-3">
      <Button onClick={handleSelectionChange}>Інший тиждень</Button>
    </div>
  );
}
