import { useContext } from "react";

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

import groupData from "../../data/groupData.js";
import { lessonTypeToColor, rowIndices } from "../../common/constants.js";
import { GroupContext } from "../../context/GroupPlatformInfo.jsx";

export default function MobileTable() {
  const { currentGroup } = useContext(GroupContext);

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
        <TableHeader>
          <TableColumn key="lessons" className="max-w-10">
            <div className="flex justify-center">Пари</div>
          </TableColumn>
          <TableColumn>
            <div className="flex justify-center">{currentDay}</div>
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
