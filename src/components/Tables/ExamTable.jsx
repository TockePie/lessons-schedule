import { useCallback, useContext, useMemo, memo } from "react";
import {
  Card,
  CardBody,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import openLesson from "../../utils/openLesson";
import { examsData } from "../../data/groupData";
import { GroupContext } from "../../context/GroupPlatformInfo";

const ExamTable = () => {
  const { currentGroup, isPwaZoom } = useContext(GroupContext);

  const exams = useMemo(() => examsData[currentGroup]?.exams, [currentGroup]);

  const handlePress = useCallback(
    (exam) => {
      openLesson(exam, isPwaZoom);
    },
    [isPwaZoom]
  );

  return (
    <div className="mx-auto my-8 max-w-[25rem]">
      <Table striped hover aria-label="Exams Table">
        <TableHeader>
          <TableColumn>
            <div className="flex justify-center">Час</div>
          </TableColumn>
          <TableColumn>
            <div className="flex justify-center">Предмет</div>
          </TableColumn>
        </TableHeader>
        <TableBody>
          {exams?.map((exam, index) => (
            <TableRow key={exam.id || index}>
              <TableCell>
                <Card className="w-32">
                  <CardBody className="flex items-center justify-between px-2 py-8 overflow-y-hidden">
                    <b className="text-large">{exam.date}</b>
                    <p>{exam.time}</p>
                  </CardBody>
                </Card>
              </TableCell>
              <TableCell>
                <Card
                  aria-label="Lesson Card"
                  className="noselect border-red-500 active:bg-zinc-300 hover:bg-zinc-200 dark:active:bg-zinc-800 dark:hover:bg-zinc-700 cursor-pointer border-1 w-full"
                  isPressable
                  onPress={() => handlePress(exam)}
                >
                  <CardBody className="flex items-center justify-center overflow-hidden h-32">
                    <b className="mt-auto mb-auto text-center text-xl p-2">
                      {exam.lessonName}
                    </b>
                    <a>{exam.teacher}</a>
                  </CardBody>
                </Card>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

const MemoizedExamTable = memo(ExamTable);
export default MemoizedExamTable;
