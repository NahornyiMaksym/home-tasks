//Создайте массив длинною в 15 елементов, заполните его случайными числами от 0 - 20.
// ВАЖНО, ЭТОТ МАССИВИ БУДЕТ УЧАВСТВОВАТЬ ВО ВСЕХ ЗАДАНИЯХ НИЖЕ. И НЕ ДОЛЖЕН БЫТЬ ИЗМЕНЕН! ВСЕ ОПЕРАЦИИ БУДУТ НАД ЭТИМ МАССИВОМ.
const mainArray = [...Array(15)].map(value => Math.floor(Math.random() * 20));
console.log(mainArray);

//Выведите все элементы которые делятся на 3 в консоль
console.log('======== element % 3 === 0 ============');
mainArray.forEach(element => element % 3 === 0 ? console.log(element) : element);

// Выведите первый элемент, который больше 7, если такого нет, напишите что все элементы меньше 7и
console.log('=========== element > 7 =========');
const less7 = mainArray.find(element => element > 7); // не получилось сделать в одну строку с ? оператором
const res7 = less7 === undefined ? 'all elements in array < 7' : less7;
console.log(res7);

// Выведете массив. в котором каждый элемент умножен на 2. (ИСХОДНЫЙ МАССИВ ИПОЛЬЗУЕМ ИЗ ПУНКТА 1)
console.log('======= array * 2 ==================')

const arrayX2 = mainArray.map(element => element * 2);
console.log(arrayX2);

console.log('==========================================');
console.log(mainArray);

// Сложить все четные элементы массива
const initialValue = 0;
const sum = mainArray.reduce((prevValue, currentValue) => currentValue % 2 ? prevValue : prevValue + currentValue, 0);
console.log(`сумма четных используя reduce ${sum}`);

let amount = 0;
for (let i of mainArray) { // старый способ
    if (i % 2 === 0) {
        amount += i;
    }
};
console.log(`сумма всех четных используя for of = ${amount}`);


// ЗАДАЧА НА ПОИСКАТЬ. Удалите из массива первый элемент и выведете резаультат, затем удалите последний элемент и выведите результат
console.log('========================================');
console.log(mainArray);

const firstEl = mainArray.shift();
const lastEl = mainArray.pop();

console.log(`first element - ${firstEl}, last element - ${lastEl}`);
console.log(mainArray);

//ДАНО:
//
// const arrayOne = ['dog', 'cat', 'bird', 'rabbit', 'horse'];
//
// const arrayTwo = ['apple', 'car', 'cat', 'ball', 'horse'];

// Определить какие элементы массива arrayTwo есть в arrayOne.
//
// вывести массив с этими элеентами
console.log('=========================================');

const arrayOne = ['dog', 'cat', 'bird', 'rabbit', 'horse'];
const arrayTwo = ['apple', 'car', 'cat', 'ball', 'horse'];
const arrayThree = [];

const array3 = arrayTwo.filter(element => arrayOne.includes(element)); // 1 способ

for (let i of arrayTwo) {
    if (arrayOne.includes(i)) {
        arrayThree.push(i);
    }
}
console.log(arrayOne);
console.log(arrayTwo);
console.log(arrayThree);
console.log(array3);
