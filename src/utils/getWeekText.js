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

export default getWeekText;
