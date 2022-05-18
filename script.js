const daySelect = document.getElementById('day');
const weekSelect = document.getElementById('week');
const monthSelect = document.getElementById('month');
const dailyDisplay = document.querySelectorAll('.daily');
const weeklyDisplay = document.querySelectorAll('.weekly');
const monthlyDisplay = document.querySelectorAll('.monthly');

daySelect.addEventListener('click', function (e) {
    e.preventDefault();
    for (let i = 0; i < dailyDisplay.length; i++) {
        dailyDisplay[i].classList.remove('hide');
        weeklyDisplay[i].classList.add('hide');
        monthlyDisplay[i].classList.add('hide');
    }
});

weekSelect.addEventListener('click', function (e) {
    e.preventDefault();
    for (let i = 0; i < dailyDisplay.length; i++) {
        dailyDisplay[i].classList.add('hide');
        weeklyDisplay[i].classList.remove('hide');
        monthlyDisplay[i].classList.add('hide');
    }
});

monthSelect.addEventListener('click', function (e) {
    e.preventDefault();
    for (let i = 0; i < dailyDisplay.length; i++) {
        dailyDisplay[i].classList.add('hide');
        weeklyDisplay[i].classList.add('hide');
        monthlyDisplay[i].classList.remove('hide');
    }
});