//Окрашивание всех карточек

const catalogCards = document.querySelectorAll('.catalog__card');
const changeColorAllCardsButton = document.querySelector('#change-color-all-cards-button');
const blueSky = '#C6E6FE';

changeColorAllCardsButton.addEventListener('click', () => {
  catalogCards.forEach((card) => card.style.backgroundColor = blueSky)
  });
  //catalogСard.style.backgroundColor = '#C6E6FE';

  //Окрашивание первой карточки

const catalogFirstCard = document.querySelector('.catalog__card');
const changeColorFirstCardButton = document.querySelector('#change-color-first-card-button');
const babyPink = '#FFE8F1';

changeColorFirstCardButton.addEventListener('click', () => {
  catalogFirstCard.style.backgroundColor = babyPink;
  });

  //переход на страницу Google
  const openSiteGoogle = document.querySelector('#open-google');

  openSiteGoogle.addEventListener('click', openGoogle)
    
  
  //const googleURL = 'http://google.com';
    //window.open(googleURL)

    //либо можно сразу указать в скобках прямую ссылку на страницу
  //window.open('http://google.com')
  
  function openGoogle(){
    const answer = confirm('Перейти на страницу Google?');

    if (answer === true) {
      window.open('http://google.com')
    } else {
      return;
    }
  }

  //вывод консоль лог

  const outputLogButton = document.querySelector('#output-console-log');
  
  outputLogButton.addEventListener('click', () => outputConsoleLog('Домашнее задание №6'))

  function outputConsoleLog(message) {
  console.log(message);
}

//  Находим элемент по его классу
const mainHeader = document.querySelector('h1.title');

//  Добавляем слушатель события наведения мыши
if (mainHeader) {
  mainHeader.addEventListener('mouseenter', (event) => {
    // Выводим в консоль текст заголовка
    console.log(event.target.textContent.trim());
  });
}

//Домашнее задание №6 Добавление кнопки

// Заголовок и основные кнопки управления оформлением
const title = document.getElementById('active');
const btnAdd = document.getElementById('add');
const btnRemove = document.getElementById('remove');
const btnToggle = document.getElementById('toggle');
const btnReset = document.getElementById('reset');

//добавляем класс используя classList
btnAdd.addEventListener('click', () => {
    title.classList.add('decorated');
});

// удаляем класс-это remove
btnRemove.addEventListener('click', () => {
    title.classList.remove('decorated');
});

//красиво исчезнуть (переключаем класс 'hidden', который может отвечать за opacity или display)
btnToggle.addEventListener('click', () => {
    title.classList.toggle('hidden');
});

//возвращаем всё как было
btnReset.addEventListener('click', () => {
    title.classList.remove('decorated', 'hidden');
});
