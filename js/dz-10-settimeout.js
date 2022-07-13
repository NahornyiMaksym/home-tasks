// 1) Создайте объект coffeeMachine со свойством message: ‘Your coffee is ready!’ и методом start(), при вызове которого через 3 секунды в консоль выведется сообщение, записанное в свойстве message.
//
// Начальный код:
// let coffeeMachine = {
//    message: 'Your coffee is ready!',
//    start: function() {
//      // write your code here
//    },
// }

let coffeeMachine = {
    message: 'Your coffee is ready!',
    start: function() {
        setTimeout(output => console.log(this.message), 3000)
    }
};


coffeeMachine.start(); // 'Your coffee is ready!'



// Создайте объект teaPlease со свойством message: 'Wanna some tea instead of coffee?'. Обновите методу start() контекст так, чтобы он выводил сообщение с нового объекта.

let teaPlease = {
    message: 'Wanna some tea instead of coffee?'
}

const tea = coffeeMachine.start.bind(teaPlease); // decision 1
tea();
coffeeMachine.start.call(teaPlease); // decision 2

// 2) Напишите функцию concatStr(), которая соединяет две строки, разделенные каким-то символом: разделитель и строки передаются в параметрах функции. Используя привязку аргументов с помощью bind, создайте новую функцию hello(), которая которая выводит приветствие тому, кто передан в ее параметре:


const stringObj = {
    string1 : 'Gerald',
    devSymbol : ', ',
    string2 : 'how you doing?',
    concatStr : function () {
        console.log(this.string1 + this.devSymbol + this.string2);
        return function (yourText) {
         console.log(yourText + this.devSymbol + this.string2);
     }
    }
}

let hi = stringObj.concatStr();
hi.bind(stringObj, 'Ciri')(); // <= ВОПРОС, как правильнее? => hi.bind(stringObj)('Ciri'), работают оба

//===================================================
// Способ 2

const object1 = {
    grating : 'Hello',
    symbol : ' '
}

function concat1 (someName) {
    console.log(this.grating + this.symbol + someName);
}

concat1.bind(object1, 'Ronnie')();

const hello = concat1.bind(object1);
hello('Tommy');



// 3) Напишите функцию showNumbers(), которая последовательно выводит в консоль числа в заданном диапазоне, с заданным интервалом (все данные должны передаваться как параметры функции).
//
// tips: для реализации используйте функцию setInterval()

// function showNumbers (from, to, interval){
//
// }

//=============== for ====================== закомментировал, чтоб не мешало в визуализации

// function showNumbers (from, to, interval){
//    for (let i = from; i <= to; i++) {
//        let res = i;
//        setTimeout( () => console.log(res), res * interval);
//     }
// }
// showNumbers(1,5,500);

//====================== Interval ========================
function  showNumbers3 (from, to, interval) {
    let period = setInterval(() => {
        if (from === to) {
            clearInterval(period);
        }
        return console.log(from++);
    }, interval);
}
showNumbers3(1, 5, 500);

// ====================== recursion ===============================

// function showNumbers2 (from, to, interval, i = 0) {
//     if (i === to) {
//         return setTimeout(() => console.log('finished'), i * interval)
//     }
//     setTimeout(() => console.log(i), i * interval)
//     return showNumbers2 (from, to, interval, ++i)
// }
// showNumbers2(1, 5, 500);


// 4) Какой результат выполнения будет у данного кода? Объяснить почему.

function addBase(base) {
  return function (num) {
    return base + num;
  };
}
let addOne = addBase(1);
alert(addOne(5) + addOne(3)); // результат 10, записав addBase в переменную, мы ее вызвали и передали аргумент base = 1, последующие вызовы через переменную возвращают нам безымянную функцию с уже записаным аргументом base, и мы передаем num = 3 и 5, функция возвращает num(5) + base(1) и num(3) + base(1), alert возвращает нам сумму этих двух вызовов функции.