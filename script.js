function hourFunction(x) {
    return (x - (x % 3600))/ 3600;
}

function minuteFunction(x) {
    return ((x % 3600) - ((x % 3600) % 60)) / 60;
}

function secondFunction(x) {
    return (x % 3600) % 60;
}

let n = 0;
hours.innerHTML = 0;
minutes.innerHTML = 0;
seconds.innerHTML = 0;

function stopWatch() {
    n = n + 1;
    hours.innerHTML = hourFunction(n);
    minutes.innerHTML = minuteFunction(n);
    seconds.innerHTML = secondFunction(n);
}

let myInterval = setInterval(stopWatch, 1000);
clearInterval(myInterval);

let canStart = true;

function startInterval() {
    if (canStart) {
        myInterval = setInterval(stopWatch, 1000);
    }
    
    canStart = false;
}

function stopInterval() {
    clearInterval(myInterval);
    canStart = true;
}

function endInterval() {
    clearInterval(myInterval);
    hours.innerHTML = 0;
    minutes.innerHTML = 0;
    seconds.innerHTML = 0;
    n = 0;
    canStart = true;

}

firstButton.addEventListener('click', startInterval);
secondButton.addEventListener('click', stopInterval);
thirdButton.addEventListener('click', endInterval);










