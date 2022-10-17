// 1) Создать функцию, которая при каждом вызове будет показывать разницу в секундах между временем, когда ее вызывали последний раз и теперешним.
// Если вызываем первый раз, то возвращаем строку 'Enabled' и сохраняем время вызова функции. Последующий вызов функции вернет строку вида '2 seconds have passed'
// Запрещается использовать глобальные переменные как хранилище значений.

let getTime = function () {
    let previousTime = 0;

    return function () {

        if (previousTime === 0 ) { // Это условие выполняется при первом вызове

            previousTime += Date.now(); // записываем время, когда вызвали первый раз
            return console.log('Enabled')
        }

        let presentTime = Date.now(); // записывается время текущего вызова функции, если ее вызывают не первый раз

        let timePassed = Math.round((presentTime - previousTime)/1000); // считаем сколько времени прошло

        previousTime = Date.now(); // перезаписываем время предыдущего вызова функции
        return console.log(timePassed + ' seconds is passed ');

    }
}

const getTime2 = getTime();


// Чтобы по клику запускать функцию со страницы
let runGetTime = document.querySelector('p');
runGetTime.addEventListener('click', getTime2);


// 2) Создать таймер обратного отсчета, который будет в console выводить время в формате MM:SS. Где MM - количество минут, SS - количество секунд. При этом когда закончится время, нужно вывести в console строку "Timer End".

let startTimer = document.querySelector('#timer');
startTimer.addEventListener('click', runTimer);// запуск таймера со страницы

let time = 15; // время отсчета
let intervalCount = '';

function runTimer () { // функция для запуска интервала, который запускает функцию count
    intervalCount = setInterval(count,1000);
}

function count () {

    if (time === 0) {
        console.log('Timer End');
        clearInterval(intervalCount);
        return;
    }

    let minutes = Math.floor(time / 60); // получаем минуты, округляем до меньшего целого
    let seconds = time % 60; // по остатку от деления получаем количество секунд

    minutes = minutes < 10 ? '0' + minutes : minutes; // дорисовываем 0, чтобы формат был ММ СС
    seconds = seconds < 10 ? '0' + seconds : seconds;

    time--; // с каждым вызовом функции уменьшаем заданное время
    console.log(`${minutes}:${seconds}`);
}