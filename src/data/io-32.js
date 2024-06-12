export const GROUP = "ІО-32";

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
      urlPwa:
        "https://app.zoom.us/wc/87578307057/join?pwd=UGwyVGlwc3M4Q0Q0Q0NLWUt6bmVpUT09&fromPWA=1",
    },
    {
      dayOfWeek: "tue",
      ...emptyLesson,
    },
    {
      dayOfWeek: "wed",
      lessonName: "Фізика",
      lessonType: "lab",
      teacher: "Ляховецький В.Р.",
      url: "https://us04web.zoom.us/j/76362666471?pwd=bDVWbTRRdTIwT3h4RCszcEhOWDQ0QT09",
      urlPwa:
        "https://app.zoom.us/wc/76362666471/join?pwd=bDVWbTRRdTIwT3h4RCszcEhOWDQ0QT09&fromPWA=1",
    },
    {
      dayOfWeek: "thu",
      lessonName: "Основи здоров'я",
      lessonType: "practice",
      teacher: "Новицький Ю.В.",
      url: "https://zoom.us/j/98105710510?pwd=QWltN0NnTm1yNGttTHVaQVVqdHVrdz09",
      urlPwa:
        "https://app.zoom.us/wc/98105710510/join?pwd=QWltN0NnTm1yNGttTHVaQVVqdHVrdz09&fromPWA=1",
    },
    {
      dayOfWeek: "fri",
      lessonName: "Фізика",
      lessonType: "lecture",
      teacher: "Русаков В.Ф.",
      url: "https://meet.google.com/mie-rrfc-aeo?hs=151",
      urlPwa: "https://meet.google.com/mie-rrfc-aeo?hs=151",
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
      teacher: "Голіченко І.І.",
      url: {
        password: "C2qR3w",
        url: "https://us02web.zoom.us/j/8067850314",
        needDialog: true,
        textInDialog: "Після відкриття посилання вставте пароль",
      },
      urlPwa: {
        password: "C2qR3w",
        url: "https://app.zoom.us/wc/8067850314/join",
        needDialog: true,
        textInDialog: "Після відкриття посилання вставте пароль",
      }
    },
    {
      dayOfWeek: "tue",
      ...emptyLesson,
    },
    {
      dayOfWeek: "wed",
      lessonName: "Дискретна математика",
      lessonType: "lab",
      teacher: "Пономаренко А.М.",
      url: "https://us05web.zoom.us/j/7089075754?pwd=TWRlZmxyVlFiTWU1UGlVVU1XcFE0Zz09",
      urlPwa:
        "https://app.zoom.us/wc/7089075754/join?pwd=TWRlZmxyVlFiTWU1UGlVVU1XcFE0Zz09&fromPWA=1",
    },
    {
      dayOfWeek: "thu",
      lessonName: "Фізика",
      lessonType: "practice",
      teacher: "Рускаов В.Ф.",
      url: "https://meet.google.com/mie-rrfc-aeo?hs=151",
      urlPwa: "https://meet.google.com/mie-rrfc-aeo?hs=151",
    },
    {
      dayOfWeek: "fri",
      lessonName: "Комп'ютерна аритметика",
      lessonType: "lecture",
      teacher: "Жабін В.І.",
      url: "https://bbb.comsys.kpi.ua/rooms/vqj-umt-tas-leo/join",
      urlPwa: "https://bbb.comsys.kpi.ua/rooms/vqj-umt-tas-leo/join",
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
      lessonName: "Вища математика",
      lessonType: "practice",
      teacher: "Поліщук А.Ю.",
      url: "https://us05web.zoom.us/j/2530562585?pwd=YzRiakdnWlJvSzJPRGFlQnZRRmd3UT09",
      urlPwa:
        "https://app.zoom.us/wc/2530562585/join?pwd=YzRiakdnWlJvSzJPRGFlQnZRRmd3UT09&fromPWA=1",
    },
    {
      dayOfWeek: "wed",
      lessonName: "Іноземна мова",
      lessonType: "practice",
      teacher: "Гаєва П.О.",
      url: "https://us04web.zoom.us/j/2114671234?pwd=UnZCd1VvRmVsSDJGVTBuc3JMUDI1UT09",
      urlPwa: "https://app.zoom.us/wc/2114671234/join?pwd=UnZCd1VvRmVsSDJGVTBuc3JMUDI1UT09",
    },
    {
      dayOfWeek: "thu",
      lessonName: "Комп'ютерна аритметика",
      lessonType: "lab",
      teacher: "Верба О.А.",
      url: "https://us04web.zoom.us/j/7382214783?pwd=RnZ3SWgwK1JoVkZtNndnKzdPZjFGdz09",
      urlPwa:
        "https://app.zoom.us/wc/7382214783/join?pwd=RnZ3SWgwK1JoVkZtNndnKzdPZjFGdz09&fromPWA=1",
    },
    {
      dayOfWeek: "fri",
      lessonName: "Програмування",
      lessonType: "lecture",
      teacher: "Алещенко О.В.",
      url: "https://us02web.zoom.us/j/2711546637?pwd=Ry82RHp3SjV6WTZRMXl6WUNod25hUT09",
      urlPwa:
        "https://app.zoom.us/wc/2711546637/join?pwd=Ry82RHp3SjV6WTZRMXl6WUNod25hUT09&fromPWA=1",
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
      lessonName: "Культура мовлення",
      lessonType: "practice",
      teacher: "Онуфрієнко О.П.",
      url: "https://us05web.zoom.us/j/89608497213?pwd=BWO53tgq9zTWe8IZyI7hh3bqhtihyK.1",
      urlPwa:
        "https://app.zoom.us/wc/89608497213/join?pwd=BWO53tgq9zTWe8IZyI7hh3bqhtihyK.1&fromPWA=1",
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
    ...evenLessons.secondLessonsRow.slice(0, 2),
    evenLessons.thirdLessonsRow[1],
    ...evenLessons.secondLessonsRow.slice(3),
  ],
  thirdLessonsRow: [
    evenLessons.secondLessonsRow[0],
    ...evenLessons.thirdLessonsRow.slice(1, 3),
    {
      dayOfWeek: "thu",
      lessonName: "Програмування",
      lessonType: "lab",
      teacher: "Алещенко О.В.",
      url: "https://us02web.zoom.us/j/2711546637?pwd=Ry82RHp3SjV6WTZRMXl6WUNod25hUT09",
      urlPwa:
        "https://app.zoom.us/wc/2711546637/join?pwd=Ry82RHp3SjV6WTZRMXl6WUNod25hUT09&fromPWA=1",
    },
    ...evenLessons.thirdLessonsRow.slice(4, 6),
  ],
  fourthLessonsRow: [
    {
      dayOfWeek: "mon",
      lessonName: "Культура мовлення",
      lessonType: "lecture",
      teacher: "Онуфрієнко О.П.",
      url: "https://us05web.zoom.us/j/89608497213?pwd=BWO53tgq9zTWe8IZyI7hh3bqhtihyK.1",
      urlPwa:
        "https://app.zoom.us/wc/89608497213/join?pwd=BWO53tgq9zTWe8IZyI7hh3bqhtihyK.1&fromPWA=1",
    },
    {
      dayOfWeek: "tue",
      ...emptyLesson,
    },
    ...evenLessons.fourthLessonsRow.slice(2),
  ],
};
