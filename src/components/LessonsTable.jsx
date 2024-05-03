import { Table, Card } from "react-bootstrap";

import "../styles/LessonsTable.scss";
import checkWeek from "./checkWeek.js";
import { evenLessons, oddLessons } from "../data/io-32.js";

function checkDay() {
  const currentDay = new Date().getDay();
  return currentDay;
}

function DaysOfWeek() {
  const currentDay = checkDay();
  const days = [
    "Понеділок",
    "Вівторок",
    "Середа",
    "Четвер",
    "П'ятниця",
    "Субота",
  ];

  return (
    <thead>
      <tr className="text-center">
        <th id="lessons" className="col-1">
          Пари
        </th>
        {days.map((day, index) => (
          <th
            key={index}
            className={currentDay === index + 1 ? "highlight" : ""}
          >
            {day}
          </th>
        ))}
      </tr>
    </thead>
  );
}

function Lessons({ ...props }) {
  const lessonTypeToColor = {
    lecture: "primary",
    practice: "danger",
    lab: "success",
  };

  const lessonsData = props.isOddWeek ? oddLessons : evenLessons;
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

export default function Main() {
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
    <div style={{ overflow: "hidden" }}>
      <div className="table-bg">
        <Table striped bordered>
          <DaysOfWeek />
          <tbody>
            {rowIndices.map((rowIndex, i) => (
              <tr className={i < 3 ? "hr-row" : ""} key={i}>
                <th>
                  <Card>
                    <div className="lesson-time">
                      <Card.Body>
                        <Card.Text>{lessonTime[i].start}</Card.Text>
                        <Card.Text className="lesson-index">
                          {i + 1} пара
                        </Card.Text>
                        <Card.Text>{lessonTime[i].end}</Card.Text>
                      </Card.Body>
                    </div>
                  </Card>
                </th>
                <Lessons isOddWeek={checkWeek()} rowIndex={rowIndex} />
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
