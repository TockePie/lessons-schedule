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
      ...emptyLesson,
    },
    {
      dayOfWeek: "tue",
      ...emptyLesson,
      // lessonName: "Психологія Конфлікту",
      // lessonType: "practice",
      // teacher: "Чумаков В.",
      // url: "https://us05web.zoom.us/j/6297129205?pwd=sToGoAQibuvceQR7FF3jHu0l8H9vHV.1",
      // urlPwa:
      //   "https://app.zoom.us/wc/6297129205/join?pwd=sToGoAQibuvceQR7FF3jHu0l8H9vHV.1",
    },
    {
      dayOfWeek: "wed",
      lessonName: "Філософія",
      lessonType: "lecture",
      teacher: "Руденко Т.",
      url: "https://zoom.us/j/9358038101?pwd=d0pwUHRDY0dxbngrU09PYll6UXpNZz09",
      urlPwa:
        "https://app.zoom.us/wc/9358038101/join?pwd=d0pwUHRDY0dxbngrU09PYll6UXpNZz09",
    },
    {
      dayOfWeek: "thu",
      lessonName: "Іноземна мова",
      lessonType: "practice",
      teacher: "Гаєва П.",
      url: "https://us04web.zoom.us/j/2114671234?pwd=UnZCd1VvRmVsSDJGVTBuc3JMUDI1UT09",
      urlPwa:
        "https://app.zoom.us/wc/2114671234/join?pwd=UnZCd1VvRmVsSDJGVTBuc3JMUDI1UT09",
    },
    {
      dayOfWeek: "fri",
      lessonName: "Комп'ютерна електроніка",
      lessonType: "lecture",
      teacher: "Шимкович В.",
      url: "https://us04web.zoom.us/j/3428560060?pwd=YTZ4Vm8xVTYzTGhzQk5ONGpTcmVSZz09",
      urlPwa:
        "https://app.zoom.us/wc/3428560060/join?pwd=YTZ4Vm8xVTYzTGhzQk5ONGpTcmVSZz09",
    },
    {
      dayOfWeek: "sat",
      ...emptyLesson,
    },
  ],
  secondLessonsRow: [
    {
      dayOfWeek: "mon",
      ...emptyLesson,
    },
    {
      dayOfWeek: "tue",
      lessonName: "Вища математика",
      lessonType: "practice",
      teacher: "Поліщук А.",
      url: "https://us05web.zoom.us/j/2530562585?pwd=YzRiakdnWlJvSzJPRGFlQnZRRmd3UT09",
      urlPwa:
        "https://app.zoom.us/wc/2530562585/join?pwd=YzRiakdnWlJvSzJPRGFlQnZRRmd3UT09&fromPWA=1",
    },
    {
      dayOfWeek: "wed",
      lessonName: "Інженерія ПЗ",
      lessonType: "lecture",
      teacher: "Васильєва М.",
      url: "https://meet.google.com/fsn-gdmj-auu",
      urlPwa: "https://meet.google.com/fsn-gdmj-auu",
    },
    {
      dayOfWeek: "thu",
      lessonName: "Комп'ютерна електроніка",
      lessonType: "lab",
      teacher: "Шимкович В.",
      url: "https://us04web.zoom.us/j/3428560060?pwd=YTZ4Vm8xVTYzTGhzQk5ONGpTcmVSZz09",
      urlPwa:
        "https://app.zoom.us/wc/3428560060/join?pwd=YTZ4Vm8xVTYzTGhzQk5ONGpTcmVSZz09",
    },
    {
      dayOfWeek: "fri",
      lessonName: "Linux",
      lessonType: "lecture",
      teacher: "Роковий О.",
      url: "https://bbb.comsys.kpi.ua/rooms/fjc-gl5-nzk-dfy",
      urlPwa: "https://bbb.comsys.kpi.ua/rooms/fjc-gl5-nzk-dfy",
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
      lessonName: "Теорія електрокіл",
      lessonType: "practice",
      teacher: "Лободзинський В.",
      url: "https://meet.google.com/pou-dnak-dnb",
      urlPwa: "https://meet.google.com/pou-dnak-dnb",
    },
    {
      dayOfWeek: "wed",
      lessonName: "Теорія електрокіл",
      lessonType: "lecture",
      teacher: "Лободзинський В.",
      url: "https://meet.google.com/pou-dnak-dnb",
      urlPwa: "https://meet.google.com/pou-dnak-dnb",
    },
    {
      dayOfWeek: "thu",
      lessonName: "Інженерія ПЗ",
      lessonType: "practice",
      teacher: "Васильєва М.",
      url: "https://meet.google.com/fsn-gdmj-auu",
      urlPwa: "https://meet.google.com/fsn-gdmj-auu",
    },
    {
      dayOfWeek: "fri",
      lessonName: "Вища математика",
      lessonType: "lecture",
      teacher: "Голіченко І.",
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
      },
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
      lessonName: "Філософія",
      lessonType: "practice",
      teacher: "Руденко Т.",
      url: "https://zoom.us/j/9358038101?pwd=d0pwUHRDY0dxbngrU09PYll6UXpNZz09",
      urlPwa:
        "https://app.zoom.us/wc/9358038101/join?pwd=d0pwUHRDY0dxbngrU09PYll6UXpNZz09",
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
  firstLessonsRow: [
    {
      dayOfWeek: "mon",
      ...emptyLesson,
    },
    {
      dayOfWeek: "tue",
      ...emptyLesson,
      // lessonName: "Психологія Конфлікту",
      // lessonType: "lecture",
      // teacher: "Сербова О.",
      // url: "https://us05web.zoom.us/j/9299459744?pwd=Z3VQdWEvQ0tyc3pMbzl2bHN6Y1VlUT09",
      // urlPwa:
      //   "https://app.zoom.us/wc/9299459744/join?pwd=Z3VQdWEvQ0tyc3pMbzl2bHN6Y1VlUT09",
    },
    {
      dayOfWeek: "wed",
      lessonName: "Інженерія ПЗ",
      lessonType: "lecture",
      teacher: "Васильєва М.",
      url: "https://meet.google.com/fsn-gdmj-auu",
      urlPwa: "https://meet.google.com/fsn-gdmj-auu",
    },
    ...evenLessons.firstLessonsRow.slice(3),
  ],
  secondLessonsRow: [
    {
      dayOfWeek: "mon",
      ...emptyLesson,
    },
    {
      dayOfWeek: "tue",
      lessonName: "Вища математика",
      lessonType: "practice",
      teacher: "Поліщук А.",
      url: "https://us05web.zoom.us/j/2530562585?pwd=YzRiakdnWlJvSzJPRGFlQnZRRmd3UT09",
      urlPwa:
        "https://app.zoom.us/wc/2530562585/join?pwd=YzRiakdnWlJvSzJPRGFlQnZRRmd3UT09&fromPWA=1",
    },
    {
      dayOfWeek: "wed",
      lessonName: "Інженерія ПЗ",
      lessonType: "lecture",
      teacher: "Васильєва М.",
      url: "https://meet.google.com/fsn-gdmj-auu",
      urlPwa: "https://meet.google.com/fsn-gdmj-auu",
    },
    {
      dayOfWeek: "thu",
      lessonName: "Linux",
      lessonType: "lab",
      teacher: "Алєнін О.",
      url: "https://us04web.zoom.us/j/4122071690?pwd=Qd3m5bDNCT7ywK2qEyLa4bZWPfofyS.1",
      urlPwa:
        "https://app.zoom.us/wc/4122071690/join?pwd=Qd3m5bDNCT7ywK2qEyLa4bZWPfofyS.1",
    },
    ...evenLessons.secondLessonsRow.slice(4),
  ],
  thirdLessonsRow: [
    {
      dayOfWeek: "mon",
      ...emptyLesson,
    },
    {
      dayOfWeek: "tue",
      lessonName: "Теорія електрокіл",
      lessonType: "lab",
      teacher: "Лободзинський В.",
      url: "https://meet.google.com/pou-dnak-dnb",
      urlPwa: "https://meet.google.com/pou-dnak-dnb",
    },
    {
      dayOfWeek: "wed",
      lessonName: "Теорія електрокіл",
      lessonType: "lecture",
      teacher: "Лободзинський В.",
      url: "https://meet.google.com/pou-dnak-dnb",
      urlPwa: "https://meet.google.com/pou-dnak-dnb",
    },
    {
      dayOfWeek: "thu",
      ...emptyLesson,
    },
    ...evenLessons.thirdLessonsRow.slice(4, 6),
  ],
  fourthLessonsRow: [
    {
      dayOfWeek: "mon",
      ...emptyLesson,
    },
    {
      dayOfWeek: "tue",
      ...emptyLesson,
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
