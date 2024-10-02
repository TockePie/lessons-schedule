const listOfSelectives = [
  "religion",
  "cities",
  "psychologyMent",
  "digitalTransformation",
  "citizensResponsibility",
  "psychologyConflict",
  "psychology",
];

const selectives = {
  religion: {
    lecture: {
      lessonName: "Релігії світу",
      lessonType: "lecture",
      teacher: "Герасько С.",
      url: () => {
        alert("Посилання недоступне");
      },
      urlPwa: () => {
        alert("Посилання недоступне");
      },
    },
    practice: {
      lessonName: "Релігії світу",
      lessonType: "practice",
      teacher: "Герасько С.",
      url: () => {
        alert("Посилання недоступне");
      },
      urlPwa: () => {
        alert("Посилання недоступне");
      },
    },
  },
  cities: {
    lecture: {
      lessonName: "Управління містами",
      lessonType: "lecture",
      teacher: "Бутник О.",
      url: "https://meet.google.com/evj-rmzo-osb",
      urlPwa: "https://meet.google.com/evj-rmzo-osb",
    },
    practice: {
      lessonName: "Управління містами",
      lessonType: "practice",
      teacher: "Шиць О.",
      url: "https://meet.google.com/ivq-vtqi-jor",

      urlPwa: "https://meet.google.com/ivq-vtqi-jor",
    },
  },
  psychologyMent: {
    lecture: {
      lessonName: "Психологія менталки",
      lessonType: "lecture",
      teacher: "Блохіна І.",
      url: "https://zoom.us/j/9943318203?pwd=Q0FUeG8xYmdrZk04UVdzdmJrWmVyZz09",
      urlPwa:
        "https://app.zoom.us/wc/9943318203/join?pwd=Q0FUeG8xYmdrZk04UVdzdmJrWmVyZz09",
    },
    practice: {
      lessonName: "Психологія менталки",
      lessonType: "practice",
      teacher: "Блохіна І.",
      url: "https://zoom.us/j/9943318203?pwd=Q0FUeG8xYmdrZk04UVdzdmJrWmVyZz09",
      urlPwa:
        "https://app.zoom.us/wc/9943318203/join?pwd=Q0FUeG8xYmdrZk04UVdzdmJrWmVyZz09",
    },
  },
  digitalTransformation: {
    lecture: {
      lessonName: "Цифрові трансформації",
      lessonType: "lecture",
      teacher: "Бутник О.",
      url: "https://meet.google.com/evj-rmzo-osb",
      urlPwa: "https://meet.google.com/evj-rmzo-osb",
    },
    practice: {
      lessonName: "Цифрова трансформація",
      lessonType: "practice",
      teacher: "Шиць О.",
      url: "https://meet.google.com/evj-rmzo-osb",
      urlPwa: "https://meet.google.com/evj-rmzo-osb",
    },
  },
  citizensResponsibility: {
    lecture: {
      lessonName: "Громадянська відповідальність",
      lessonType: "lecture",
      teacher: "Пашов Р.",
      url: "https://meet.google.com/zrw-tvoi-ojb",
      urlPwa: "https://meet.google.com/zrw-tvoi-ojb",
    },
    practice: {
      lessonName: "Громадянська відповідальність",
      lessonType: "practice",
      teacher: "Пашов Р.",
      url: "https://meet.google.com/zrw-tvoi-ojb",
      urlPwa: "https://meet.google.com/zrw-tvoi-ojb",
    },
  },
  psychologyConflict: {
    lecture: {
      lessonName: "Психологія конфлікту",
      lessonType: "lecture",
      teacher: "Сербова О.",
      url: "https://us05web.zoom.us/j/9299459744?pwd=Z3VQdWEvQ0tyc3pMbzl2bHN6Y1VlUT09",
      urlPwa:
        "https://app.zoom.us/wc/9299459744/join?pwd=Z3VQdWEvQ0tyc3pMbzl2bHN6Y1VlUT09",
    },
    practice: {
      lessonName: "Психологія конфлікту",
      lessonType: "practice",
      teacher: "Чумаков В.",
      url: "https://us05web.zoom.us/j/6297129205?pwd=sToGoAQibuvceQR7FF3jHu0l8H9vHV.1",
      urlPwa:
        "https://app.zoom.us/wc/6297129205/join?pwd=sToGoAQibuvceQR7FF3jHu0l8H9vHV.1",
    },
  },
  psychology: {
    lecture: {
      lessonName: "Психологія",
      lessonType: "lecture",
      teacher: "Волянюк Н.",
      url: "https://us02web.zoom.us/j/6762396563?pwd=L1EvTmpFZHBSdkR",
      urlPwa: "https://app.zoom.us/wc/6762396563/join?pwd=L1EvTmpFZHBSdkR",
    },
    practice: {
      lessonName: "Психологія",
      lessonType: "practice",
      teacher: "Хілько С.",
      url: "https://us05web.zoom.us/j/89105881403?pwd=bnVLS0lkVWNwRmc0K1hOdkdVV1FVdz09",
      urlPwa:
        "https://app.zoom.us/wc/89105881403/join?pwd=bnVLS0lkVWNwRmc0K1hOdkdVV1FVdz09",
    },
  },
};

export { listOfSelectives, selectives };
