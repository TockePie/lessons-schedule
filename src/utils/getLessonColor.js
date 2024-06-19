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

export default getLessonColor;
