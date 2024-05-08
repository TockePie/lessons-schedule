import checkDay from "../../utils/checkDay";
import { days } from "../../common/constants";

export default function DaysOfWeek() {
  return (
    <thead>
      <tr className="text-center">
        <th className="col-1">Пари</th>
        {days.map((day, index) => (
          <th
            key={index}
            className={checkDay() === index + 1 ? "highlight" : ""}
          >
            {day}
          </th>
        ))}
      </tr>
    </thead>
  );
}
