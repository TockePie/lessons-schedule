import "./styles/App.css";
import Navbar from "./components/Navbar";
import LessonsTable from "./components/LessonsTable";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <LessonsTable />
      </main>
    </>
  );
}
