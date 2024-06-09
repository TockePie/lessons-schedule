export const GROUP = "ІО-32";

export const exams = [
  {
    date: "12 Червня",
    time: "14:00",
    lessonName: "Вища математика",
    lessonType: "lecture",
    teacher: "Голіченко І.І.",
    url: () => {
      const password = "C2qR3w";
      alert(`Після відкриття посилання вставте пароль:
        ${password} (натисніть ОК для копіювання)`);
      navigator.clipboard.writeText(password);
      window.open("https://us02web.zoom.us/j/8067850314", "_blank");
    },
    urlPWA: () => {
      const password = "C2qR3w";
      alert(`Після відкриття посилання вставте пароль:
        ${password} (натисніть ОК для копіювання)`);
      navigator.clipboard.writeText(password);
      window.open("https://app.zoom.us/wc/8067850314/join", "_blank");
    },
  },
  {
    date: "17 червня",
    time: "09:00",
    lessonName: "Комп'ютерна аритметика",
    teacher: "Жабін В.І.",
    url: "https://bbb.comsys.kpi.ua/rooms/vqj-umt-tas-leo/join",
    urlPWA: "https://bbb.comsys.kpi.ua/rooms/vqj-umt-tas-leo/join",
  },
  {
    date: "21 червня",
    time: "08:00",
    lessonName: "Фізика",
    teacher: "Рускаов В.Ф.",
    url: "https://meet.google.com/mie-rrfc-aeo?hs=151",
    urlPWA: "https://meet.google.com/mie-rrfc-aeo?hs=151",
  },
];
