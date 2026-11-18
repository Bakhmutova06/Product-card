//Домашнее задание №13
console.log('main.js запущен!');
import { Cafe } from './Cafe.js';
import { Coffee } from './Coffee.js';
import { HotChocolate } from './HotChocolate.js';
import { Lemonade } from './Lemonade.js';
import { Tea } from './Tea.js';

const cafe = new Cafe('BARAKAT', 'Астрахань');


const coffee = new Coffee(
  'Капучино',
  'Средний',
  ['кофе', 'молоко'],
  65,
  'Арабика'
);

const tea = new Tea(
  'Зелёный чай',
  'Большой',
  ['зелёный чай', 'вода'],
  80,
  'Зелёный'
);

const lemonade = new Lemonade(
  'Лимонад',
  'Средний',
  ['лимон', 'вода', 'сахар'],
  8,
  'Лимонный'
);

const hotChocolate = new HotChocolate(
  'Горячий шоколад',
  'Большой',
  ['молоко', 'шоколад'],
  70,
  'Тёмный'
);


cafe.showInfo();

cafe.orderDrink(coffee);
cafe.orderDrink(tea);
cafe.orderDrink(lemonade);
cafe.orderDrink(hotChocolate);

coffee.showInfo();
tea.showInfo();
lemonade.showInfo();
hotChocolate.showInfo();