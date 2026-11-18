export class Cafe {
  constructor(name, location) {
  this.name = name;
  this.location = location;
  }
  showInfo() {
  console.log('Кафе: ' + this.name);
  console.log('Местоположение: ' + this.location);
  }
  orderDrink(drinks) {//полиморфизм
  console.log('Новый заказ!');
  drinks.serve();
  }
}


