const openLesson = (lesson, isPwaZoom) => {
  const URL =
    typeof lesson === "object"
      ? isPwaZoom
        ? lesson.urlPwa
        : lesson.url
      : lesson;

  if (URL && typeof URL === "object" && URL.needDialog == true) {
    return {
      textInDialog: URL.textInDialog,
      password: URL.password,
      url: URL.url,
    };
  } else if (typeof URL === "string") {
    window.open(URL, "_blank");
  } else {
    console.error("Invalid URL:", URL);
    alert("Помилка відкриття заняття");
  }
};

const handlePress = (lesson, isPwaZoom, setModalData, onOpen) => {
  const opening = openLesson(lesson, isPwaZoom);
  if (opening) {
    setModalData(opening);
    onOpen();
  }
};

export default handlePress;