import checkDay from "./checkDay";

const allDays = [
  { key: "mon", label: "Понеділок" },
  { key: "tue", label: "Вівторок" },
  { key: "wed", label: "Середа" },
  { key: "thu", label: "Четвер" },
  { key: "fri", label: "П'ятниця" },
  { key: "sat", label: "Субота" },
];

let currentDay;

switch (checkDay()) {
  case "mon":
    currentDay = "Понеділок";
    break;
  case "tue":
    currentDay = "Вівторок";
    break;
  case "wed":
    currentDay = "Середа";
    break;
  case "thu":
    currentDay = "Четвер";
    break;
  case "fri":
    currentDay = "П'ятниця";
    break;
  case "sat":
    currentDay = "Субота";
    break;
}

export { currentDay, allDays };
