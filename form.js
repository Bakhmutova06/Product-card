import { Component } from './component.js';//Импортируем родительский класс Component из файла component.js.Он отвечает за поиск HTML-элемента по его ID.

export class Form extends Component {//Создаём класс Form. extends Component означает, что Form наследуется от Component и получает его свойства и методы.

  constructor(id) {//Конструктор принимает один параметр — ID формы. Например: 'email-form'.

    super(id);//Вызываем конструктор родительского класса Component.Передаём ему ID формы.Родительский класс находит форму в HTML и сохраняет её в свойство this.element.
  }

  getData() {// Создаём метод getData для получения данных формы.

    const formData = new FormData(this.element);//Создаём объект FormData на основе найденной HTML-формы.Он собирает значения полей, у которых есть атрибут name.

    return Object.fromEntries(formData.entries());//formData.entries() получает пары ключ-значение.Object.fromEntries() преобразует эти пары в обычный объект.
    //Возвращаем полученный объект с данными формы.
  }

  isValid() {//Создаём метод isValid для проверки правильности заполнения формы.

    return this.element.checkValidity();//checkValidity() проверяет HTML-ограничения формы.Возвращает true, если форма прошла проверку,и false, если обнаружены ошибки.
  }

  reset() {//Создаём метод reset для сброса формы.

    this.element.reset();//Очищаем поля формы и возвращаем их к исходным значениям.
  }
}
