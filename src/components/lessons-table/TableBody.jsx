import { Card } from "react-bootstrap";

import { groupData } from "../../data/groupData";
import {
  lessonTime,
  rowIndices,
} from "../../common/constants";
import Lessons from "./BlocksOfLessons";
import checkWeek from "../../utils/checkWeek";

export default function TableBody(props) {
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
              isPwaZoom={props.isPwaZoom}
            />
          )}
        </tr>
      ))}
    </tbody>
  );
}
