import { Card } from "react-bootstrap";

import { groupData } from "../../data/groupData.js";

export default function Lessons({ ...props }) {
  const lessonTypeToColor = {
    lecture: "primary",
    practice: "danger",
    lab: "success",
  };

  const lessonsData = props.isOddWeek
    ? groupData[props.group]?.oddLessons
    : groupData[props.group]?.evenLessons;
  const lessonsRow = lessonsData[props.rowIndex];

  return (
    <>
      {lessonsRow.map((lesson, index) => (
        <th
          key={index}
          className={`col-2 ${lesson.lessonName === null ? "null-lesson" : ""}`}
        >
          <Card
            border={lessonTypeToColor[lesson.lessonType]}
            width="100%"
            onClick={() => {
              if (lesson.url) {
                if (typeof lesson.url === "function") {
                  lesson.url();
                } else {
                  window.open(lesson.url);
                }
              }
            }}
          >
            <Card.Body>
              <Card.Text className="lesson-name">
                <b>{lesson.lessonName}</b>
              </Card.Text>
              <Card.Text className="lesson-teacher">{lesson.teacher}</Card.Text>
            </Card.Body>
          </Card>
        </th>
      ))}
    </>
  );
}
