import { createContext, useState } from "react";

import checkDay from "../utils/checkDay";

export const ManualDayContext = createContext();

export const ManualDayProvider = ({ children }) => {
  const [selectedDay, setSelectedDay] = useState(checkDay());

  return (
    <ManualDayContext.Provider value={{ selectedDay, setSelectedDay }}>
      {children}
    </ManualDayContext.Provider>
  );
};
