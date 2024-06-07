import { useContext } from "react";

import { MobileContext } from "../../context/MobileContext.jsx";

import MobileTable from "./MobileTable.jsx";
import DesktopTable from "./DesktopTable.jsx";
import Summertime from "./Summertime.jsx";

const getDate = () => {
  let now = new Date();
  let start = new Date(now.getFullYear(), 0, 0);
  let diff = now - start;
  let oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
};

export default function Table() {
  const { isDesktopOrLaptop, isMobile } = useContext(MobileContext);

  if (getDate() > 175 && getDate() < 244) {
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
