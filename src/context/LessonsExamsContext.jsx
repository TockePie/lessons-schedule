import { createContext, useState } from "react";

export const LessonsExamContext = createContext();

export const LessonsExamProvider = ({ children }) => {
  const [selectedTabKey, setSelectedTabKey] = useState(
    localStorage.getItem("isExams") === "1" ? "exams" : "lessons"
  );

  return (
    <LessonsExamContext.Provider value={{ selectedTabKey, setSelectedTabKey }}>
      {children}
    </LessonsExamContext.Provider>
  );
};
