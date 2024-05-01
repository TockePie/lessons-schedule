export const GROUP = 'ІО-32';

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
        teacher: 'Новотарський М.А.',
        url: 'https://us02web.zoom.us/j/87578307057?pwd=UGwyVGlwc3M4Q0Q0Q0NLWUt6bmVpUT09'
    },
    {
        dayOfWeek: 2,
        ...emptyLesson
    },
    {
        dayOfWeek: 3,
        lessonName: 'Фізика',
        lessonType: 'lab',
        teacher: 'Ляховецький В.Р.',
        url: 'https://us04web.zoom.us/j/76362666471?pwd=bDVWbTRRdTIwT3h4RCszcEhOWDQ0QT09'
    },
    {
        dayOfWeek: 4,
        lessonName: 'Основи здоров\'я',
        lessonType: 'practice',
        teacher: 'Новицький Ю.В.',
        url: 'https://zoom.us/j/98105710510?pwd=QWltN0NnTm1yNGttTHVaQVVqdHVrdz09'
    },
    {
        dayOfWeek: 5,
        lessonName: 'Фізика',
        lessonType: 'lecture',
        teacher: 'Русаков В.Ф.',
        url: 'https://meet.google.com/mie-rrfc-aeo?hs=151'
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
        teacher: 'Голіченко І.І.',
        url: () => {
            const password = 'C2qR3w';
            alert(`Після відкриття посилання вставте пароль:
    ${password} (натисніть ОК для копіювання)`);
            navigator.clipboard.writeText(password)
            .then(() => {
                console.log('Password copied to clipboard');
            })
            .catch(err => {
                console.log('Could not copy text: ', err);
            });
            window.open('https://us02web.zoom.us/j/8067850314', '_blank')
        },
    },
    {
        dayOfWeek: 2,
        ...emptyLesson
    },
    {
        dayOfWeek: 3,
        lessonName: 'Дискретна математика',
        lessonType: 'lab',
        teacher: 'Пономаренко А.М.',
        url: 'https://us05web.zoom.us/j/7089075754?pwd=TWRlZmxyVlFiTWU1UGlVVU1XcFE0Zz09'
    },
    {
        dayOfWeek: 4,
        lessonName: 'Фізика',
        lessonType: 'practice',
        teacher: 'Рускаов В.Ф.',
        url: 'https://meet.google.com/mie-rrfc-aeo?hs=151'
    },
    {
        dayOfWeek: 5,
        lessonName: 'Комп\'ютерна аритметика',
        lessonType: 'lecture',
        teacher: 'Жабін В.І.',
        url: 'https://bbb.comsys.kpi.ua/rooms/vqj-umt-tas-leo/join'
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
        teacher: 'Поліщук А.Ю.',
        url: 'https://us05web.zoom.us/j/2530562585?pwd=YzRiakdnWlJvSzJPRGFlQnZRRmd3UT09'
    },
    {
        dayOfWeek: 3,
        lessonName: 'Іноземна мова',
        lessonType: 'practice',
        teacher: 'Гаєва П.О.',
        url: 'https://us04web.zoom.us/j/2114671234?pwd=UnZCd1VvRmVsSDJGVTBuc3JMUDI1UT09'
    },
    {
        dayOfWeek: 4,
        lessonName: 'Комп\'ютерна аритметика',
        lessonType: 'lab',
        teacher: 'Верба О.А.',
        url: 'https://us04web.zoom.us/j/7382214783?pwd=RnZ3SWgwK1JoVkZtNndnKzdPZjFGdz09'
    },
    {
        dayOfWeek: 5,
        lessonName: 'Програмування',
        lessonType: 'lecture',
        teacher: 'Алещенко О.В.',
        url: 'https://us02web.zoom.us/j/2711546637?pwd=Ry82RHp3SjV6WTZRMXl6WUNod25hUT09'
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
        teacher: 'Онуфрієнко О.П.',
        url: 'https://us05web.zoom.us/j/89608497213?pwd=BWO53tgq9zTWe8IZyI7hh3bqhtihyK.1'
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
    evenLessonsInThird[1],
    ...evenLessonsInSecond.slice(3)
];

const oddLessonsInThird = [
    evenLessonsInSecond[0],
    ...evenLessonsInThird.slice(1, 3),
    {
        dayOfWeek: 4,
        lessonName: 'Програмування',
        lessonType: 'lab',
        teacher: 'Алещенко О.В.',
        url: 'https://us02web.zoom.us/j/2711546637?pwd=Ry82RHp3SjV6WTZRMXl6WUNod25hUT09'
    },
    ...evenLessonsInThird.slice(4, 6)
];

const oddLessonsInFourth = [
    {
        dayOfWeek: 1,
        lessonName: 'Культура мовлення',
        lessonType: 'lecture',
        teacher: 'Онуфрієнко О.П.',
        url: 'https://us05web.zoom.us/j/89608497213?pwd=BWO53tgq9zTWe8IZyI7hh3bqhtihyK.1'
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
