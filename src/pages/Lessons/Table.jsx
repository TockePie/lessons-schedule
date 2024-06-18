import { useContext } from "react";

import MobileTable from "./MobileTable.jsx";
import DesktopTable from "./DesktopTable.jsx";
import Summertime from "../Summertime.jsx";

import { MobileContext } from "../../store/MobileContext.jsx";
import getDate from "../../utils/getDate";

export default function Table() {
  const { isDesktopOrLaptop, isMobile } = useContext(MobileContext);
  const dayOfYear = getDate();

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
