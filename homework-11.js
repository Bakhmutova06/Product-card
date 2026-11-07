const emailForm = document.querySelector('#email-form')
emailForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  console.log(data)
});

/*Модальное окно*/
const modal = document.querySelector('.modal');
const registrationButton = document.querySelector('.registration-button');
const modalClose = document.querySelector('.modal__close');


registrationButton.addEventListener('click', () => {
  modal.classList.add('modal-showed');
});


modalClose.addEventListener('click', () => {
  modal.classList.remove('modal-showed');
});


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

  data.createdOn = new Date();

  user = data;

  console.log(user);

  modal.classList.remove('modal-showed');
  registrationForm.reset();
});