import { Table, Card, Container } from "react-bootstrap";

import "../styles/LessonsTable.scss";
import { checkWeek } from "../App.jsx";
import { evenLessons, oddLessons } from "../data/io-32.js";

function DaysOfWeek() {
  return (
    <thead>
      <tr className="text-center">
        <th id="lessons" className="col-1">Пари</th>
        <th>Понеділок</th>
        <th>Вівторок</th>
        <th>Середа</th>
        <th>Четвер</th>
        <th>П'ятниця</th>
        <th>Субота</th>
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
        <th key={index} className="col-2">
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
              <Card.Title>{lesson.lessonName}</Card.Title>
              <Card.Text>{lesson.teacher}</Card.Text>
            </Card.Body>
          </Card>
        </th>
      ))}
    </>
  );
}

function getBackgroundColor() {
  if (checkWeek) {
    return "#FFE8E8";
  } else {
    return "#E5E8FF";
  }
}

export default function Main() {
  return (
    <div style={{ overflow: "hidden" }}>
      <div className="table-bg">
        <Table striped bordered>
          <DaysOfWeek />
          <tbody>
            <tr>
              <th>1 пара</th>
              <Lessons isOddWeek={checkWeek()} rowIndex="firstLessonsRow" />
            </tr>
            <tr>
              <th >2 пара</th>
              <Lessons isOddWeek={checkWeek()} rowIndex="secondLessonsRow" />
            </tr>
            <tr>
              <th className="custom-th">3 пара</th>
              <Lessons isOddWeek={checkWeek()} rowIndex="thirdLessonsRow" />
            </tr>
            <tr>
              <th className="custom-th">4 пара</th>
              <Lessons isOddWeek={checkWeek()} rowIndex="fourthLessonsRow" />
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}
