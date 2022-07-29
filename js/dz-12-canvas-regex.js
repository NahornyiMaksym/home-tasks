// 1) Написать HTML форму с 3я полями и кнопкой submit по нажатию на которую 1е поле броверяется на то что там только бувы, второе должно быть номер телефона +380ххххххххх, третье почтой.

const lettersInput = document.querySelector('#letters');
const numberInput = document.querySelector('#digits');
const mail = document.querySelector('#mail');

const button1 = document.querySelector('#btn1')
button1.addEventListener('click', check);


function check() {
    const lettersValue = lettersInput.value;
    const numberValue = numberInput.value;
    const mailValue = mail.value;

    if (lettersValue.match(/\d/)) {
        console.log('There are digit(s) in Input 1');
    }
    if (!(/^\+380[0-9]{9}$/.test(numberValue))) {
        console.log('Not match to Ukrainian number');
    }
    if (!(/^[a-zA-Z0-9._-]+@[a-z]+\.[a-z]+/g).test(mailValue)) {
        console.log('Not match to email');
    }
}

// ==============================================================

// const canvas= document.getElementById("canvas");
// const ctx = canvas.getContext('2d');
// ctx.fillStyle = 'green';
// ctx.fillRect(0, 0, 150, 150);

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

const colorContainer = document.querySelector('#container');
colorContainer.addEventListener('click', (event) => { // добавили слушаель на родителя и отслеживаем событие на потомках
    if (event.target.id === 'clear') { // добавил квадрат, чтобы очистить рисунок
        ctx.clearRect(0, 0, 480, 320);
    }
    let color = event.target.innerHTML;
    ctx.strokeStyle = color;
})

// let x, y, even = 0;
let x = 0;
let y = 0;
let even = 0;

canvas.addEventListener('click', (event) => {
    // console.log('Global window event ====> ', event);

    if (even) {
        ctx.beginPath();       // Начинает новый путь
        ctx.moveTo(x, y);    // Передвигает перо в точку (30, 50)
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();

        x = event.offsetX;
        y = event.offsetY;

        // even = 0;
    } else {
        x = event.offsetX;
        y = event.offsetY;
        even = 1;
    }
});

// 4) напишите регулярку, которая проверяет что текст соответствует адресу страницы, текст задайте как переменную адрес может быть www.-----.---, http://..... или https:// .......

let someLink = 'https://stackoverflow.com/questions/1410311/regular-expression-for-url-validation-in-javascript';

const regExp = /^(www\.|http:\/\/|https:\/\/)[a-z0-9]+\.[a-z]{2,3}(\/|\.)[a-zA-Z0-9\S]+/g;

function linkCheck (str) {
    if (regExp.test(str)) {
        console.log('Link is valid');
    } else {
        console.log('Invalid Link');
    }
}

linkCheck(someLink);