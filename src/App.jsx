import "./styles/App.css";
import Navbar from "./components/Navbar";
import LessonsTable from "./components/LessonsTable";

export function checkWeek() {
  let now = new Date();
  let start = new Date(now.getFullYear(), 0, 0);

  let diff = now - start;
  let oneDay = 1000 * 60 * 60 * 24;
  let day = Math.floor(diff / oneDay);
  let weekNumber = Math.ceil(day / 7);
  return weekNumber % 2 === 1;
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <LessonsTable />
      </main>
    </>
  );
}

export default App;
