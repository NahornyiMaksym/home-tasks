//1. Создайте массив из следующих значений
//
// '455'
// 87.15
// true
// undefined
// 7
// null
// 'false'
// []
// {}
// Выведите информацию о типе каждого элемента в консоли.
//
// Если элемент это число, прибавте к нему 3

let array = [ '455', 87.15, true, undefined, 7, null, 'false', [], {} ];
for (let key of array) {
    if (typeof key === typeof 1) {
        key += 3;
    }
    console.log(`${key} - ${typeof key}`);
}

console.log('============= PRACTICING FOR EACH ==================')

array.forEach(function (element) {
    if (typeof element === typeof 1) {
        element += 3;
    }
    console.log(`${element} - ${typeof element}`);
});


//2. Напишите программу, которая спрашивает у пользователя целое число. Создайте массив из случайных элементов, длинной в это число. Случайные чила долны быть в диапазоне 0 до 10. Используйте методы Math.random() и Math.floor() для реализации.
// Выведите содержимое массива консоль.
console.log('======== task 2 ==============')
const number = Number(prompt('Enter integer number:'));
const numbList = [];
for (let i = number; i > 0; i--) {
    numbList.push(Math.floor( (Math.random() * 10) ));
}
console.log(numbList);

// Скопируйте массив в новый массив. Каждый третий элемент нового массива умножте на 3.
// Выведите содержимое нового массива в консоли. Подсказака. ПОМНИТЕ ПРО ССЫЛКИ НА МАССИВ ПРИ КОПИРОВАНИИ;)
console.log('===== copied array every 3rd element * 3 =============')
let numbList_2 = numbList.map(value => value);
for (let counter = 2; counter < numbList_2.length; counter += 3) {
    numbList_2[counter] *= 3;
}
console.log(numbList_2);

//3. Создайте объект student1 со свойствами firstName, lastName и mark;
console.log('================ task 3 ======================')
console.log('================ student 1 ======================')
const student1 = {
    firstName : 'Name',
    latName : 'Surname',
    mark : 9
}
console.log(student1);

// Скопируйте объект student1 в новый объект student2 с помощью spread оператора ( ... ) и измените значение mark;
console.log('================ student 2 ======================')
const student2 = {...student1};
student2.mark = 10;
console.log(student2);

// Скопируйте объект student1 в новый объект student3 с помощью Object.assign() и измените значение mark;
console.log('================ student 3 ======================')
const student3 = Object.assign({},student1);
student3.mark = 11;
console.log(student3);

// Посчитайте среднюю оценку по группе (тоесть между 3я новыми объектами)
// Просто получить значения свойства mark у каждого студента через точку или []
// Выведите полученные результаты в консоль.
console.log('===============================================')
let sum = 0;
const group = [student1, student2, student3];
for (let i of group) {
    sum += i.mark; // сложение оценок

    console.log(`${i.firstName} - mark ${i.mark}`); // вывод mark каждого студента
}

console.log('=========================================')

let averageNum = sum / group.length; // расчет средней оценки

console.log(`Средняя оценка в группе = ${averageNum}`);

const mark = (student1.mark + student2.mark + student3.mark) / 3; // второй вариант расчета средней оценки


// Отобразите все ключи и значения объекта student1 в виде:
//
// ключ - значение
//
// ключ - значение
//
// Используя цыкл
console.log('========= student 1 key - value =====================')

for (let key in student1) {
    console.log(`${key} - ${student1[key]}`);
};
