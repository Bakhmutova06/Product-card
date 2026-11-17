import { Drinks } from './drinks.js';

export class Lemonade extends Drinks {//наследуем свойства и методы от drinks
  constructor(name, size, ingredients, temperature, flavor) {
      super(name, size, ingredients, temperature);
      this.flavor = flavor;
  }
}