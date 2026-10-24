//1. Создать файл "homework-9.js", подключить его в HTML.
//Добавляем новый атрибут - type=module, что бы была возможность импорта (далее посмотрим зачем)



//2. Создать массив чисел от 1 до 10. Отфильтровать его таким образом, чтобы мы получили массив чисел, начиная с 5.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArray = numbers.slice(4, 10)
console.log(newArray)


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
