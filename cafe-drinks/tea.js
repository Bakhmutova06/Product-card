import { Drinks } from './drinks.js';
export class Tea extends Drinks{
  constructor(name, size, ingredients, temperature, variety) {
      super(name, size, ingredients, temperature);
      this.variety = variety;
  }
}