import { group, evenLessons, oddLessons } from './data.js';

function checkWeek() {
    let now = new Date();
    let start = new Date(now.getFullYear(), 0, 0);

    let diff = now - start;
    let oneDay = 1000 * 60 * 60 * 24;
    let day = Math.floor(diff / oneDay);
    let weekNumber = Math.ceil(day / 7);
    let isOddWeek = weekNumber % 2 === 1;
    
    return isOddWeek;
}

function addLessonToTable(isOddWeek) {
    const lessons = isOddWeek ? oddLessons : evenLessons;

    const academicGroup = document.getElementById('academic-group');
    academicGroup.textContent = group;

    for (let i = 0; i < lessons.length; i++) {
        const dayLessons = lessons[i];

        for (let j = 0; j < dayLessons.length; j++) {
            const lesson = dayLessons[j];
            const elementClass = `.l${i + 1}-row-${j + 1}`;

            const lessonElement = document.querySelector(elementClass);
            const lessonNameElement = lessonElement.querySelector('.lesson-name');
            const lessonTeacherElement = lessonElement.querySelector('.lesson-teacher');

            if (lesson.lessonName == null && lesson.teacher == null) {
                lessonNameElement.classList.add('null-lesson-info-block');
                lessonElement.classList.remove(`.l${i + 1}-row-${j + 1}`);
                lessonElement.classList.remove(`lesson-info-block`);
            } else {
                lessonNameElement.textContent = lesson.lessonName;
                lessonTeacherElement.textContent = lesson.teacher;

                switch (lesson.lessonType) {
                    case 'lecture':
                        lessonElement.classList.add('lesson-lecture');
                        break;
                    case 'practice':
                        lessonElement.classList.add('lesson-practice');
                        break;
                    case 'lab':
                        lessonElement.classList.add('lesson-lab');
                        break;
                }
            }
        }
    }
}

window.onload = function() {
    let isOddWeek = checkWeek();

    let weekInfo = document.getElementById('weekInfo');
    weekInfo.textContent = isOddWeek ? "Непарний тиждень: розклад" : "Парний тиждень: розклад";

    let rectangle = document.querySelector('.background-rectangle');
    rectangle.classList.add(isOddWeek ? 'odd-week-background-rectangle' : 'even-week-background-rectangle');

    addLessonToTable(isOddWeek);
}
