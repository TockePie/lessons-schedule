import { createContext, useState } from "react";

export const GroupContext = createContext();

export const GroupProvider = ({ children }) => {
  const [currentGroup, setCurrentGroup] = useState(
    localStorage.getItem("group") || "Оберіть групу"
  );
  
  const [isPwaZoom, setIsPwaZoom] = useState(
    localStorage.getItem("isPwaZoom") === "1" ? true : false
  );

  return (
    <GroupContext.Provider
      value={{ currentGroup, setCurrentGroup, isPwaZoom, setIsPwaZoom }}
    >
      {children}
    </GroupContext.Provider>
  );
};
