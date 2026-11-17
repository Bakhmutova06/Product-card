//Создаем абстрактный класс Drink — общая основа для всех напитков. От него будут наследоваться кофе, чай, лимонад и другие напитки.
//Свойство отвечает на вопрос: «Что у объекта есть?»
//Метод отвечает на вопрос: «Что объект умеет делать?»
export class Drinks { //даем разрешение использовать класс или другие данные за пределами этого файла. Называем класс с большой буквы, это соглашение называется PascalCase.
#temperature; //приватное свойство, значит доступное только внутри самого класса, в котором оно объявлено


constructor(name, size, ingredients, temperature) {//задаем параметры
    this.name = name;
    this.size = size;
    this.ingredients = ingredients;
    this.#temperature = temperature;
  }
  showInfo() {
    console.log('Название: ' + this.name);
    console.log('Размер: ' + this.size);
    console.log('Состав: ' + this.ingredients);
    console.log('Температура: ' + this.#temperature);
  }
  heat(degrees) {
    this.#temperature += degrees;
    console.log('Напиток нагрет.');
    }
  cool(degrees) {
    this.#temperature -= degrees;
    console.log('Напиток охлаждён.');
  }
  #prepare() {
  console.log('Начинаем приготовление напитка...');
  }
  serve() {
  this.#prepare();
  this.heat(5);
  console.log('Напиток подан!');
  }
}