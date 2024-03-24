export const group = 'ІО-32';

const emptyLesson = {
    lessonName: null,
    lessonType: null,
    teacher: null
};

const evenLessonsInFirst = [
    {
        dayOfWeek: 1,
        lessonName: 'Дискретна математика',
        lessonType: 'lecture',
        teacher: 'Новотарський М.А.'
    },
    {
        dayOfWeek: 2,
        ...emptyLesson
    },
    {
        dayOfWeek: 3,
        lessonName: 'Фізика',
        lessonType: 'lab',
        teacher: 'Ляховецький В.Р.'
    },
    {
        dayOfWeek: 4,
        lessonName: 'Основи здоров\'я',
        lessonType: 'practice',
        teacher: 'Новицький Ю.В.'
    },
    {
        dayOfWeek: 5,
        lessonName: 'Фізика',
        lessonType: 'lecture',
        teacher: 'Рускаов В.Ф.'
    },
    {
        dayOfWeek: 6,
        ...emptyLesson
    }
];

const evenLessonsInSecond = [
    {
        dayOfWeek: 1,
        lessonName: 'Вища математика',
        lessonType: 'lecture',
        teacher: 'Голіченко І.І.'
    },
    {
        dayOfWeek: 2,
        ...emptyLesson
    },
    {
        dayOfWeek: 3,
        lessonName: 'Дискретна математика',
        lessonType: 'lab',
        teacher: 'Пономаренко А.М.'
    },
    {
        dayOfWeek: 4,
        lessonName: 'Фізика',
        lessonType: 'practice',
        teacher: 'Рускаов В.Ф.'
    },
    {
        dayOfWeek: 5,
        lessonName: 'Комп\'ютерна аритметика',
        lessonType: 'lecture',
        teacher: 'Жабін В.І.'
    },
    {
        dayOfWeek: 6,
        ...emptyLesson
    }
];

const evenLessonsInThird = [
    {
        dayOfWeek: 1,
        ...emptyLesson
    },
    {
        dayOfWeek: 2,
        lessonName: 'Вища математика',
        lessonType: 'practice',
        teacher: 'Поліщук А.Ю.'
    },
    {
        dayOfWeek: 3,
        lessonName: 'Іноземна мова',
        lessonType: 'practice',
        teacher: 'Гаєва П.О.'
    },
    {
        dayOfWeek: 4,
        lessonName: 'Комп\'ютерна аритметика',
        lessonType: 'lab',
        teacher: 'Верба О.А.'
    },
    {
        dayOfWeek: 5,
        lessonName: 'Програмування',
        lessonType: 'lecture',
        teacher: 'Алещенко О.В.'
    },
    {
        dayOfWeek: 6,
        ...emptyLesson
    }
];

const evenLessonsInFourth = [
    {
        dayOfWeek: 1,
        ...emptyLesson
    },
    {
        dayOfWeek: 2,
        lessonName: 'Культура мовлення',
        lessonType: 'practice',
        teacher: 'Онуфрієнко О.П.'
    },
    {
        dayOfWeek: 3,
        ...emptyLesson
    },
    {
        dayOfWeek: 4,
        ...emptyLesson
    },
    {
        dayOfWeek: 5,
        ...emptyLesson
    },
    {
        dayOfWeek: 6,
        ...emptyLesson
    },
];

const oddLessonsInFirst = evenLessonsInFirst;

const oddLessonsInSecond = [
    ...evenLessonsInSecond.slice(0, 2),
    {
        dayOfWeek: 3,
        lessonName: 'Вища математика',
        lessonType: 'practice',
        teacher: 'Поліщук А.Ю.'
    },
    ...evenLessonsInSecond.slice(3)
];

const oddLessonsInThird = [
    {
        dayOfWeek: 1,
        lessonName: 'Вища математика',
        lessonType: 'lecture',
        teacher: 'Голіченко І.І.'
    },
    ...evenLessonsInThird.slice(1, 3),
    {
        dayOfWeek: 4,
        lessonName: 'Програмування',
        lessonType: 'lab',
        teacher: 'Алещенко О.В.'
    },
    ...evenLessonsInThird.slice(4, 6)
];

const oddLessonsInFourth = [
    {
        dayOfWeek: 1,
        lessonName: 'Культура мовлення',
        lessonType: 'lecture',
        teacher: 'Онуфрієнко О.П.'
    },
    {
        dayOfWeek: 2,
        ...emptyLesson
    },
    ...evenLessonsInFourth.slice(2)
];

export const evenLessons = [
    evenLessonsInFirst,
    evenLessonsInSecond,
    evenLessonsInThird,
    evenLessonsInFourth
];

export const oddLessons = [
    oddLessonsInFirst,
    oddLessonsInSecond,
    oddLessonsInThird,
    oddLessonsInFourth
];
