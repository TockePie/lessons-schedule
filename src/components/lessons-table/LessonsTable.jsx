import { Table } from "react-bootstrap";

import "../../styles/LessonsTable.scss";
import DaysOfWeek from "./DaysOfWeek.jsx";
import TableBody from "./TableBody.jsx";

export default function Main(props) {
  return (
    <div style={{ overflow: "hidden" }}>
      <div className="table-bg">
        <Table striped bordered data-bs-theme="dark">
          <DaysOfWeek />
          <TableBody currentGroup={props.currentGroup} />
        </Table>
      </div>
    </div>
  );
}
