import { useContext } from "react";
import {
  Table,
  TableBody,
  TableColumn,
  TableHeader,
  TableCell,
  TableRow,
  Card,
  CardBody,
} from "@nextui-org/react";

import checkDay from "../utils/checkDay.js";
import checkWeek from "../utils/checkWeek.js";
import {
  lessonTypeToColor,
  days,
  rowIndices,
} from "../common/constants.js";
import { groupData } from "../data/groupData.js";

import { GroupContext } from "../context/GroupPlatformInfo.jsx";
import { MobileContext } from "../context/MobileContext.jsx";

const openLesson = (lesson, isPwaZoom) => {
  if (isPwaZoom) {
    if (lesson.urlPWA) {
      typeof lesson.urlPWA === "function"
        ? lesson.urlPWA()
        : window.open(lesson.urlPWA);
    }
  } else {
    if (lesson.url) {
      typeof lesson.url === "function" ? lesson.url() : window.open(lesson.url);
    }
  }
};

function DesktopTable({ currentGroup }) {
  const { isPwaZoom } = useContext(GroupContext);

  const defineObject = (rowName) => {
    const lessonsData = checkWeek()
      ? groupData[currentGroup]?.oddLessons
      : groupData[currentGroup]?.evenLessons;

    return lessonsData ? lessonsData[rowName] : [];
  };

  return (
    <div className="m-3">
      <Table aria-label="Lessons Table">
        <TableHeader columns={days}>
          <TableColumn key="lessons" className="max-w-10">
            <div className="flex justify-center">Пари</div>
          </TableColumn>
          {days.map((day) => (
            <TableColumn
              key={day.key}
              className={` ${
                checkDay() === day.key ? "bg-yellow-200 text-slate-950" : ""
              }`}
            >
              <div className="flex justify-center">{day.label}</div>
            </TableColumn>
          ))}
        </TableHeader>
        <TableBody
          emptyContent={
            <div className="flex flex-col justify-center">
              <b>Розклад відсутній. Оберіть групу, щоб побачити заняття.</b>
            </div>
          }
        >
          {rowIndices.map(([rowName, time], i) => {
            if (currentGroup === "Оберіть групу") return;

            return (
              <TableRow key={rowName}>
                <TableCell className="min-w-16">
                  <Card
                    aria-label="Time Card"
                    className="text-nowrap h-[17vh] noselect"
                  >
                    <CardBody>
                      <CardBody className="flex items-center justify-between px-2">
                        <p>{time.start}</p>
                        <b className="text-large">{i + 1} пара</b>
                        <p>{time.end}</p>
                      </CardBody>
                    </CardBody>
                  </Card>
                </TableCell>
                {defineObject(rowName).map((lesson, index) => (
                  <TableCell key={index} className="min-w-48 max-w-48">
                    {lesson.lessonType != null && (
                      <Card
                        aria-label="Lesson Card"
                        className={`noselect ${
                          lessonTypeToColor[lesson.lessonType]
                        } h-[17vh] active:bg-zinc-300 hover:bg-zinc-200 dark:active:bg-zinc-800 dark:hover:bg-zinc-700 cursor-pointer border-1 w-full`}
                        isPressable
                        onPress={() => openLesson(lesson, isPwaZoom)}
                      >
                        <CardBody className="flex items-center justify-center">
                          <b className="mt-auto mb-auto text-center text-xl p-2">
                            {lesson.lessonName}
                          </b>
                          <a>{lesson.teacher}</a>
                        </CardBody>
                      </Card>
                    )}
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

function MobileTable({ currentGroup }) {
  let curDayUa;
  switch (checkDay()) {
    case "mon":
      curDayUa = "Понеділок";
      break;
    case "tue":
      curDayUa = "Вівторок";
      break;
    case "wed":
      curDayUa = "Середа";
      break;
    case "thu":
      curDayUa = "Четвер";
      break;
    case "fri":
      curDayUa = "П'ятниця";
      break;
    case "sat":
      curDayUa = "Субота";
      break;
  }

  const lessonsData = checkWeek()
    ? groupData[currentGroup]?.oddLessons
    : groupData[currentGroup]?.evenLessons;

  const getLessonsForDay = (day, rowName) => {
    return (
      lessonsData?.[rowName]?.filter((lesson) => lesson.dayOfWeek === day) || []
    );
  };

  return (
    <div className="m-2">
      <Table aria-label="Lessons Table">
        <TableHeader columns={days}>
          <TableColumn key="lessons" className="max-w-10">
            <div className="flex justify-center">Пари</div>
          </TableColumn>
          <TableColumn>
            <div className="flex justify-center">{curDayUa}</div>
          </TableColumn>
        </TableHeader>
        <TableBody
          emptyContent={
            <div className="flex flex-col justify-center">
              <b>Розклад відсутній. Оберіть групу, щоб побачити заняття.</b>
            </div>
          }
        >
          {rowIndices.map(([rowName, time], i) => {
            if (currentGroup === "Оберіть групу") return;
            const lessonRow = getLessonsForDay(checkDay(), rowName);

            return (
              <TableRow key={rowName}>
                <TableCell className="min-w-16">
                  <Card
                    aria-label="Time Card"
                    className="text-nowrap h-[17vh] noselect"
                  >
                    <CardBody>
                      <CardBody className="flex items-center justify-between px-2">
                        <p>{time.start}</p>
                        <b className="text-large">{i + 1} пара</b>
                        <p>{time.end}</p>
                      </CardBody>
                    </CardBody>
                  </Card>
                </TableCell>
                <TableCell className="min-w-48 max-w-48">
                  {lessonRow.length > 0 ? (
                    lessonRow.map((lesson, idx) => (
                      <Card
                        key={idx}
                        aria-label="Lesson Card"
                        className={`noselect ${
                          lessonTypeToColor[lesson.lessonType]
                        } h-[17vh] active:bg-zinc-300 hover:bg-zinc-200 dark:active:bg-zinc-800 dark:hover:bg-zinc-700 cursor-pointer border-1 w-full`}
                        isPressable
                        onPress={() => openLesson(lesson, false)}
                      >
                        <CardBody className="flex items-center justify-center">
                          <b className="mt-auto mb-auto text-center text-xl p-2">
                            {lesson.lessonName}
                          </b>
                          <a>{lesson.teacher}</a>
                        </CardBody>
                      </Card>
                    ))
                  ) : (
                    <Card
                      aria-label="No Lesson Card"
                      className="noselect h-[17vh]"
                    >
                      <CardBody className="flex items-center justify-center">
                        <b className="mt-auto mb-auto text-center text-xl p-2">
                          No lessons
                        </b>
                      </CardBody>
                    </Card>
                  )}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default function Main() {
  const { isDesktopOrLaptop, isMobile } = useContext(MobileContext);
  const { currentGroup } = useContext(GroupContext);

  if (isDesktopOrLaptop) {
    return <DesktopTable currentGroup={currentGroup} />;
  }

  if (isMobile) {
    return <MobileTable currentGroup={currentGroup} />;
  }

  return null;
}
