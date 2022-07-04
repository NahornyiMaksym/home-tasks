// 1) Создайте объект triangle со следующими свойствами: aSide, bSide, cSide.
//
// Создайте метод setValues(), который вызывает функцию prompt и заполняет свойства aSide, bSide, cSide значениями.
//
// Создайте в объекте triangle метод для расчета периметра треугольника.
// Создайте в объекте triangle метод, который проверяет является ли треугольник
// равносторонним:
//
// Выведите информацию о созданном треугольнике (включая результат выполнения
//
// всех методов) в консоль.

let triangle = {
    aSide: 0,
    bSide: 0,
    cSide: 0,
    setValues: function() {
        this.aSide = Number(prompt('Enter "A" side :'));
        this.bSide = Number(prompt('Enter "B" side :'));
        this.cSide = Number(prompt('Enter "C" side :'));
    },
    getPerimeter: function() {
        const perimeter = this.aSide + this.bSide + this.cSide;
        return perimeter;
    },
    isEqualSides: function() {
        return ( this.aSide === this.bSide === this.cSide) ? 'Треугольник равносторонний' : 'Треугольник не равносторонний';
    },
}
// triangle.setValues();

// console.log(`A = ${triangle.aSide}, B = ${triangle.bSide}, C = ${triangle.cSide}`);
// console.log(`Perimeter = ${triangle.getPerimeter()}`);
// console.log(triangle.isEqualSides());
console.log('=============================');

// 2) Создайте объект calculator с методами:
//
// read() запрашивает prompt() для двух значений и сохраняет их как свойства объекта x, y
// sum() возвращает сумму этих двух значений
// multi() возвращает произведение этих двух значений
// diff() возвращает разницу
// div() возвращает частное

const calculator = {
    x : 0,
    y : 0,
    read : function () {
       const x = Number(prompt('Enter x'));
       const y = Number(prompt('Enter y'));
       return isNaN(x) || isNaN(y) ? (alert ('please enter numbers only'), this.read()) : (this.x = x, this.y = y);
    },
    sum : function () {
        return this.x + this.y;
    } ,
    multi : function() {
        return this.x * this.y;
    },
    diff : function () {
        return this.x - this.y;
    },
    div : function () {
        return this.x / this.y;
    }
}

// calculator.read();
// console.log(`x = ${calculator.x}, y = ${calculator.y}`);
// console.log(`x + y = ${calculator.sum()}`);
// console.log(`x * y = ${calculator.multi()}`);
// console.log(`x - y = ${calculator.diff()}`);
// console.log(`x / y = ${calculator.div()}`);

console.log('========================================');

// 3)* Дан объект country и функция format():

var country = {
    name: 'Ukraine',
    language: 'ukrainian',
    capital: {
        name: 'Kyiv',
        population: 2907817,
        area: 847.66
    }
};

function format(start, end) {
    console.log(start + this.name + end);
}

// Допишите код так, чтобы в консоли появились строки указанные в комментариях.
//
format.call(country, '', ''); // Ukraine
format.apply(country, ['[',']']); // [Ukraine]
format.call(country.capital, '', ''); // Kyiv
format.apply(country.capital, ['','']); // Kyiv
format.apply(country.language, ['', '']); // undefined

console.log('========================================');

// 4) Что выведет данный код на экран и почему?



var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';
}
logIt(); // Выводит undefined, потому что происходит вначале НАЗНАЧЕНИЕ переменной text внутри функции, потом выводится переменная в консоль, а потом происходит ОБЪЯВЛЕНИЕ переменной, то есть движок JS видит это так var text - это перебивает значение переменной назначенной вне функции выше, console.log(text), text = 'inside'.