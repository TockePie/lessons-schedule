import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Switch } from "@nextui-org/react";

import { setIsManualWeek } from "../store/manualSchedule";

export default function WeekTabs() {
  const { selectedTabKey } = useSelector((state) => state.lessonsExam);

  const dispatch = useDispatch();

  const handleSelectionChange = useCallback(() => {
    dispatch(setIsManualWeek((prev) => !prev));
  }, [dispatch]);

  if (selectedTabKey === "exams") return null;

  return (
    <div className="flex items-center justify-center mt-3">
      <Switch color="secondary" onValueChange={handleSelectionChange}>
        Інший тиждень
      </Switch>
    </div>
  );
}
