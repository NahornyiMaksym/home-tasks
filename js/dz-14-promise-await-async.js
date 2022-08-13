// 1) Напишите код с ипользованим Промиса, который будет вывожить в консоль текст приветствия я через 3и секунды.

const grating = new Promise((resolve) => {
    setTimeout(() => resolve('Hello after 3 sec'), 3000)
})

grating.then((res) => {
    console.log(res);
});


// 2) Напишите промис внутри которого будет получатся случайное число от 0 - 10, если число четное то выполнять resolve, если нет то reject. резальтат выводить через then & catch

const evenNumber = new Promise((resolve, reject) => {
    let randomNumber = Math.floor(Math.random()*11);
    randomNumber % 2 ? reject(randomNumber) : resolve (randomNumber);
})

evenNumber.then((res) => {
    console.log('Here is even number ' + res);
}).catch((err) => {
    console.log(err + ' is not even');
})


// 3) используя async/await реализуйте функцию deleay:
//
// .
//
// console.log('first call');
//
// deleay(4000); // здесь код должен ждать 4 секунды и не идти дальше
//
// console.log('second call');


function wait (time) {
    return new Promise((resolve) => {
        setTimeout(() => resolve('before second call'), time);
    })
}

async function delay (time) {

    console.log('first call');

    // await wait(time).then((res) => console.log(res)); // можно так
    const promiseResult = await wait(time); // можно так, в переменную запишется тот результат, который попадает в метод then
    console.log(promiseResult); // так мы выводим этот результат

    console.log('second call');
}

delay(4000);



