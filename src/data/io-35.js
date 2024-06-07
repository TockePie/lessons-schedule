export const GROUP = "ІО-35";

const emptyLesson = {
  lessonName: null,
  lessonType: null,
  teacher: null,
  url: null,
};

export const evenLessons = {
  firstLessonsRow: [
    {
      dayOfWeek: "mon",
      lessonName: "Дискретна математика",
      lessonType: "lecture",
      teacher: "Новотарський М.А.",
      url: "https://us02web.zoom.us/j/87578307057?pwd=UGwyVGlwc3M4Q0Q0Q0NLWUt6bmVpUT09",
    },
    {
      dayOfWeek: "tue",
      lessonName: "Фізика",
      lessonType: "lecture",
      teacher: "Лаванов Г.Ю.",
      url: () => {
        alert(`див. Чат фізики: посилання щоразу змінюється!`);
      },
    },
    {
      dayOfWeek: "wed",
      ...emptyLesson,
    },
    {
      dayOfWeek: "thu",
      lessonName: "Фізика",
      lessonType: "practice",
      teacher: "Лаванов Г.Ю.",
      url: () => {
        alert(`див. Чат фізики: посилання щоразу змінюється!`);
      },
    },
    {
      dayOfWeek: "fri",
      ...emptyLesson,
    },
    {
      dayOfWeek: "sat",
      ...emptyLesson,
    },
  ],
  secondLessonsRow: [
    {
      dayOfWeek: "mon",
      lessonName: "Вища математика",
      lessonType: "lecture",
      teacher: "Ільєнко М.К.",
      url: "https://us06web.zoom.us/j/89285187807?pwd=9EsZfH1KpddzbqblgC9z2tbtpEGj7A.1"
    },
    {
      dayOfWeek: "tue",
      lessonName: "Вища математика",
      lessonType: "practice",
      teacher: "Поліщук А.Ю.",
      url: "https://us05web.zoom.us/j/2530562585?pwd=YzRiakdnWlJvSzJPRGFlQnZRRmd3UT09",
    },
    {
      dayOfWeek: "wed",
      lessonName: "Фізика",
      lessonType: "lab",
      teacher: "Ляховецький В.Р.",
      url: "https://us04web.zoom.us/j/76362666471?pwd=bDVWbTRRdTIwT3h4RCszcEhOWDQ0QT09",
    },
    {
      dayOfWeek: "thu",
      ...emptyLesson,
    },
    {
      dayOfWeek: "fri",
      lessonName: "Комп'ютерна аритметика",
      lessonType: "lecture",
      teacher: "Жабін В.І.",
      url: "https://bbb.comsys.kpi.ua/rooms/vqj-umt-tas-leo/join",
    },
    {
      dayOfWeek: "sat",
      ...emptyLesson,
    },
  ],
  thirdLessonsRow: [
    {
      dayOfWeek: "mon",
      ...emptyLesson,
    },
    {
      dayOfWeek: "tue",
      lessonName: "Комп'ютерна аритметика",
      lessonType: "lab",
      teacher: "Верба О.А.",
      url: "https://us04web.zoom.us/j/7382214783?pwd=RnZ3SWgwK1JoVkZtNndnKzdPZjFGdz09",
    },
    {
      dayOfWeek: "wed",
      lessonName: "Культура мовлення",
      lessonType: "practice",
      teacher: "Онуфрієнко О.П.",
      url: "https://us05web.zoom.us/j/89608497213?pwd=BWO53tgq9zTWe8IZyI7hh3bqhtihyK.1",
    },
    {
      dayOfWeek: "thu",
      lessonName: "Основи здоров'я",
      lessonType: "practice",
      teacher: "Соболенко А.І.",
      url: "https://us05web.zoom.us/j/2035574145?pwd=bk1wTVhGbjJsQTR4WmVQMlROWFBCZz09",
    },
    {
      dayOfWeek: "fri",
      lessonName: "Програмування",
      lessonType: "lecture",
      teacher: "Алещенко О.В.",
      url: "https://us02web.zoom.us/j/2711546637?pwd=Ry82RHp3SjV6WTZRMXl6WUNod25hUT09",
    },
    {
      dayOfWeek: "sat",
      ...emptyLesson,
    },
  ],
  fourthLessonsRow: [
    {
      dayOfWeek: "mon",
      ...emptyLesson,
    },
    {
      dayOfWeek: "tue",
      lessonName: "Іноземна мова",
      lessonType: "practice",
      teacher: "Ващук А.О.",
      url: "https://meet.google.com/miz-yzmp-rua",
    },
    {
      dayOfWeek: "wed",
      ...emptyLesson,
    },
    {
      dayOfWeek: "thu",
      ...emptyLesson,
    },
    {
      dayOfWeek: "fri",
      ...emptyLesson,
    },
    {
      dayOfWeek: "sat",
      ...emptyLesson,
    },
  ],
};

export const oddLessons = {
  firstLessonsRow: [...evenLessons.firstLessonsRow],
  secondLessonsRow: [
    ...evenLessons.secondLessonsRow.slice(0, 3),
    {
      dayOfWeek: "thu",
      lessonName: "Програмування",
      lessonType: "lab",
      teacher: "Алещенко О.В.",
      url: "https://us02web.zoom.us/j/2711546637?pwd=Ry82RHp3SjV6WTZRMXl6WUNod25hUT09",
    },
    ...evenLessons.secondLessonsRow.slice(4),
  ],
  thirdLessonsRow: [
    evenLessons.secondLessonsRow[0],
    {
      dayOfWeek: "tue",
      lessonName: "Дискретна математика",
      lessonType: "lab",
      teacher: "Пономаренко А.М.",
      url: "https://us05web.zoom.us/j/7089075754?pwd=TWRlZmxyVlFiTWU1UGlVVU1XcFE0Zz09",
    },
    evenLessons.secondLessonsRow[1],
    ...evenLessons.thirdLessonsRow.slice(3, 6),
  ],
  fourthLessonsRow: [
    {
      dayOfWeek: "mon",
      lessonName: "Культура мовлення",
      lessonType: "lecture",
      teacher: "Онуфрієнко О.П.",
      url: "https://us05web.zoom.us/j/89608497213?pwd=BWO53tgq9zTWe8IZyI7hh3bqhtihyK.1",
    },
    ...evenLessons.fourthLessonsRow.slice(1),
  ],
};
