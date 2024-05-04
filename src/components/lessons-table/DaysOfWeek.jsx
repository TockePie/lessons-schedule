function checkDay() {
  const currentDay = new Date().getDay();
  return currentDay;
}

export default function DaysOfWeek() {
  const currentDay = checkDay();
  const days = [
    "Понеділок",
    "Вівторок",
    "Середа",
    "Четвер",
    "П'ятниця",
    "Субота",
  ];

  return (
    <thead>
      <tr className="text-center">
        <th className="col-1">
          Пари
        </th>
        {days.map((day, index) => (
          <th
            key={index}
            className={currentDay === index + 1 ? "highlight" : ""}
          >
            {day}
          </th>
        ))}
      </tr>
    </thead>
  );
}
