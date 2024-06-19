const getLessonColor = (lessonType) => {
  switch (lessonType) {
    case "lecture":
      return "border-indigo-500";
    case "practice":
      return "border-red-500";
    case "lab":
      return "border-lime-500";
  }
};

const getExamText = (screen) => {
  switch (screen) {
    case "desktop":
      return "Розклад іспитів";
    case "mobile":
      return "Іспити";
    default:
      return "";
  }
};

const getWeekText = (screen, isOdd) => {
  switch (screen) {
    case "desktop":
      return isOdd ? "Непарний тиждень: розклад" : "Парний тиждень: розклад";
    case "mobile":
      return isOdd ? "Непарний" : "Парний";
    default:
      return "";
  }
};

const getCurrentDay = () => {
  switch (new Date().getDay()) {
    case 1:
      return ["mon", "Понеділок"];
    case 2:
      return ["tue", "Вівторок"];
    case 3:
      return ["wed", "Середа"];
    case 4:
      return ["thu", "Четвер"];
    case 5:
      return ["fri", "П'ятниця"];
    case 6:
      return ["sat", "Субота"];
  }
};

export { getLessonColor, getExamText, getWeekText, getCurrentDay };
