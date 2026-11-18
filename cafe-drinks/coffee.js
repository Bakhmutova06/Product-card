import { Drinks } from './drinks.js';//получаем класс и другие данные из файла drink

export class Coffee extends Drinks {//наследуем свойства и методы от drink
  constructor(name, size, ingredients, temperature, coffeeType) {
      super(name, size, ingredients, temperature);
      this.coffeeType = coffeeType;
  }
}