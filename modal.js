import { Component } from './component.js';// Импортируем родительский класс Component из файла component.js.

export class Modal extends Component {    // Создаём класс Modal, класс Modal наследуется от Component
  constructor(id) {// Конструктор принимает один параметр — ID модального окна.
    super(id);//Вызываем конструктор родительского класса Component. Он находит HTML-элемент по переданному ID и сохраняет его в this.element.

    this.closeButton = this.element.querySelector('.modal__close');//Находим кнопку закрытия (крестик) внутри модального окна. Сохраняем её в свойство closeButton.

    this.closeButton.addEventListener('click', () => {//отслеживает нажатие на крестик и вызывает close()
      this.close();
    });
  }

  open() {//метод открытия модального окна
    this.element.classList.add('modal-showed');  //Добавляем класс modal-showed к модальному окну.Благодаря CSS окно становится видимым.
  }

  close() { //Метод закрытия модального окна.
    this.element.classList.remove('modal-showed');//Удаляем класс modal-showed.Окно скрывается согласно CSS.
  }

  isOpen() {//возвращает true, если окно открыто, иначе false. Метод проверки состояния модального окна.
    return this.element.classList.contains('modal-showed');  // Проверяем, есть ли у элемента класс modal-showed. Возвращаем true, если окно открыто, иначе false.
  }

 closeOnClick() {//Метод отслеживания нажатия на крестик.

    this.closeButton.addEventListener('click', () => {//Добавляем обработчик события click на кнопку.

      this.close();//При нажатии вызываем метод закрытия окна.
    });
  }
}