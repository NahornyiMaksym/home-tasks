// 1) Создайте объект student со свойствами firstName, lastName, averageScore и методами getFullName(), который возвращает полное имея студента в виде строки ${firstName} ${lastName}, и isGrantHolder(). Метод isGrantHolder() должен содержать следующую логику:
//
// Если averageScore больше или равняется числу 4, метод возвращает true, иначе - false.

const student = {
    firstName : 'Tom',
    lastName : 'Shelby',
    averageScore : 4.5,
    getFullName() {
        return this.firstName + ' ' + this.lastName;
    },
    isGrantHolder() {
        return (this.averageScore >= 4);
    }

}
console.log(student.getFullName());
console.log('student ==>', student.isGrantHolder());


//==========================================================
// Создайте функцию-конструктор Aspirant с прототипом student и свойствами dissertationTopic и isDissertationComplete.
function Aspirant (firstName, lastName, averageScore) {
    this.dissertationTopic = 'someTheme';
    this.isDissertationComplete = true;
    this.firstName = firstName || 'Rick';
    this.lastName = lastName || 'White';
    this.averageScore = averageScore || 4.9;
}

Aspirant.prototype = student; // добавили в прототип Aspirant свойства и методы объекта student
Aspirant.prototype.constructor = Aspirant; // если записываем прототип как выше, то стерается функция конструктор, добавляю ее вручную


// Переопределите метод isGrantHolder() для Aspirant:
// Если avarageScore больше или равняется числу 4.5 и значение isDissertationComplete равняется true, метод возвращает true , иначе - false .
Aspirant.prototype.isGrantHolder = function () {
    return (this.averageScore >= 4.5) && (this.isDissertationComplete === true); // переопределили метод у Aspirant (полиморфизм)
}


// Создайте объект aspirant используя функцию-конструктор Aspirant .
// Продемонстрируйте метод isGrantHolder() у объектов student и aspirant.
const aspirant = new Aspirant();
console.log(aspirant.getFullName());
console.log('aspirant ==>', aspirant.isGrantHolder());


const aspirant2 = new Aspirant('Ronny', 'Round', 4.3);
console.log(aspirant2.getFullName());
console.log('aspirant2 ==>', aspirant2.isGrantHolder());

// Используя цикл, выведите все свойства и методы объекта aspirant (включая свойства и методы прототипа).
console.log('======================================');
console.log(aspirant);
for (let i in aspirant) {
    console.log(i);
}



// 2) Создайте класс Plane со свойствами name и isFlying (по-умолчанию false) и методами takeOff() и land(). Метод takeOff() меняет значение свойства isFlying на true, а метод land() меняет значение свойства isFlying на false.
class Plane {
    constructor() {
        this.isFlying = false;
    }

    takeOff () {
        this.isFlying = true;
    }

    land () {
        this.isFlying = false;
    }
}


// Создайте объект airport со свойством planes (массив объектов класса Planes ) и методом getFlyingPlanes(), который вовзращающий количество элементов из массива planes , у которых isFlying равняется true.

const airport = {
    planes : [],
    getFlyingPlanes() {
        let count = 0;
        return 'isFlying True ==> ' + this.planes.reduce((previous, current) => current.isFlying ? count += 1 : previous, 0);
    }
}

// Cоздайте несколько объектов на основе класса Plane и добавьте их в массив самолетов в airport. Измените любым объектам значение isFlying на true; Продемонстрируйте метод getFlyingPlanes() в работе.
const plane1 = new Plane();
plane1.takeOff();

const plane2 = new Plane();
plane2.takeOff();

const plane3 = new Plane();
plane3.takeOff();

const plane4 = new Plane();
const plane5 = new Plane();

airport.planes.push(plane1, plane2, plane3, plane4, plane5);

console.log('======================================');
console.log(airport.planes);
console.log(airport.getFlyingPlanes());
