export const productsCatalog = [
  {
    imageUrl:"images/photo.jpg",
    imageAlt:"Товар увлажняющий мусс",
    tag:"для нормальной кожи",
    title:"Увлажняющий мусс",
    effect:"Глубоко увлажняет кожу лица, оставляя её мягкой и гладкой.",
    compound: [
      "активные натуральные комплексы",
      "витамины С, А, РР, В И Е",
      "солнцезащитные компоненты"
        ],
    price: 2750
},
  {
    imageUrl:"images/photo1.jpg",
    imageAlt:"Товар увлажняющая маска",
    tag:"для нормальной кожи",
    title:"Увлажняющая маска",
    effect:"Способствует удерживанию влаги в верхних слоях кожи",
    compound: [
      "воски",
      "минералы",
      "масла"
      ],
    price: 3500
},
  {
    imageUrl:"images/photo2.jpg",
    imageAlt:"Товар гель для умывания",
    tag:"для нормальной кожи",
    title:"Гель для умывания",
    effect:"Интенсивно очищает, не повреждает защитный барьер кожи",
    compound: [
      "минералы",
      "витамины С, А, РР, В И Е",
      "солнцезащитные компоненты",
      ],
    price: 1650
},
  {
    imageUrl:"images/photo3.jpg",
    imageAlt:"Товар Подарочный набор №1",
    tag:"для нормальной кожи",
    title:"Подарочный набор №1 ",
    effect:"Набор, состоящий из увлажняющего крема и маски",
    compound: [
      "воски",
      "минералы",
      "масла",
      ],
    price: 4750
},
  {
    imageUrl:"images/photo4.jpg", 
    imageAlt:"Товар Подарочный набор №5",
    tag:"для нормальной кожи",
    title:"Подарочный набор №5",
    effect:"Весь набор средств Invisible symphony, крем, маска, мусс и гель для умывания",
    compound: [
      "воски",
      "минералы",
      "масла",
      ],
    price: 7520
}
  ]

const productTemplate = document.getElementById('product-template');
const productList = document.getElementById('product-list');

productsCatalog.forEach((product) => {
  const productClone = productTemplate.content.cloneNode(true);
  productClone.querySelector('.products-id').textContent = product.id;
  productClone.querySelector('.products-imageUrl').src = product.imageUrl;
  productClone.querySelector('.products-imageUrl').alt = product.imageAlt;
  productClone.querySelector('.products-tag').textContent = product.tag;
  productClone.querySelector('.products-title').textContent = product.title;
  productClone.querySelector('.products-effect').textContent = product.effect;
  productClone.querySelector('.products-compound').textContent = product.compound.join(', ');
  productClone.querySelector('.products-price').textContent = product.price;
  productList.appendChild(productClone)
})

export const productsInfo = productsCatalog.reduce((accumulator, product) => {
  accumulator[product.title] = product.effect;
    return accumulator;
  },
    {}
);

console.log(productsInfo);