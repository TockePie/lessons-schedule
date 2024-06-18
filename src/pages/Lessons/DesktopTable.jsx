import { useMemo, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  Table,
  TableBody,
  TableColumn,
  TableHeader,
  TableCell,
  TableRow,
  Card,
  CardBody,
  Switch,
  useDisclosure,
} from "@nextui-org/react";

import ModalDialog from "../../components/ModalDialog.jsx";

import checkDay from "../../utils/checkDay.js";
import checkWeek from "../../utils/checkWeek.js";
import openLesson from "../../utils/openLesson.js";
import getWeekText from "../../utils/getWeekText.js";
import { allDays } from "../../utils/getUkrainianWeek.js";
import { setIsManualWeek } from "../../store/manualSchedule.js";

import { lessonTypeToColor, rowIndices } from "../../common/constants.js";
import { groupData } from "../../data/groupData.js";

export default function DesktopTable() {
  const [modalData, setModalData] = useState({
    textInDialog: "",
    password: "",
    url: "",
  });
  const { currentGroup } = useSelector((state) => state.group);
  const { isPwaZoom } = useSelector((state) => state.zoom);
  const isManualWeek = useSelector(
    (state) => state.manualSchedule.isManualWeek
  );
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useDispatch();

  const defineObject = useCallback(
    (rowName) => {
      const isOddWeek = isManualWeek ? !checkWeek() : checkWeek();
      const lessonsData = isOddWeek
        ? groupData[currentGroup]?.oddLessons
        : groupData[currentGroup]?.evenLessons;

      return lessonsData ? lessonsData[rowName] : [];
    },
    [currentGroup, isManualWeek]
  );

  const handlePress = useCallback(
    (lesson) => {
      const opening = openLesson(lesson, isPwaZoom);
      if (opening) {
        setModalData(opening);
        onOpen();
      }
    },
    [isPwaZoom, onOpen]
  );

  const handleSelectionChange = useCallback(() => {
    dispatch(setIsManualWeek(!isManualWeek));
  }, [dispatch, isManualWeek]);

  const memoizedTableHeader = useMemo(
    () => (
      <TableHeader columns={allDays}>
        <TableColumn key="lessons" className="max-w-10">
          <div className="flex justify-center text-sm">
            <Switch
              color="secondary"
              size="sm"
              checked={isManualWeek}
              onChange={handleSelectionChange}
            >
              {getWeekText("mobile", !checkWeek())}
            </Switch>
          </div>
        </TableColumn>
        {allDays.map((day) => (
          <TableColumn
            key={day.key}
            className={`${
              checkDay() === day.key ? "bg-yellow-200 text-slate-950" : ""
            }`}
          >
            <div className="flex justify-center">{day.label}</div>
          </TableColumn>
        ))}
      </TableHeader>
    ),
    [isManualWeek, handleSelectionChange]
  );

  const memoizedTableBody = useMemo(
    () => (
      <TableBody
        emptyContent={
          <div className="flex flex-col justify-center">
            <b>Розклад відсутній. Оберіть групу, щоб побачити заняття.</b>
          </div>
        }
      >
        {rowIndices.map(([rowName, time], i) => {
          if (currentGroup === "Оберіть групу") return;
          if (defineObject(rowName) === undefined) return;

          return (
            <TableRow key={rowName}>
              <TableCell className="min-w-16">
                <Card
                  aria-label="Time Card"
                  className="text-nowrap h-[7.8rem] noselect overflow-hidden"
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
              {defineObject(rowName)?.map((lesson, index) => (
                <TableCell key={index} className="min-w-48 max-w-48">
                  {lesson.lessonType != null && (
                    <Card
                      aria-label="Lesson Card"
                      className={`noselect ${
                        lessonTypeToColor[lesson.lessonType]
                      } h-[7.8rem] active:bg-zinc-300 hover:bg-zinc-200 dark:active:bg-zinc-800 dark:hover:bg-zinc-700 cursor-pointer border-1 w-full`}
                      isPressable
                      onPress={() => handlePress(lesson)}
                    >
                      <CardBody className="flex items-center justify-center overflow-hidden">
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
    ),
    [currentGroup, defineObject, handlePress]
  );

  return (
    <div className="m-3">
      <Table aria-label="Lessons Table">
        {memoizedTableHeader}
        {memoizedTableBody}
      </Table>
      <ModalDialog isOpen={isOpen} onClose={onClose} data={modalData} />
    </div>
  );
}
