const openLesson = (lesson, isPwaZoom) => {
  const urlOrFunction = isPwaZoom ? lesson.urlPWA : lesson.url;
  urlOrFunction && typeof urlOrFunction === "function"
    ? urlOrFunction()
    : window.open(urlOrFunction);
};

export default openLesson;
