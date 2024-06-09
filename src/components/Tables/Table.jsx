import { useContext } from "react";

import { MobileContext } from "../../context/MobileContext.jsx";

import MobileTable from "./MobileTable.jsx";
import DesktopTable from "./DesktopTable.jsx";
import Summertime from "./Summertime.jsx";
import ExamTable from "./ExamTable.jsx";

import getDate from "../../utils/getDate";

export default function Table() {
  const { isDesktopOrLaptop, isMobile } = useContext(MobileContext);
  const dayOfYear = getDate();

  if (localStorage.getItem("isExams") === "1") {
    return <ExamTable />;
  }

  if (dayOfYear > 175 && dayOfYear < 244) {
    return <Summertime />;
  }

  if (isDesktopOrLaptop) {
    return <DesktopTable />;
  }

  if (isMobile) {
    return <MobileTable />;
  }

  return null;
}
