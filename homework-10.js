import { productsCatalog } from './products.js';

function getCardsCount() {
    const answer = prompt('Сколько карточек отобразить? От 1 до 5');

    if (answer === null) {
        return 0;
    }

    const count = Number(answer);

    if (!Number.isInteger(count) || count < 1 || count > 5) {
        alert('Введите целое число от 1 до 5');
        return getCardsCount();
    }

    return count;
}

const cardsCount = getCardsCount();

const selectedProducts = productsCatalog.slice(0, cardsCount);

const productTemplate = document.getElementById('product-template');
const productList = document.getElementById('product-list');

/*selectedProducts.forEach((product) => {
const productClone = productTemplate.content.cloneNode(true);
});*/

productsCatalog.forEach((product) => {
  const productClone = productTemplate.content.cloneNode(true);
  productClone.querySelector('.products-imageUrl').src = product.imageUrl;
  productClone.querySelector('.products-imageUrl').alt = product.imageAlt;
  productClone.querySelector('.products-tag').textContent = product.tag;
  productClone.querySelector('.products-title').textContent = product.title;
  productClone.querySelector('.products-effect').textContent = product.effect;
  productClone.querySelector('.products-compound').textContent = product.compound.join(',');
  productClone.querySelector('.products-price').textContent = product.price;
  productList.appendChild(productClone)
})