//1. Создан файл "homework-8.js" и подключен в HTML.

//2. Создать объект на основе ваших данных. Подберите правильное название переменной.
const userProfile = {
  firstName: "Зульфия",
  lastName: "Бахмутова",
  email: "benome1991@gmail.com",
  age: 35,
  country: "Россия",
  city: "Астрахань",
  religion: "Ислам",
  maritalStatus: "в браке",
  hobbies: ["программирование", "3Д визуализация"]
};

//3.Создаем объект, хранящий в себе данные об автомобиле
const vehicleDetails = {
  brand: "KIA",
  model: "RIO",
  yearOfManufacture: 2015,
  color: "Black Pearl",
  transmissionType: "manual gearbox",

  //дополнительное свойство://
  carOwner: userProfile
}

const data = prompt("Покажи данные авто (vehicleDetails)")

console.log(vehicleDetails[data]);

//4. Написать функцию

function speedTest(vehicle) {
  if("maxSpeed" in vehicle) {
    return;
  }

  vehicle.maxSpeed = 200;
}

speedTest(vehicleDetails);

console.log(vehicleDetails);



//5. Написать функцию, которая получает первым аргументом — объект, а вторым 
// аргументом — свойство объекта, которое нужно вывести и выводит его значение.

function showProperty(object, property) {
  console.log(object[property]);
}


//6. Создать массив, который содержит названия продуктов (просто строки)
const maxTools = ['Select', 'Move', 'Rotate', 'Scale', 'Extrude'];


//7. Создать массив, состоящий из объектов, где объект представляет собой книгу (название, автор, 
// год выпуска, цвет обложки, жанр) (3-5 книг). После, используя известный нам метод массив, 
// добавить еще одну книгу в конец списка. Можете заменить книги на фильмы, или другую сущность, идею вы поняли.

const maxScene = [
  { name: "TableBase", polyCount: 150},
  { name: "TeapotTest", polyCount: 1024},
  { name: "OmniLight01", polyCount: 0},
  { name: "CharacterHighPoly", polyCount: 85000},
];

maxScene.push(name: "CameraFront", polyCount: 0)
console.log(maxScene.length)



//8. Создать еще один массив, состоящих из тех же книг, но относящийся к определенной вселенной 
// С помощью известного нам метода массива или оператора (рекомендую использовать оператор), объединить эти два массива в один

const furnitureObjects = [
  { name: 'ChairOffice', polyCount: 2400},
  { name: 'TableWood', polyCount: 150},
  { name: 'SofaLeather', polyCount: 18500}
];

const environmentObjects = [
  { name: 'WindowGlass', polyCount: 80},
  { name: 'SunLightMain', polyCount: 0}
];

const full3dScene = furnitureObjects.concat(environmentObjects);

console.log(full3dScene);