import { Card } from "react-bootstrap";

import {
  evenLessons as evenLessonsIO32,
  oddLessons as oddLessonsIO32,
} from "../../data/io-32.js";
import {
  evenLessons as evenLessonsIO35,
  oddLessons as oddLessonsIO35,
} from "../../data/io-35.js";

export default function Lessons({ ...props }) {
  const lessonTypeToColor = {
    lecture: "primary",
    practice: "danger",
    lab: "success",
  };

  const lessonsData =
    props.group === "ІО-32"
      ? props.isOddWeek
        ? oddLessonsIO32
        : evenLessonsIO32
      : props.isOddWeek
      ? oddLessonsIO35
      : evenLessonsIO35;
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
