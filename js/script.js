function checkWeek() {
    let now = new Date();
    let start = new Date(now.getFullYear(), 0, 0);

    let diff = now - start;
    let oneDay = 1000 * 60 * 60 * 24;
    let day = Math.floor(diff / oneDay);
    let weekNumber = Math.ceil(day / 7);
    let isOddWeek = weekNumber % 2 === 1;
    
    return isOddWeek;
};

window.onload = function() {
    let isOddWeek = checkWeek();

    let weekInfo = document.getElementById('weekInfo');
    weekInfo.textContent = isOddWeek ? "Непарний тиждень: розклад" : "Парний тиждень: розклад";

    let rectangle = document.querySelector('.background-rectangle');
    rectangle.classList.add(isOddWeek ? 'odd-week-background-rectangle' : 'even-week-background-rectangle');
}