import { createContext, useState } from "react";

export const ManualScheduleContext = createContext();

export const ManualScheduleProvider = ({ children }) => {
  const [isManualWeek, setIsManualWeek] = useState(false);

  return (
    <ManualScheduleContext.Provider value={{ isManualWeek, setIsManualWeek }}>
      {children}
    </ManualScheduleContext.Provider>
  );
};
