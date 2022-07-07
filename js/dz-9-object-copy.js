const object1 = {

    a: 5,

    b: { g: 8, y: 9, h : function () {return 5*10}, t: { q: 48 } },

    x: 47,

    y: function () {
        return 5 * 10;
    }
}

const newObj = JSON.parse(JSON.stringify(object1)); // var 1
for (let key in object1) { // // Добавил туда еще функцию от себя, для практики, но пока не смог додуматься как автоматизировать копирование функции, которая не на первом уровне вложенности объекта
    if (typeof object1[key] === 'function') {
        newObj[key] = object1[key];
    }
}

console.log('============= var1 ====================')

newObj.b.g = 1000;
newObj.b.t.q = 3000;
console.log('copied', newObj);

console.log('original', object1);


// Вариант 2
console.log('============= var2 ====================')
const newObj2 = {};
function objFind (copiedObject) {
    for (let key in this) {
        typeof this[key] === 'object' ? copiedObject[key] = {...this[key]} : copiedObject[key] = this[key];
    }

}
objFind.bind(object1)(newObj2);
objFind.bind(object1.b)(newObj2.b);

console.log('copied var2', newObj2);
newObj2.b.g = 1000;
newObj2.b.t.q = 3000;
console.log('original var2', object1);

// function objFind (copiedObject) {
//     for (let key in this) {
//         // typeof this[key] === 'object' ? copiedObject[key] = {...this[key]} : copiedObject[key] = this[key];
//         if (typeof this[key] === 'object') {
//             copiedObject[key] =
//             for (let innerKey in this[key]) {
//                 if (typeof this[key][innerKey] === 'object') {
//                     copiedObject[key][innerKey] = {...this[key][innerKey]};
//                 }
//                 // else {copiedObject[key][innerKey] = this[key][innerKey]}
//
//             }
//         } else { copiedObject[key] = this[key] }
//     }
//     return copiedObject;
// }
// objFind.bind(object1)(newObj);