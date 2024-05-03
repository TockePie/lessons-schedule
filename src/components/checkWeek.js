import { getISOWeek } from "date-fns";

export default function checkWeek() {
  const weekNumber = getISOWeek(new Date());
  return weekNumber % 2 === 1;
}
