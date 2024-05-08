const lessonTypeToColor = {
  lecture: "primary",
  practice: "danger",
  lab: "success",
};

const days = [
  "Понеділок",
  "Вівторок",
  "Середа",
  "Четвер",
  "П'ятниця",
  "Субота",
];

const rowIndices = [
  "firstLessonsRow",
  "secondLessonsRow",
  "thirdLessonsRow",
  "fourthLessonsRow",
];

const lessonTime = [
  { start: "08:30", end: "10:05" },
  { start: "10:25", end: "12:00" },
  { start: "12:20", end: "13:55" },
  { start: "14:10", end: "15:50" },
];

export { lessonTypeToColor, days, rowIndices, lessonTime };
