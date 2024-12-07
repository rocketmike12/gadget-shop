// Завдання: Створення інтернет-магазину
// Опис:
// Вам потрібно створити простий інтерфейс інтернет-магазину, який дозволить:

// Відобразити список товарів на сторінці.
// Додати товари до кошика.
// Відобразити кількість обраних товарів і загальну вартість замовлення у кошику.
// Кроки виконання:
// HTML-розмітка:

// Контейнер для виведення списку товарів.
// Контейнер для відображення кошика.
// Масив товарів: У JavaScript створіть масив об’єктів, де кожен об’єкт представляє товар із наступними полями:

// id (унікальний ідентифікатор товару)
// name (назва товару)
// price (ціна товару)
// image (URL зображення товару, можна використовувати заглушки)
// Функціонал:

// Відрендерити список товарів у контейнері.
// Додати кнопку "Додати в кошик" для кожного товару.
// При натисканні кнопки товар додається до кошика (зберігати у масиві).
// Оновлювати відображення кількості товарів і загальної суми у кошику.

const products = [
    {id: 1, name: "Ноутбук", price: 25000, image: "https://via.placeholder.com/100/FF5733"},
    {id: 2, name: "Смартфон", price: 15000, image: "https://via.placeholder.com/100/33FF57"},
    {id: 3, name: "Навушники", price: 2000, image: "https://via.placeholder.com/100/3357FF"},
    {id: 4, name: "Навушники", price: 1000, image: "https://via.placeholder.com/100/DC143C"},
    {id: 5, name: "Навушники", price: 2000, image: "https://via.placeholder.com/100/7FFF00"},
    {id: 6, name: "Мишка", price: 1000, image: "https://via.placeholder.com/100/8A2BE2"}
];

const productList = document.querySelector('.products-list');
let cart = [];
const quantity = document.querySelector('#quantity');
const sum = document.querySelector('#sum');

const renderProducts = function(products) {
    productList.innerHTML = '';
    products.forEach(el => {
        let product = document.createElement('div');
        product.innerHTML = `
            <img src="${el.image}">
            <h2>${el.name}</h2>
            <p>Ціна: ${el.price}</p>
            <button id="B${el.id}">Додати</button>
        `;
        productList.appendChild(product);
    });
}

const addToCart = function(id) {
    if (!(cart.map(el => el.id).includes(id))) {
        cart.push(products[id - 1]);
        console.log(cart);
        quantity.textContent = parseInt(quantity.textContent) + 1;
        sum.textContent = parseInt(sum.textContent) + products[id - 1].price;
    }
}

renderProducts(products);

productList.addEventListener('click', (event) => {
    if (event.target.id) {
        addToCart(Number(event.target.id.slice(1)));
    }
})
