let count = 0;

const counter = document.getElementById("counter");
const tasbeehBtn = document.getElementById("tasbeehBtn");
const resetBtn = document.getElementById("resetBtn");

// زر التسبيح
tasbeehBtn.addEventListener("click", function () {
    count++;

    counter.textContent = count;
});

// زر إعادة التصفير
resetBtn.addEventListener("click", function () {
    count = 0;

    counter.textContent = count;
});
