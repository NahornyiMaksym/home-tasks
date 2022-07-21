// 1) Напишите функцию, которая изменяет фоновый цвет текста последнего параграфа в блоке
//
// <body>, а так же функцию, которая меняет блоки footer и main местами.


function lastPColour () {
    let allP = document.querySelectorAll('p'); // get array of all 'p'
    let lastP = allP[allP.length - 1]; // get the last 'p'
    lastP === undefined ? console.log('No such elements') : lastP.className = 'colour'; // if there is 'p' give class to it
}
lastPColour();


function footerToMain () {
    let footer = document.getElementById('footer');
    let wrapper = document.getElementById('wrapper');
    wrapper.append(footer);
}
footerToMain();

// 2) Напишитк код реализующий логику светофора

let streetlight = document.getElementById('streetlight');
let lights = streetlight.getElementsByTagName('div');
console.log(lights);

let current = 0;
function changeColor () {

    if (current === 3) {
        current = 0;
    }
    switch (current) {
        case 0 : lights[current].classList.add('red')
            lights[2].classList.remove('green');
        break;
        case 1 : lights[current].classList.add('yellow')
            lights[0].classList.remove('red');

        break;
        case 2 : lights[current].classList.add('green')
            lights[1].classList.remove('yellow');
        break;
    }

    current += 1;
}
setInterval(() => changeColor(), 2000);

// 3) Дан массив array = [[1,2,3],[4,5,6],[7,8,9]];
//
// написать функцию которая посторит из него таблицу при помощи цикла и добавления элементов в DOM

const array1 = [[1,2,3],[4,5,6],[7,8,9]];


function createTable (someArray) {
    const body = document.querySelector('body');
    const table = document.createElement('table');
    body.append(table); // добавили таблицу в конец body

    for (let i in someArray) {
        let row = document.createElement('tr');
        table.append(row); // в зависимости от длины массива создаются ряды в таблице
        let innerArray = someArray[i]; // записываем вложенный массив в переменную
        innerArray.forEach(innerEl => {
            let cell = document.createElement('td'); // forEach проходясь по каждому элементу создает ячейку в ряде и добавляет туда значение вложенного массива
            row.append(cell);
            cell.textContent = innerEl;
            cell.classList.add('tableContent'); // ВОПРОС - правильно ли применять стили здесь? оно же применяет их получается 9 раз проходя по каждому элементу, а можно применить 1 раз ко всем, такая операция нагружает код?
        });
    }

}

createTable(array1);