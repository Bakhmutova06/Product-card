const emailForm = document.querySelector('#email-form')    //форма подписки на email, document — это весь HTML-документ, то есть наша страница
emailForm.addEventListener('submit', (event) => {          //querySelector() — метод, который ищет элемент на странице
  event.preventDefault();                                  //'#email-form' — мы ищем элемент с идентификатором email-form
  const form = event.target;                               //const emailForm — сохраняем найденный элемент в переменную
  const formData = new FormData(form);                     //addEventListener() — метод, который позволяет следить за событиями
                                                           //'submit' — событие отправки формы
  const data = Object.fromEntries(formData.entries());     //event — объект, содержащий информацию о произошедшем событии
  console.log(data)                                        //=> — стрелочная функция, которая выполнится при отправке формы
});                                                       //«Когда пользователь отправит эту форму, выполни следующий код».
                                                       

/*Модальное окно*/
const modal = document.querySelector('.modal');
const registrationButton = document.querySelector('.registration-button');
const modalClose = document.querySelector('.modal__close');


function openModal() {
    modal.classList.add('modal-showed'); //выход модального окна
}

function closeModal() {
    modal.classList.remove('modal-showed');//закрытие модального окна
}
registrationButton.addEventListener('click', openModal); //нажатие на кнопку регистрации
modalClose.addEventListener('click', closeModal);         //нажатие на кнопку крестик-закрытие

let user = null;

const registrationForm = document.querySelector('#registration-form');

registrationForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const form = event.target;

  const password = form.password.value;
  const repeatPassword = form.repeatPassword.value;

  if (!form.checkValidity() || password !== repeatPassword) {
    alert('Регистрация отклонена. Проверьте правильность заполнения полей.');
    return;
  }

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
    delete data.password; //удаляет свойство с паролем
    delete data.repeatPassword;//удаляет свойство с повторным паролем
  data.createdOn = new Date();
    user = data;

  console.log(user);

  closeModal();
});