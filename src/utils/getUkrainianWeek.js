const allDays = [
  { key: "mon", label: "Понеділок" },
  { key: "tue", label: "Вівторок" },
  { key: "wed", label: "Середа" },
  { key: "thu", label: "Четвер" },
  { key: "fri", label: "П'ятниця" },
  { key: "sat", label: "Субота" },
];

const currentDay = () => {
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

export { currentDay, allDays };
