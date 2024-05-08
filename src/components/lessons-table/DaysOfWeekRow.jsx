import checkDay from "../../utils/checkDay";
import { days } from "../../common/constants";

export default function DaysOfWeek() {
  return (
    <thead>
      <tr className="text-center">
        <th className="col-1"></th>
        {days.map((day, index) => (
          <th
            key={index}
            className={checkDay() === index + 1 ? "highlight" : ""}
            style={{ color: '#006AA5'}}
          >
            {day}
          </th>
        ))}
      </tr>
    </thead>
  );
}
