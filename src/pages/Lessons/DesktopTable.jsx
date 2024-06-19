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

import handlePress from "../../utils/handlePressCard.js";
import checkWeek from "../../utils/checkWeek.js";
import { getLessonColor, getWeekText, getCurrentDay } from "../../utils/getData";
import { allDays } from "../../utils/getUkrainianWeek.js";
import { switchWeeks } from "../../store/manualSchedule.js";

import { rowIndices } from "../../common/constants.js";
import { groupData } from "../../data/groupData.js";
import styles from "../../styles/Table.module.scss";

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

  const handlePressCallback = useCallback(
    (lesson) => handlePress(lesson, isPwaZoom, setModalData, onOpen),
    [isPwaZoom, onOpen]
  );

  const memoizedTableHeader = useMemo(
    () => (
      <TableHeader columns={allDays}>
        <TableColumn key="lessons" className="max-w-10">
          <div className="flex justify-center text-sm">
            <Switch
              color="secondary"
              size="sm"
              checked={isManualWeek}
              onChange={() => dispatch(switchWeeks())}
            >
              {getWeekText("mobile", !checkWeek())}
            </Switch>
          </div>
        </TableColumn>
        {allDays.map((day) => (
          <TableColumn
            key={day.key}
            className={`${
              getCurrentDay()[0] === day.key ? "bg-yellow-200 text-slate-950" : ""
            }`}
          >
            <div className="flex justify-center">{day.label}</div>
          </TableColumn>
        ))}
      </TableHeader>
    ),
    [isManualWeek, dispatch]
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
                  className={`noselect ${styles.time}`}
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
                      className={`noselect ${getLessonColor(
                        lesson.lessonType
                      )} ${styles.lessons}`}
                      isPressable
                      onPress={() => handlePressCallback(lesson)}
                    >
                      <CardBody className={styles.body}>
                        <b>{lesson.lessonName}</b>
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
    [currentGroup, defineObject, handlePressCallback]
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
