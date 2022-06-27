// 1) Напишите функцию fillArray, которая создает массив и заполняет ее предоставленным значением.
// let array = fillArray(10, 'qwerty'), // ['qwerty', 'qwerty', 'qwerty'...]
// где 10 - это длинна массива, а 'qwerty' его значения

function fillArray (elementsNumber, value) {
    return [...Array(elementsNumber)].map(element => value);
}

let array = fillArray(5, 'qwerty');
console.log(array);

// 2) Напишите функцию filterArray, которая очищает массив от нежелательных значений (false, undefined, '', 0, null), СПИСОК КОТОРЫХ ПЕРЕДАН ВВИДЕ АРГУМЕНТОВ ФУНКЦИИ.
// let array = [0, 1, 2, null, undefined, 'qwerty', false];
// let result = filterArray(array, false, undefined, '', 0, null);
// // result - [1,2, 'qwerty'];
console.log('=======================================');
let array2 = [0, 1, 2, null, undefined, 'qwerty', false];
console.log(array2);

function filterArray (array, ...args) {
    if (!args.length) {
        return 'no arguments';
    }
    return array.filter(element => !args.includes(element));

}
console.log(`Filtered - ${filterArray(array2, false, undefined, '', 0, null)}`);


// 3) Напишите функцию calcSum, которая вернет сумму всех входящих параметров функции.
//
// let sum1 = calcSum(0); // 0
// let sum1 = calcSum(1,2,3); // 6
// let sum1 = calcSum(5,0,10, 1, 5); // 21

console.log('======= arguments sum ============')
function calcSum () {
    if (!arguments.length) {
        return 'No Arguments';
    }
    let res = 0;
    for (let i = 0; i < arguments.length; i ++) {
        res += arguments[i];
    }
    return res;
}

console.log(calcSum(1, 2, 3));

// 4) Напишите функцию декортор, которая будет выводить все данные ей строки добавля в начлч и в конец строку: =====
//
// как должен выглядить код:
//
// createPipe - то что вы должны реализовать
//
// const pipeFunction = createPipe();
// pipeFunction('some text you like');
// // output: ===== 'some text you like' =====
console.log('=====================================');
const pipeFunction = createPipe => console.log(`===== ${createPipe} =====`);

pipeFunction('some text');


function otherPipeFunc () { // второй вариант
    return function (someText) {
        let res = '=====' + ' ' + someText + ' ' + '=====';
        return console.log(res);
    }
}
const otherWay = otherPipeFunc();
otherWay('OTHER WAY Some Text');



// 5) Создайте функцию, которая принемает 2а аругемнта, текст и функцию для его вывода
//
// вызовете ее дважды таким образом, чтобы в первый раз выво строки был в консоль, а второй раз в алерте.
console.log('================================')
function outputAlert (text) {
    return alert(text);
}
function outputCons (text) {
    console.log(text);
}


function outputFunc (someText, someFunc) {
    return someFunc(someText);
}

outputFunc('Text to console', outputCons);
outputFunc('Text to alert', outputAlert);
