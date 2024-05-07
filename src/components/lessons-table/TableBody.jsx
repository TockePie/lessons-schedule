import { Card } from "react-bootstrap";

import { groupData } from "../../data/groupData";
import Lessons from "./BlocksOfLessons";
import checkWeek from "../../utils/checkWeek";

export default function TableBody(props) {
  const rowIndices = [
    "firstLessonsRow",
    "secondLessonsRow",
    "thirdLessonsRow",
    "fourthLessonsRow",
  ];

  const lessonTime = [
    { start: "08:30", end: "10:05" },
    { start: "10:25", end: "12:00" },
    { start: "12:20", end: "13:55" },
    { start: "14:10", end: "15:50" },
  ];

  return (
    <tbody>
      {rowIndices.map((rowIndex, i) => (
        <tr className={i < 3 ? "hr-row" : ""} key={i}>
          <th>
            <Card>
              <div className="lesson-time">
                <Card.Body>
                  <Card.Text>{lessonTime[i].start}</Card.Text>
                  <Card.Text className="lesson-index">{i + 1} пара</Card.Text>
                  <Card.Text>{lessonTime[i].end}</Card.Text>
                </Card.Body>
              </div>
            </Card>
          </th>
          {groupData[props.currentGroup] && (
            <Lessons
              isOddWeek={checkWeek()}
              rowIndex={rowIndex}
              group={props.currentGroup}
            />
          )}
        </tr>
      ))}
    </tbody>
  );
}
