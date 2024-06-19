import { Fragment, useMemo, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
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
  Switch,
  useDisclosure,
} from "@nextui-org/react";

import ModalDialog from "../../components/ModalDialog.jsx";

import handlePress from "../../utils/handlePressCard.js";
import checkWeek from "../../utils/checkWeek.js";
import { getLessonColor, getWeekText, getCurrentDay } from "../../utils/getData";
import { switchWeeks } from "../../store/manualSchedule.js";

import { groupData } from "../../data/groupData.js";
import { rowIndices } from "../../common/constants.js";
import styles from "../../styles/Table.module.scss";

export default function MobileTable() {
  const [modalData, setModalData] = useState({
    textInDialog: "",
    password: "",
    url: "",
  });
  const { currentGroup } = useSelector((state) => state.group);
  const isManualWeek = useSelector(
    (state) => state.manualSchedule.isManualWeek
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const screenOrientation = useScreenOrientation();

  const dispatch = useDispatch();

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

  const handlePressCallback = useCallback(
    (lesson) => handlePress(lesson, false, setModalData, onOpen),
    [onOpen]
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

  const handleSelectionChange = useCallback(() => {
    dispatch(switchWeeks());
  }, [dispatch]);

  const memorizedTableHeader = useMemo(
    () => (
      <TableHeader>
        <TableColumn key="lessons">
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
        <TableColumn>
          <div className="flex justify-center">
            {new Date().getDay() === 0 ? "Неділя" : getCurrentDay()[1]}
          </div>
        </TableColumn>
      </TableHeader>
    ),
    [isManualWeek, handleSelectionChange]
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
          const lessonRow = getLessonsForDay(getCurrentDay()[0], rowName);
          if (lessonRow.length === 0) return;

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
                      ${styles.lessons} ${getLessonColor(
                          lesson.lessonType
                        )} ${orientationValues("h-[34vh]", "h-[17vh]")}`}
                        isPressable
                        onPress={() => handlePressCallback(lesson)}
                      >
                        <CardBody className={styles.body}>
                          <b>{lesson.lessonName}</b>
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
    [currentGroup, getLessonsForDay, orientationValues, handlePressCallback]
  );

  return (
    <div className={orientationValues("mx-14 my-2", "mx-2 my-2")}>
      <Table aria-label="Lessons Table">
        {memorizedTableHeader}
        {memorizedTableBody}
      </Table>
      <ModalDialog isOpen={isOpen} onClose={onClose} data={modalData} />
    </div>
  );
}
