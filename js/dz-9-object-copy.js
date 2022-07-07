const object1 = {

    a: 5,

    b: { g: 8, y: 9, h : function () {return 5*10}, t: { q: 48 } },

    x: 47,

    y: function () {
        return 5 * 10;
    }
}


const newObj = JSON.parse(JSON.stringify(object1)); // var 1
for (let key in object1) { // Добавил туда еще функцию от себя, для практики, но пока не смог додуматься как автоматизировать копирование функции, которая не на первом уровне вложенности объекта
    if (typeof object1[key] === 'function') {
        newObj[key] = object1[key];
    }
}



console.log(newObj);
newObj.a = 10;
newObj.b.g = 1000;
newObj.b.t.q = 3000;
console.log('====================');
console.log(object1);

