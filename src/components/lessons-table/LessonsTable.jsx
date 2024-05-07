import { Table } from "react-bootstrap";

import isDarkMode from "../../utils/isDarkMode";
import DaysOfWeekRow from "./DaysOfWeekRow.jsx";
import TableBody from "./TableBody.jsx";

import "../../styles/LessonsTable.scss";

export default function Main(props) {
  return (
    <div style={{ overflow: "hidden" }}>
      <div className="table-bg">
        <Table striped bordered data-bs-theme={isDarkMode ? "dark" : "light"}>
          <DaysOfWeekRow />
          <TableBody currentGroup={props.currentGroup} />
        </Table>
      </div>
    </div>
  );
}
