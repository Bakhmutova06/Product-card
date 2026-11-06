//1. Создать файл "homework-9.js", подключить его в HTML.
//Добавляем новый атрибут - type=module, что бы была возможность импорта (далее посмотрим зачем)



//2. Создать массив чисел от 1 до 10. Отфильтровать его таким образом, чтобы мы получили массив чисел, начиная с 5.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArray = numbers.slice(4, 10)
console.log(newArray)

const fromFive = numbers.filter(num => num >= 5);
console.log(fromFive);


//3. Создайте массив строк, относящихся к  мебели, проверьте, есть ли в массиве какая-то определенная сущность.

const furniture = ['диван', 'кресло', 'стол', 'стул', 'шкаф', 'комод'];

const arrayObject = 'стол';

const hasItem = furniture.includes(arrayObject);

if (hasItem) {
  console.log(`Да, сущность "${arrayObject}" есть в массиве!`);
} else {
  console.log(`Нет, сущность "${arrayObject}" не найдена.`);
}

//4. Напишите функцию, которая аргументом будет принимать массив и изменять его порядок на противоположной ("переворачивать")
//Два полученных массива с помощью этой функции перевернуть.

function reverseArray(array) {
    return array.reverse();
}

const livingRoomFurniture = ["Диван", "Кресло", "Пуфик", "Стол"];


const bedroomFurniture = ["Шкаф", "Кровать", "Комод", "Тумбочка"];

// Переворачиваем первый массив
reverseArray(livingRoomFurniture);
console.log("Гостинная:", livingRoomFurniture); 

// Переворачиваем второй массив
reverseArray(bedroomFurniture);
console.log("Спальня:", bedroomFurniture); 

//Уровень2:
//5. Добавьте файл comment.js, в нем создайте константу и в него поместите первые 10 объектов этого массива . 
// Данный массив представляет собой пример комментариев в соц. сети, поэтому переменная должна быть названа по смыслу. 
// Не забудьте удалить квадратные кавычки у ключей объектов (можно использовать Chat GPT, что бы не делать это вручную)


//6. Сделайте константу экспортируемой, добавив перед «const» ключевое слово «экспорт». 
//Таким образом мы сможем внедрить переменную из comment.js в homework-9.js и работать с ней. 
//Когда мы введем название переменной, мы предлагаем импортировать ее — так и делаем.

import { comm } from "./comment.js";

//7. Вывести в массив массива тех комментариев, почта пользователей которых содержит ".com"

const filtredComments = comm.filter((comment) => 
  comment.email.includes('.com'));

console.log('Покажи доменное имя с .com:', filtredComments);


//8. Перебрать массив таким образом, чтобы пользователи с id меньше или равно 5 имели postId: 2, а те, у кого id больше 5, имели postId: 1

const updateComments = comm.map(comment => {
  if (comment.id <= 5) {
    return { ...comment, postId: 2 };
  } else {
    return { ...comment, postId: 1 };
  }
});

console.log(updateComments);