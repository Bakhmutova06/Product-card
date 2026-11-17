//Домашнее задание №12
import './comment.js';
import './form.js';
import './homework-7.js';
import './homework-8.js';
import './homework-9.js';
import './homework-10.js';
import './homework-11.js';
import './modal.js';
import './products.js';

import { Modal } from './modal.js';//Импортируем класс Modal для управления модальным окном.

import { Form } from './form.js';//Импортируем класс Form для управления формами.

const emailForm = new Form('email-form');//Создаём объект Form и передаём ID формы из HTML.

//console.log(emailForm.getData());//Выводим данные формы в консоль.
//console.log(emailForm.isValid());//Проверяем, правильно ли заполнена форма.


//const emailForm = new Form('email-form');Создаём объект класса Form.Передаём ID нашей HTML-формы.

emailForm.element.addEventListener('submit', (event) => {//Добавляем обработчик события отправки формы. emailForm.element — это сама HTML-форма.

  event.preventDefault();//Отменяем стандартную отправку формы, чтобы браузер не перезагружал страницу.

  if (!emailForm.isValid()) {//Проверяем правильность заполнения формы.Если проверка не пройдена...
    return;//...прекращаем выполнение функции.
  }

  console.log(emailForm.getData());//Получаем данные формы через метод нашего класса и выводим их в консоль.

  emailForm.reset();//После получения данных очищаем форму.
});


const modal = new Modal('registration-modal');//Создаём объект класса Modal. Передаём ID модального окна.

//Находим кнопку регистрации.
const registrationButton = document.querySelector('.registration-button');

//При нажатии открываем модальное окно через метод класса Modal.
registrationButton.addEventListener('click', () => {
  modal.open();
});

//*Создаём объект класса Form для формы регистрации.*
const registrationForm = new Form('registration-form');

//*Добавляем обработчик отправки формы регистрации.*
registrationForm.element.addEventListener('submit', (event) => {
  event.preventDefault();

  //*Получаем пароли из полей формы.*
  const password = registrationForm.element.elements.password.value;
  const repeatPassword = registrationForm.element.elements.repeatPassword.value;

  //*Проверяем заполнение формы и совпадение паролей.*
  if (!registrationForm.isValid() || password !== repeatPassword) {
    alert('Регистрация отклонена. Проверьте правильность заполнения полей.');
    return;
  }

  //*Получаем данные формы через метод класса Form.*
  const data = registrationForm.getData();

  //*Удаляем пароли из объекта с данными пользователя.*
  delete data.password;
  delete data.repeatPassword;

  //*Добавляем дату регистрации.*
  data.createdOn = new Date();

  //*Сохраняем данные пользователя.*
  let user = data;

  console.log(user);

  //*Закрываем модальное окно и очищаем форму.*
  modal.close();
  registrationForm.reset();
});







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



