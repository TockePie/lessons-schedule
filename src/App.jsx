import Cookies from "js-cookie";
import { useState } from "react";

import Navbar from "./components/Navbar";
import LessonsTable from "./components/lessons-table/LessonsTable";

import "./styles/App.scss";

export default function App() {
  const [currentGroup, setCurrentGroup] = useState(
    Cookies.get("group") || "Оберіть групу"
  );

  const initialPwaZoom = Cookies.get("isPwaZoom") === "1" ? true : false;
  const [isPwaZoom, setIsPwaZoom] = useState(initialPwaZoom);

  return (
    <>
      <Navbar
        currentGroup={currentGroup}
        setCurrentGroup={setCurrentGroup}
        isPwaZoom={isPwaZoom}
        setIsPwaZoom={setIsPwaZoom}
      />
      <main>
        <LessonsTable 
          currentGroup={currentGroup}
          isPwaZoom={isPwaZoom}
          />
      </main>
    </>
  );
}
