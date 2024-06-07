import { useContext, useMemo } from "react";
import { Table, TableBody, TableColumn, TableHeader } from "@nextui-org/react";

import checkDay from "../../utils/checkDay.js";
import { allDays, currentDay } from "../../utils/getUkrainianWeek.js";

import { MobileContext } from "../../context/MobileContext";

import sunInSunglasses from "../../assets/sun_in_sunglasses.png";

export default function Summertime() {
  const { isMobile } = useContext(MobileContext);

  const SummerTable = useMemo(() => {
    return (
      <div className="flex flex-col">
        <img
          src={sunInSunglasses}
          alt="sun"
          className="mx-auto mt-10 w-60 h-60"
        />
        <b className="mb-2 text-gray-800 dark:text-gray-100 just-me-again-down-here-regular">It&apos;s summertime!</b>
        <a className="mb-8 dark:text-gray-500">Відпочивайте та насолоджуйтесь літом!</a>
      </div>
    );
  }, []);

  if (isMobile) {
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
          <TableBody emptyContent={SummerTable}></TableBody>
        </Table>
      </div>
    );
  }

  return (
    <div className="m-3">
      <Table aria-label="Lessons Table">
        <TableHeader columns={allDays}>
          <TableColumn key="lessons" className="max-w-10">
            <div className="flex justify-center">Пари</div>
          </TableColumn>
          {allDays.map((day) => (
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
        <TableBody emptyContent={SummerTable}></TableBody>
      </Table>
    </div>
  );
}
