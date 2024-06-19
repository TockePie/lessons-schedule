const examText = (screen) => {
  switch (screen) {
    case "desktop":
      return "Розклад іспитів";
    case "mobile":
      return "Іспити";
    default:
      return "";
  }
};

export default examText;
