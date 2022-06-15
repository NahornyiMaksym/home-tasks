//1) Напишите программу, которая спрашивает у пользователя его имя и выводит в консоли текстовое поздравление.
// Happy birthday to you
// Happy birthday to you
// Happy birthday, dear <name>
// Happy birthday to you
// Используйте любой цикл для реализации.

let userName = prompt('Enter your name:');
let count = 4;
while (count > 0) {
    if (userName && (count === 2)) {
        console.log(`Happy birthday, dear ${userName}`);
    } else {
        console.log('Happy birthday to you');
    }

    count --;
}


// 2) Сформируйте строку '.#.#.#.#.#.#.#' с помощью цикла for, где количество повторений символов '.#' задает пользователь через команду prompt().
let userNumb = Number(prompt('Enter your positive number'));
let symb = '';
for (userNumb; userNumb > 0; userNumb--) {
    symb += '.#'
}
console.log(symb);


// 3) Напишите программу, котрая спрашивает у пользователя число и суммирует все нечетные числа, до этого числа.
// Если пользователь не ввел число, вызвать команду prompt() c текстом "Invalid. You should enter a number" и попросить его заново ввести число.
// Результат отобразите в консоли.
let yourNumb = Number(prompt('Enter your positive number to count all odd numbers to it'));
let sum = 0;
while (true) { //использую цикл, чтобы запрос на введение числа, при его отсутствии повторялся, пока пользователь не введет
    if (yourNumb) {
        let yourNumb1 = yourNumb; // чтобы вывести в консоль введенное пользователем число
        for (yourNumb; yourNumb > 0; yourNumb--) {
            if ((yourNumb % 2) !== 0) {
                sum += yourNumb;
            }
        }
        console.log(`Sum of all numbers to ${yourNumb1} = ${sum}`);
        break;
    }
    else {
        yourNumb = Number(prompt('Invalid. You should enter a number'));
    }

}



// 4) Напишите бесконечный цикл, который прерывается при помощи команды break, когда Math.random() > 0.7. Выведите в консоль число, которое прерывает цикл и отобразите количество итераций цикла. Есл
// Loop was finished because of: <number>
// Number of iterations: <number>
let countIt = 0;
while (true) {
    let anyNumb = Math.random();
    if (anyNumb < 0.7) {
        countIt += 1;
    }
    else {
        console.log(`Loop was finished because of: ${anyNumb}\nNumber of iterations: ${countIt}, `);
        break;
    }
}


// 5) Напишите цикл от 1 до 50, в котором будет выводится поочередно числа от 1 до 50, при этом:
//
// Если число делится на 3 без остатка, то выводить не это число, а слово 'Div by 3';
//
// Если число делится на 5 без остатка, то выводить не это число, а слово 'Div by 5';
//
// Если число делится и на 3 и на 5, то выводить не это число, а слово 'Div by 5 and 3';4
let i = 1;
for (i; i <= 50; i ++) {
    if ( (i % 5) === 0 && (i % 3) === 0 ) {
        console.log('Div by 5 and 3');
    }
    else if ((i % 5) === 0) {
        console.log('Div by 5');
    }
    else if ((i % 3) === 0) {
        console.log('Div by 3');
    }
    else {
        console.log(i);
    }
}


// 6) Вывтдите текущую дату и время, учитывая часовой пояс
let nowDate = new Date();
console.log(nowDate);

