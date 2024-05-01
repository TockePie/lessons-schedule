import "../styles/Main.css";
import { checkWeek } from "./Navbar.jsx";
import { evenLessons, oddLessons } from "../data/io-32.js";

function DaysOfWeek() {
  const days = [
    "Понеділок",
    "Вівторок",
    "Середа",
    "Четвер",
    "П'ятниця",
    "Субота",
  ];
  const ids = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  return (
    <>
      {days.map((day, index) => (
        <div
          id={ids[index]}
          key={ids[index]}
          style={{ font: "20px 'montserrat'", color: "#006A98" }}
        >
          {day}
        </div>
      ))}
    </>
  );
}

function Lessons({ ...props }) {
  const lessons = props.isOddWeek ? oddLessons : evenLessons;

  return (
    <>
      {lessons.map((dayLessons, i) =>
        dayLessons.map((lesson, j) => {
          const elementClass = `l${i + 1}-row-${j + 1}`;

          if (lesson.lessonName == null && lesson.teacher == null) {
            return (
              <div className={`null-lesson-info-block ${elementClass}`} key={j}>
                {/* Other elements or content */}
              </div>
            );
          } else {
            return (
              <div
                className={`lesson-info-block ${elementClass} ${lesson.lessonType}`}
                key={j}
              >
                <div
                  className="lesson-name"
                  onClick={() => {
                    if (typeof lesson.url === "function") {
                      lesson.url();
                    } else {
                      window.open(lesson.url, "_blank");
                    }
                  }}
                >
                  {lesson.lessonName}
                </div>
                <div className="lesson-teacher">{lesson.teacher}</div>
              </div>
            );
          }
        })
      )}
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

export default function Background() {
  return (
    <div style={{ overflow: "hidden" }}>
      <div className="background-rectangle" style={{backgroundColor: getBackgroundColor()}}>
        <div className="days-of-the-week">
          <DaysOfWeek />
          <div className="separate-lines"></div>
          <Lessons
            isOddWeek={checkWeek}
            oddLessons={oddLessons}
            evenLessons={evenLessons}
          />
        </div>
      </div>
    </div>
  );
}
