import { useContext, useMemo } from "react";
import { Table, TableBody, TableColumn, TableHeader } from "@nextui-org/react";

import { allDays, currentDay } from "../utils/getUkrainianWeek.js";

import { MobileContext } from "../store/MobileContext.jsx";

import sunInSunglasses from "../assets/sun_in_sunglasses.png";
import styles from "../styles/Summertime.module.scss";

export default function Summertime() {
  const { isMobile } = useContext(MobileContext);

  const SummerTable = useMemo(() => {
    return (
      <div className={styles.messageSection}>
        <img src={sunInSunglasses} alt="sun" />
        <b className="just-me-again-down-here-regular">It&apos;s summertime!</b>
        <a>Відпочивайте та насолоджуйтесь літом!</a>
      </div>
    );
  }, []);

  const tableHeader = isMobile ? (
    <TableHeader>
      <TableColumn key="lessons" className="max-w-10">
        <div className="flex justify-center">Пари</div>
      </TableColumn>
      <TableColumn>
        <div className="flex justify-center">{currentDay()[1]}</div>
      </TableColumn>
    </TableHeader>
  ) : (
    <TableHeader columns={allDays}>
      <TableColumn key="lessons" className="max-w-10">
        <div className="flex justify-center">Пари</div>
      </TableColumn>
      {allDays.map((day) => (
        <TableColumn
          key={day.key}
          className={`${
            currentDay()[0] === day.key ? "bg-yellow-200 text-slate-950" : ""
          }`}
        >
          <div className="flex justify-center">{day.label}</div>
        </TableColumn>
      ))}
    </TableHeader>
  );

  return (
    <div className={isMobile ? "m-2" : "m-3"}>
      <Table aria-label="Lessons Table">
        {tableHeader}
        <TableBody emptyContent={SummerTable}></TableBody>
      </Table>
    </div>
  );
}
