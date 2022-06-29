//1) Создайте массив frameworks со значениями: ‘AngularJS’, ‘jQuery’

const frameworks = ['AngularJS', 'jQuery' ];
console.log(frameworks);
console.log('==========================');


// a. Добавьте в начало массива значение ‘Backbone.js’

frameworks.unshift('Backbone.js');
console.log(frameworks);
console.log('==========================');

// b. Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’

frameworks.push('ReactJS', 'Vue.js');
console.log(frameworks);
console.log('==========================');

// c. Добавьте в массив значение ‘CommonJS’ вторым элементом

frameworks.splice(1, 0, 'CommonJS');
console.log(frameworks);

// d. Найдите и удалите из массива значение ‘jQuery’ и выведите его в консоль со словами “Это здесь лишнее”
const toBeDeleted = 'jQuery';

if (frameworks.includes(toBeDeleted)) {

    console.log(`Это здесь лишнее - ${toBeDeleted}`)

    frameworks.splice( frameworks.findIndex(element => element === toBeDeleted), 1);
    console.log(frameworks);
} else {
    console.log('no such element')
}
console.log('==========================');

// 2) Создайте функцию removeNegativeElements, которая удаляет из входящего массива все негативные числа.
//
//
//
// let result = removeNegativeElements([-9, 2, 3, 0, -28, 'value']); // [2, 3, 0, 'value'];
// let result = removeNegativeElements([-9, -21, -12]; // []
// let result = removeNegativeElements(['-102', 102]); // ['-102', 102]
function removeNegativeElements (array) {
    return array.filter(element => element >= 0 || typeof element === "string");
}

let result = removeNegativeElements([-9, 2, 3, 0, -28, 'value'])
console.log(result);

let result2 = removeNegativeElements([-9, -21, -12]);
console.log(result2);

let result3 = removeNegativeElements(['-102', 102]);
console.log(result3);

console.log('==========================');

// 3) Создайте фнкцию getStringElements, которая возвращает входящий массив только со строковыми значениями.
//
//
//
// let arr = [1 , true , 42 , "red" , 64 , "green" , "web" , new Date() , -898 , false]
// let result = getStringElements(arr); // ['green', 'web']

function getStringElements (someArray) {
    return someArray.filter(element => typeof element === "string");
}

let array = [1 , true , 42 , "red" , 64 , "green" , "web" , new Date() , -898 , false];
console.log(array);

let result4 = getStringElements(array);
console.log(result4);

console.log('==========================');

// 4) Напищите функцияю, которая рикурсивно суммирует все элементы массива
//
// массв 10 элементов, заполнен случайными числами от 0 - 10, как в ДЗ ранее

const someArray = [...Array(10)].map(value => Math.floor(Math.random() * 10));
console.log(someArray);

function sum (array, start = 0, result = 0) {

    if (start === array.length) {
        return result;
    }
    result += array[start];
    return sum (array, ++start, result);
}

console.log(`Сумма = ${sum(someArray)}`);


// 5) Дан массив const arr = [0, 2, 4, 5, 7, 10, 2, 3 5, 6, 10, 3]
//
// напишите функцию, рикурсивно сумирующую все элементы = 10

const array2 = [0, 2, 4, 5, 7, 10, 2, 3, 5, 6, 10, 3];

function sum10 (array, start = 0, result = 0) {
    if (array[start] === undefined) {
        return result;
    }
    if (array[start] === 10) {
        result += 10;
    }
    return sum10 (array, ++start, result);
}

console.log(array2);
console.log(`Сумма всех '10' = ${sum10(array2)}`);

console.log('================================');


// 6) Дан массив const arr = [0, 2, 4, 5, 7, 10, 2, 3 5, 6, 10, 3]
//
// напишите функцию, которая рекурсивно ищет все элементы > 5 и возвращает их ввиде массива

function sum5AndMore (array, start = 0, result = 0) {
    if (array[start] === undefined) {
        return result;
    }
    if (array[start] > 5 && typeof array[start] != "string") {
        result += array[start];
    }
    return sum5AndMore(array, ++start, result);
}

console.log(array2);
console.log(`Сумма всех элементов, которые > 5 = ${sum5AndMore(array2)}`);

