import checkDay from "./checkDay";

const allDays = [
  { key: "mon", label: "Понеділок" },
  { key: "tue", label: "Вівторок" },
  { key: "wed", label: "Середа" },
  { key: "thu", label: "Четвер" },
  { key: "fri", label: "П'ятниця" },
  { key: "sat", label: "Субота" },
];

const currentDay = () => {
  switch (checkDay()) {
    case "mon":
      return "Понеділок";
    case "tue":
      return "Вівторок";
    case "wed":
      return "Середа";
    case "thu":
      return "Четвер";
    case "fri":
      return "П'ятниця";
    case "sat":
      return "Субота";
  }
};

export { currentDay, allDays };
