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

