import { useContext, useCallback } from "react";
import { Switch } from "@nextui-org/react";

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
    <div className="flex items-center justify-center mt-3">
      <Switch color="secondary" onValueChange={handleSelectionChange}>
        Інший тиждень
      </Switch>
    </div>
  );
}
