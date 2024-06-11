export const GROUP = "ІО-32";

export const exams = [
  {
    date: "12 Червня",
    time: "08:00",
    lessonName: "Вища математика",
    teacher: "Ільєнко М. К.",
    url: "https://us06web.zoom.us/j/89285187807?pwd=9EsZfH1KpddzbqblgC9z2tbtpEGj7A.1",
  },
  {
    date: "18 червня",
    time: "13:00",
    lessonName: "Комп'ютерна аритметика",
    teacher: "Жабін В.І.",
    url: "https://bbb.comsys.kpi.ua/rooms/vqj-umt-tas-leo/join",
  },
  {
    date: "22 червня",
    time: "13:00",
    lessonName: "Фізика",
    teacher: "Лаванов Г.Ю.",
    url: () => {
      alert(`див. Чат фізики: посилання щоразу змінюється!`);
    },
  },
];
