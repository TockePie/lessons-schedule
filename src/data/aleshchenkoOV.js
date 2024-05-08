export const GROUP = "Алещенко О.В.";

const emptyLesson = {
  lessonName: null,
  lessonType: null,
  teacher: null,
  url: null,
  urlPWA: null,
};

const generateLesson = (dayOfWeek, lessonName, lessonType) => ({
  dayOfWeek,
  lessonName,
  lessonType,
  teacher: null,
  url: "https://us02web.zoom.us/j/2711546637?pwd=Ry82RHp3SjV6WTZRMXl6WUNod25hUT09",
  urlPWA: `https://app.zoom.us/wc/2711546637/join?pwd=Ry82RHp3SjV6WTZRMXl6WUNod25hUT09&fromPWA=1`,
});

const generateEmptyWeek = () =>
  Array.from({ length: 6 }, (_, i) => ({ dayOfWeek: i + 1, ...emptyLesson }));

export const evenLessons = {
  firstLessonsRow: generateEmptyWeek(),
  secondLessonsRow: generateEmptyWeek(),
  thirdLessonsRow: [
    ...generateEmptyWeek().slice(0, 4),
    generateLesson(5, "ІО-потік", "lecture"),
    ...generateEmptyWeek().slice(5),
  ],
  fourthLessonsRow: [
    ...generateEmptyWeek().slice(0, 3),
    generateLesson(4, "ІО-31", "lab"),
    ...generateEmptyWeek().slice(4),
  ],
};

export const oddLessons = {
  firstLessonsRow: [...evenLessons.firstLessonsRow],
  secondLessonsRow: [
    ...evenLessons.secondLessonsRow.slice(0, 3),
    generateLesson(4, "ІО-35", "lab"),
    ...evenLessons.secondLessonsRow.slice(4),
  ],
  thirdLessonsRow: [
    evenLessons.thirdLessonsRow[0],
    generateLesson(4, "ІО-36", "lab"),
    evenLessons.thirdLessonsRow[2],
    generateLesson(4, "ІО-32", "lab"),
    ...evenLessons.thirdLessonsRow.slice(4),
  ],
  fourthLessonsRow: [
    evenLessons.fourthLessonsRow[0],
    generateLesson(2, "ІО-34", "lab"),
    { dayOfWeek: 3, ...emptyLesson },
    generateLesson(4, "ІО-36", "lab"),
    ...evenLessons.fourthLessonsRow.slice(4),
  ],
};
