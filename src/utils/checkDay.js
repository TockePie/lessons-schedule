export default function checkDay() {
  let currentDay = "";

  switch (new Date().getDay()) {
    case 1:
      currentDay = "mon";
      break;
    case 2:
      currentDay = "tue";
      break;
    case 3:
      currentDay = "wed";
      break;
    case 4:
      currentDay = "thu";
      break;
    case 5:
      currentDay = "fri";
      break;
    case 6:
      currentDay = "sat";
      break;
  }

  return currentDay;
}
