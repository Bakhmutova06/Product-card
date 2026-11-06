/*Домашнее задание по JavaScript
Темы: объекты, массивы, forEach, функции, querySelector, getElementById,
getElementsByClassName.
Правило: сначала попробуйте понять и решить задачу самостоятельно, затем
запускайте код и проверяйте себя.
Часть 1. Объекты
1. Создайте объект user со свойствами name, age, city и заполните их любыми
значениями.

const user = {
  name = Any;
  age = 20;
  city = ;
};

2. Создайте объект product со свойствами name, price, isAvailable.

const product = {name, price, isAvailable};

3. Из объекта ниже выведите в консоль имя пользователя.
const user = {
 name: 'Amina',
 age: 20,
 city: 'Astana'
};

console.log(user.name);

4. Из этого же объекта выведите возраст.

console.log(user.age);

5. Измените возраст пользователя с 20 на 21.

user.age = 21;

6. Добавьте в объект новое свойство isStudent со значением true.

user.isStudent = true;

7. Добавьте свойство country со значением 'Kazakhstan'.

user.country = 'Kazakhstan';

8. Из объекта ниже выведите строку: Phone стоит 300000. Используйте значения из
объекта.
const product = {
 name: 'Phone',
 price: 300000,
 color: 'black'
};

console.log(`${product.name} стоит ${product.price}.`);

9. Измените цену товара на 250000.

product.price = 250000;

10. Удалите свойство color.

delete product.color;

Часть 2. Объекты + условия
11. Если score >= 60, вывести 'Зачёт', иначе 'Не зачёт'.
const student = {
 name: 'Dana',
 score: 80
};

Зачет, т.к. 80 > 60

12. Если пользователю 18 или больше, вывести 'Доступ разрешён', иначе 'Доступ
запрещён'.
const user = {
 name: 'Aruzhan',
 age: 17
};

'Доступ запрещен', потому что не достиг 18 лет еще

13. Создайте объект book со свойствами title, author, pages и выведите каждое свойство
отдельно.

const book = {title, author, pages};

console.log(book.title);
console.log(book.author);
console.log(book.pages);

14. Добавьте color: 'white' и измените year на 2022.

const car = {
 brand: 'Toyota',
 year: 2020
};

car.color = 'white';
car.year = 2022;

Часть 3. Массивы
15. Создайте массив из трёх любимых продуктов.

const product = ['monitor', 'system unit', 'headset']

16. Создайте массив чисел [10, 20, 30, 40].

const number = [10, 20, 30, 40];

17. Выведите первый элемент массива.
const fruits = ['apple', 'banana', 'orange'];

console.log(numbers[0]);

18. Выведите второй элемент этого массива.

console.log(numbers[1]);

19. Выведите последний элемент этого массива.

fruits.reverse();
console.log(numbers[0]);

20. Что выведется?
const colors = ['red', 'green', 'blue'];
console.log(colors[1]);

Выведет green, потому что итерация под номером 1

21. Что выведется?
const numbers = [5, 10, 15];
console.log(numbers.length);

Оно показывает сколько элементов у нас есть в массиве-3

22. Замените dog на fox.
const animals = ['cat', 'dog', 'rabbit'];

animals.dog = fox;

23. Добавьте в конец массива horse.

animals.push(horse);

24. Удалите последний элемент массива.

animals.pop(horse);

25. Добавьте в начало массива lion.

animals.unshift(lion);

26. Удалите первый элемент массива.

animals.pop(lion);

Часть 4. Массив объектов
27. Создайте массив users из 3 объектов. У каждого объекта должны быть name и age.

const users = [
  { name: 'Vally', age: '112'},
  {name: 'Polly', age: '49'},
  {name: 'Fate', age: '56'}
]

28. Выведите имя первого пользователя.
const users = [
 { name: 'Amina', age: 20 },
 { name: 'Dana', age: 25 }
];

console.log(users[0]);

29. Выведите возраст второго пользователя.

console.log(users[1]);

30. Выведите название третьего товара.
const products = [
 { name: 'Phone', price: 300000 },
 { name: 'Laptop', price: 500000 },
 { name: 'Tablet', price: 200000 }
];



31. Выведите цену второго товара.
32. Измените цену первого товара на 250000.
Часть 5. forEach
33. С помощью forEach выведите каждый элемент массива.
const fruits = ['apple', 'banana', 'orange'];
34. С помощью forEach выведите каждое число.
const numbers = [1, 2, 3, 4, 5];
35. С помощью forEach выведите: Привет, Amina / Привет, Dana / Привет, Aruzhan.
const names = ['Amina', 'Dana', 'Aruzhan'];
36. Для каждого числа выведите число, умноженное на 2.
const numbers = [2, 4, 6];
37. Используйте второй параметр forEach — index — и выведите: 0 red, 1 green, 2 blue.
const colors = ['red', 'green', 'blue'];
38. С помощью forEach выведите только элементы, индекс которых меньше 2.
const numbers = [10, 20, 30, 40];
39. С помощью forEach выведите название каждого товара.
const products = [
 { name: 'Phone', price: 300000 },
 { name: 'Laptop', price: 500000 },
 { name: 'Tablet', price: 200000 }
];
40. В этом же массиве выведите строки вида Phone — 300000.
Часть 6. forEach + условия
41. С помощью forEach выведите только числа больше 10.
const numbers = [1, 5, 10, 15, 20];
42. Для каждого возраста выведите 'Совершеннолетний' или 'Несовершеннолетний'.
const ages = [15, 18, 20, 16, 30];
43. Выведите только товары, цена которых больше 100000.
const products = [
 { name: 'Phone', price: 300000 },
 { name: 'Laptop', price: 500000 },
 { name: 'Mouse', price: 15000 }
];
44. Для элементов с индексом 0 и 1 выведите 'Первая группа', для остальных — 'Вторая
группа'.
const cards = ['card1', 'card2', 'card3', 'card4'];
Часть 7. Функции
45. Создайте функцию sayHello, которая выводит 'Hello', и вызовите её.
46. Создайте функцию showName, которая принимает имя и выводит его.
47. Создайте функцию sum, которая принимает два числа и выводит их сумму.
48. Создайте функцию multiply, которая принимает два числа и возвращает произведение
через return.
49. Создайте функцию checkAge, которая принимает возраст и выводит 'Можно войти'
или 'Нельзя войти'.
50. Вызовите функцию три раза с разными именами.
function greet(name) {
 console.log(`Привет, ${name}`);
}
Часть 8. Функция + массив
51. Создайте отдельную функцию showNumber, которая выводит число, и передайте её в
forEach.
const numbers = [1, 2, 3];
52. Сделайте так, чтобы выводилось: Число: 1, Число: 2, Число: 3.
53. Создайте отдельную функцию greet, принимающую имя и выводящую приветствие,
затем передайте её в forEach.
const names = ['Amina', 'Dana', 'Aruzhan'];
54. Объясните разницу между numbers.forEach(showNumber) и
numbers.forEach(showNumber()).
Часть 9. Поиск элементов в HTML
<h1 id="title">Выбери свой продукт</h1>
<p class="text">Первый текст</p>
<p class="text">Второй текст</p>
<button id="button">Нажать</button>
<div class="card">Карточка 1</div>
<div class="card">Карточка 2</div>
<div class="card">Карточка 3</div>
55. Найдите заголовок через getElementById.
56. Найдите кнопку через getElementById.
57. Найдите первый элемент с классом text через querySelector.
58. Найдите первую карточку через querySelector.
59. Найдите все карточки через querySelectorAll.
60. Найдите все элементы с классом text через getElementsByClassName.
61. Найдите заголовок через querySelector.
62. Найдите кнопку через querySelector.
Часть 10. Сравнение способов поиска
63. Напишите два варианта поиска одного и того же элемента: через getElementById и
querySelector.
<h1 id="main-title">Hello</h1>
64. Объясните своими словами разницу между document.getElementById('title') и
document.querySelector('#title').
65. Что вернёт document.querySelector('.card'), если карточек на странице пять?
66. Что использовать, если нужно получить все карточки?
67. Чем отличаются querySelector и querySelectorAll?
68. Что вернёт document.getElementsByClassName('item')?
<div class="item">1</div>
<div class="item">2</div>
<div class="item">3</div>
Часть 11. DOM + forEach
69. Найдите все карточки через querySelectorAll и с помощью forEach выведите каждую
карточку в консоль.
<div class="card">1</div>
<div class="card">2</div>
<div class="card">3</div>
70. Для каждой карточки выведите её текст.
71. Добавьте каждой карточке класс active.
72. Есть 5 карточек: карточкам с индексом 0 и 1 добавить класс first, остальным —
second.
73. Есть 12 карточек: карточкам с индексом от 0 до 5 добавить один класс, остальным —
другой.
Часть 12. Код-ревью
74. Найдите ошибку.
const user = {
 name: 'Amina'
 age: 20
};
75. Что неправильно? Что получится и почему?
const fruits = ['apple', 'banana', 'orange'];
console.log(fruits[3]);
76. Что получится?
const user = {
 name: 'Amina',
 age: 20
};
console.log(user.city);
77. Если задача была вывести каждый отдельный элемент — что здесь не так?
const numbers = [1, 2, 3];
numbers.forEach((number) => {
 console.log(numbers);
});
78. Найдите ошибку.
const cards = document.querySelector('.card');
cards.forEach((card) => {
 console.log(card);
});
79. Что нужно изменить, если карточек несколько?
80. Найдите ошибку.
const title = document.getElementById('#title');
81. Найдите ошибку, если card — это класс.
const card = document.querySelector('card');
82. Есть ли здесь ошибка? Если нет — объясните, что делает код.
const cards = document.querySelectorAll('.card');
cards.forEach((card, index) => {
 if (index <= 2) {
 card.classList.add('first');
 } else {
 card.classList.add('second');
 }
});
Итоговое задание
83. Есть HTML ниже. Найдите все .product, переберите через forEach, выведите текст
каждого элемента, первым двум добавьте класс product--first, остальным — product--
second. Затем объясните код построчно.
<div class="product">Phone</div>
<div class="product">Laptop</div>
<div class="product">Tablet</div>
<div class="product">Mouse</div>
Дополнительное задание
84. Для массива ниже с помощью forEach выведите название и цену каждого товара. Если
цена больше 100000, вывести 'Дорогой товар', иначе 'Бюджетный товар'.
const products = [
 { name: 'Phone', price: 300000 },
 { name: 'Laptop', price: 500000 },
 { name: 'Mouse', price: 15000 }
];
Главная цель: не просто получить работающий код, а уметь объяснить, что происходит
на каждой строке.*/