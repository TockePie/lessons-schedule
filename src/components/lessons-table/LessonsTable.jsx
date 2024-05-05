import { Table } from "react-bootstrap";

import "../../styles/LessonsTable.scss";
import DaysOfWeek from "./DaysOfWeek.jsx";
import TableBody from "./TableBody.jsx";

export default function Main(props) {
  const isDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  return (
    <div style={{ overflow: "hidden" }}>
      <div className="table-bg">
        <Table striped bordered data-bs-theme={isDarkMode ? "dark" : "light"}>
          <DaysOfWeek />
          <TableBody currentGroup={props.currentGroup} />
        </Table>
      </div>
    </div>
  );
}
