// Объявите константу с целым числом числом и выведите ее в консоль в шестнадцатиричном и двочном виде. ВЫВОД В КОНСОЛЬ ОСУЩЕСТВИТЕ ПРИ ПОМОЩИ ШАБЛОННОЙ СТРОКИ
const num = 25;
console.log(`25 in 16x = ${num.toString(16)}
25 in 2x = ${num.toString(2)}`);

// Используя prompt введите число как константу, затем выведите в консоль результаты операций + - * / на 2 над этим числом
const enteredNum = Number(prompt('Enter some number:'));
console.log(`Your number is : ${enteredNum}.
${enteredNum} + 2 = ${enteredNum + 2}
${enteredNum} - 2 = ${enteredNum - 2}
${enteredNum} * 2 = ${enteredNum * 2}
${enteredNum} / 2 = ${enteredNum / 2}`);

// определите длинну строки введенной при помощи prompt и выведите длинну в консоль
const someTxt = prompt('Enter some text:');
console.log(`Your string is : ${someTxt}.\nLength of your string is: ${someTxt.length}`)

// Округлите число 0.51000002 до двух знаков после запятой и прибавте к нему 2, результат выведете в консоль
const floatNum = 0.51000002;
console.log(Number(floatNum.toFixed(2)) + 2)

// определите с какого символа строка str_two начинается в строке str
// преобразуте любую из этих строк к заглавным буквам, результат выведете в консоль
const str = 'the quick brown fox jumps over the lazy dogs back';
const str_two = 'brown fox jumps'
console.log(`str_two starts from: ${str.indexOf(str_two)}
${str_two.toUpperCase()}`)

// сравните a c b, b c c, c c d и результаты между собой таким ображом чтобы получить true используя ИЛИ не используя НЕ
let a = 1;
let b = 2;
let c = 3;
let d = 3;
console.log((a === b) || (b === c) || (c === d) );//если одно из условий TRUE при операторе ||, результат TRUE

// сравните a c b, b c c, c c d и результаты между собой таким ображом чтобы получить true используя И не используя НЕ
console.log((a < b) && (b < c) && (c === d));//если одно из условий FALSE при операторе &&, результат FALSE

// сделайте простой пример можно в одну строку, демонстрирующий различая между == и ===
let numVar = 100;
let strVar = '100';
console.log(`100 == '100' = ${(numVar == strVar)} - '==' преобразует строку в число`);
console.log(`100 === '100' = ${(numVar === strVar)} - '===' строгое равенство без преобразований`);

// продемонстрируйте работу оператора ??
let someVar;
console.log(someVar ?? 'Alternative value if variable is UNDEFINED');

someVar = 'DEFINED value';
console.log(someVar ?? 'Alternative value if variable is UNDEFINED');