import { Drinks } from './drinks.js';
export class HotChocolate extends Drinks {
  constructor(name, size, ingredients, temperature, chocolateType) {
      super(name, size, ingredients, temperature);
      this.chocolateType = chocolateType;
  }
}
