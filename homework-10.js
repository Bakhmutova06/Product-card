import { productsCatalog } from './products.js';

function openProductsCatalog(){
    const answer = confirm('Сколько карточек отобразить? От 1 до 5');

    if (answer === true) {
      window.open('http://google.com')
    } else {
      return;
    }
  }



const productsCatalog = './products.js';

const inputProtection = card.includes(productsCatalog);

if (inputProtection) {
  console.log(`Да, проверка "${productsCatalog}" пройдена.`);
} else {
  console.log(`Нет, проверка"${productsCatalog}" не пройдена.`);
}

const data = prompt("Сколько карточек отобразить? (productsCatalog)")

console.log(productsCatalog[data]);


