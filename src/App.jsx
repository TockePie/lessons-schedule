import Cookies from "js-cookie";
import { useState } from "react";

import "./styles/App.css";
import Navbar from "./components/Navbar";
import LessonsTable from "./components/lessons-table/LessonsTable";

export default function App() {
  const [currentGroup, setCurrentGroup] = useState(
    Cookies.get("group") || "Оберіть групу"
  );

  return (
    <>
      <Navbar currentGroup={currentGroup} setCurrentGroup={setCurrentGroup} />
      <main>
        <LessonsTable currentGroup={currentGroup} />
      </main>
    </>
  );
}
