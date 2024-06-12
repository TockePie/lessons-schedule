import { useContext, Fragment, useMemo, useCallback } from "react";
import useScreenOrientation from "react-hook-screen-orientation";
import {
  Card,
  CardBody,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableCell,
  TableRow,
} from "@nextui-org/react";

import checkDay from "../../utils/checkDay.js";
import checkWeek from "../../utils/checkWeek.js";
import openLesson from "../../utils/openLesson.js";
import { currentDay } from "../../utils/getUkrainianWeek.js";

import { groupData } from "../../data/groupData.js";
import { lessonTypeToColor, rowIndices } from "../../common/constants.js";
import { GroupContext } from "../../context/GroupPlatformInfo.jsx";
import { ManualScheduleContext } from "../../context/ManualScheduleContext.jsx";

export default function MobileTable() {
  const { currentGroup } = useContext(GroupContext);
  const { isManualWeek } = useContext(ManualScheduleContext);
  const screenOrientation = useScreenOrientation();

  const getLessonsForDay = useCallback(
    (day, rowName) => {
      const isOddWeek = isManualWeek ? !checkWeek() : checkWeek();
      const lessonsData = isOddWeek
        ? groupData[currentGroup]?.oddLessons
        : groupData[currentGroup]?.evenLessons;

      return (
        lessonsData?.[rowName]?.filter((lesson) => lesson.dayOfWeek === day) ||
        []
      );
    },
    [currentGroup, isManualWeek]
  );

  const orientationValues = useCallback(
    (special, defaultValue) => {
      switch (screenOrientation) {
        case "landscape-primary":
          return special;
        case "landscape-secondary":
          return special;
        default:
          return defaultValue;
      }
    },
    [screenOrientation]
  );

  const memorizedTableHeader = useMemo(
    () => (
      <TableHeader>
        <TableColumn
          key="lessons"
          className={`${isManualWeek && "bg-red-200 text-slate-900"} max-w-10`}
        >
          <div className="flex justify-center">Пари</div>
        </TableColumn>
        <TableColumn
          className={`${isManualWeek && "bg-red-200 text-slate-900"}`}
        >
          <div className="flex justify-center">
            {new Date().getDay() === 0 ? "Неділя" : currentDay()}
          </div>
        </TableColumn>
      </TableHeader>
    ),
    [isManualWeek]
  );

  const memorizedTableBody = useMemo(
    () => (
      <TableBody
        emptyContent={
          new Date().getDay() === 0 ? (
            <div className="flex flex-col justify-center">
              <b>Сьогодні неділя. Відпочивайте!</b>
            </div>
          ) : (
            <div className="flex flex-col justify-center">
              <b>Розклад відсутній. Оберіть групу, щоб побачити заняття.</b>
            </div>
          )
        }
      >
        {rowIndices.map(([rowName, time], i) => {
          if (currentGroup === "Оберіть групу") return;
          const lessonRow = getLessonsForDay(checkDay(), rowName);
          if (getLessonsForDay(checkDay(), rowName).length === 0) return;

          return (
            <TableRow key={rowName}>
              <TableCell className="min-w-16">
                <Card
                  aria-label="Time Card"
                  className={`text-nowrap noselect ${orientationValues(
                    "h-full",
                    "h-[17vh]"
                  )}`}
                >
                  <CardBody>
                    <CardBody className="flex items-center justify-between px-2 overflow-y-hidden">
                      <p>{time.start}</p>
                      <b className="text-large">{i + 1} пара</b>
                      <p>{time.end}</p>
                    </CardBody>
                  </CardBody>
                </Card>
              </TableCell>
              <TableCell className="min-w-44 max-w-44">
                {lessonRow.map((lesson, idx) => (
                  <Fragment key={lesson.id || `lesson-${idx}`}>
                    {lesson.lessonType != null && (
                      <Card
                        key={idx}
                        aria-label="Lesson Card"
                        className={`noselect 
                      active:bg-zinc-300 
                      hover:bg-zinc-200 
                      dark:active:bg-zinc-800 
                      dark:hover:bg-zinc-700 
                      cursor-pointer border-1 w-full ${
                        lessonTypeToColor[lesson.lessonType]
                      } ${orientationValues("h-[34vh]", "h-[17vh]")}`}
                        isPressable
                        onPress={() => openLesson(lesson, false)}
                      >
                        <CardBody className="flex items-center justify-center overflow-hidden">
                          <b className="mt-auto mb-auto text-center text-xl p-2">
                            {lesson.lessonName}
                          </b>
                          <a>{lesson.teacher}</a>
                        </CardBody>
                      </Card>
                    )}
                  </Fragment>
                ))}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    ),
    [currentGroup, getLessonsForDay, orientationValues]
  );

  return (
    <div className={orientationValues("mx-14 my-2", "mx-2 my-2")}>
      <Table aria-label="Lessons Table">
        {memorizedTableHeader}
        {memorizedTableBody}
      </Table>
    </div>
  );
}
