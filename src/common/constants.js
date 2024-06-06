const lessonTypeToColor = {
  lecture: "border-indigo-500",
  practice: "border-red-500",
  lab: "border-lime-500",
};

const days = [
  { key: "mon", label: "Понеділок" },
  { key: "tue", label: "Вівторок" },
  { key: "wed", label: "Середа" },
  { key: "thu", label: "Четвер" },
  { key: "fri", label: "П'ятниця" },
  { key: "sat", label: "Субота" },
];

const rowIndices = [
  ["firstLessonsRow", { start: "08:30", end: "10:05" }],
  ["secondLessonsRow", { start: "10:25", end: "12:00" }],
  ["thirdLessonsRow", { start: "12:20", end: "13:55" }],
  ["fourthLessonsRow", { start: "14:10", end: "15:50" }],
];

const lessonTime = [
  { start: "08:30", end: "10:05" },
  { start: "10:25", end: "12:00" },
  { start: "12:20", end: "13:55" },
  { start: "14:10", end: "15:50" },
];

export { lessonTypeToColor, days, rowIndices, lessonTime };
