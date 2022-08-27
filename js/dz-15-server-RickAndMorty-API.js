const container = document.querySelector('.container');

const female = document.querySelector('#female');
const male = document.querySelector('#male');
const dead = document.querySelector('#dead');
const alive = document.querySelector('#alive');
const checkBoxes = document.querySelector('#checkBoxes');





// Дописал чтоб через this получать значения ключей объекта который передаем в функцию CreateCard(), и в функцию передаю контекст через bind  при ее вызове

function createCard() {

    const card = document.createElement('div');
    card.classList.add('card');

    const cardInfo = document.createElement('div');
    cardInfo.classList.add('card-info');

    const cardTitle = document.createElement('div');
    cardTitle.classList.add('title');

    const cardTitleH1 = document.createElement('h1');
    cardTitleH1.innerHTML = this.name;
    cardTitle.append(cardTitleH1);

    const cardStatus = document.createElement('div');
    cardStatus.classList.add('status');

    const cardLiveStatus = document.createElement('div');
    cardLiveStatus.classList.add('live-status');
    if (this.status === 'Dead') {
        cardLiveStatus.classList.add('dead');
    }
    if (this.status === 'unknown') {
        cardLiveStatus.classList.add('unknown');
    }


    const cardStatusP = document.createElement('p');
    const cardStatusPText = document.createTextNode(`${this.species} - ${this.status}`);
    cardStatus.append(cardLiveStatus);
    cardStatusP.append(cardStatusPText);
    cardStatus.append(cardStatusP);
    cardTitle.append(cardStatus);
    cardInfo.append(cardTitle);

    const cardContent = document.createElement('div');
    cardContent.classList.add('content');
    const cardContentText = document.createTextNode(this.location.name);
    cardContent.append(cardContentText);
    cardInfo.append(cardContent);

    card.append(cardInfo);

    const cardImage = document.createElement('div');
    cardImage.classList.add('card-image');
    const image = document.createElement('img');
    image.src = this.image;
    image.alt = 'Some image';
    cardImage.append(image);
    card.append(cardImage);

    container.append(card);
}



let allCharacters = 'https://rickandmortyapi.com/api/character';

let femaleFilter = 'https://rickandmortyapi.com/api/character/?gender=female';

let maleFilter = 'https://rickandmortyapi.com/api/character/?gender=male';

let deadFilter = 'https://rickandmortyapi.com/api/character/?status=dead';

let aliveFilter = 'https://rickandmortyapi.com/api/character/?status=alive';

let allPersonsArray =false;






function fillCards (url) {

    fetch(url)
        .then((response) => response.json())
        .then((array) => array.results)
        .then((personsArray) => personsArray.forEach((person) => {
            createCard.bind(person)()
            allPersonsArray = personsArray;
        }))

}


fillCards(allCharacters);


// При клике на чекбокс, чистится страница (function clear), фильтруются персонажи ( function filter() / filter2() )
checkBoxes.addEventListener('click', () => {
    clear();
    // filter()
    filter2();
});

function clear () {
    container.innerHTML = '';
}


// Вариант 1 функция filter - работает не совсем корректно, фильтрует персонажей с помощью ссылок взятых из API, нужно отжимать уже выбранный чекбокс, перед тем, как выбрать новый
function filter () {

    if (female.checked === true) {
        return fillCards(femaleFilter);
    }

    if (male.checked === true) {
        return fillCards(maleFilter);
    }

    if (dead.checked === true) {
        return fillCards(deadFilter);
    }

    if (alive.checked === true) {
        return fillCards(aliveFilter);
    }
}



// Вариант 2 фильтрует массив из всех персонажей, массив сохранен в переменную allPersonsArray
let female2 = [];
let male2 = [];
let dead2 = [];
let alive2 = [];

function filter2 () {

    if (female.checked === true) {
        female2 = allPersonsArray.filter(personInfo => personInfo.gender === 'Female');
        female2.forEach(person => createCard.bind(person)());
    }

    if (male.checked === true) {
        male2 = allPersonsArray.filter(personInfo => personInfo.gender === 'Male');
        male2.forEach(person => createCard.bind(person)());
    }

    if (dead.checked === true) {
        dead2 = allPersonsArray.filter(personInfo => personInfo.status === 'Dead');
        dead2.forEach(person => createCard.bind(person)());
    }

    if (alive.checked === true) {
        alive2 = allPersonsArray.filter(personInfo => personInfo.status === 'Alive');
        alive2.forEach(person => createCard.bind(person)());
    }

    if ( (male.checked === false & female.checked === false) & (dead.checked === false & alive.checked === false) ) {
        allPersonsArray.forEach(person => createCard.bind(person)())
    }

}