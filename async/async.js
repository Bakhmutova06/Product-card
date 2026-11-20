//const response = fetch('./users.json');

//document.querySelector находит элемент html по css селектору
const status = document.querySelector('#status');//элемент для сообщений
const usersList = document.querySelector('#users-list');//список карточек

const deleteAllButton = document.querySelector('#delete-all');//кнопка удаления всех карточек
const getAllButton = document.querySelector('#get-all');//кнопка воостановления всех карточек


//localStorage — локальное хранилище браузера. 
// Оно позволяет сохранять данные даже после закрытия и повторного открытия страницы

const STORAGE_KEYS = {
    allUsers: 'allUsers',
    displayedUsers: 'displayedUsers'
};


//getItem() — получает данные из хранилища по ключу.
//Если данных нет, возвращаем null.
//JSON.parse() — превращает сохранённую JSON-строку обратно в JavaScript-данные.

function getUsersFromStorage(key) {
    const data = localStorage.getItem(key);

    if (data === null) {
        return null;
    }

    return JSON.parse(data);
}


function renderUsers(users) {
    usersList.innerHTML = '';

    users.forEach(user => {
        const li = document.createElement('li');

        li.innerHTML = `
            <h3>${user.firstName} ${user.lastName}</h3>
            <p>${user.email}</p>
            <p>Возраст: ${user.age}</p>
            <button class="delete-user" data-id="${user.id}">Удалить</button>
        `;

        usersList.append(li);
    });
}

//async — объявляет асинхронную функцию.
//await — ждёт завершения запроса, не блокируя всю страницу.
//fetch() — отправляет запрос за файлом.
//response.json() — преобразует полученный ответ в JavaScript-объект.
//throw new Error() — создаёт ошибку, если запрос завершился неудачно.
//catch — перехватывает ошибку.

async function loadUsers() {
    try {
        const savedUsers = getUsersFromStorage(STORAGE_KEYS.allUsers);

        if (savedUsers !== null) {
            const displayedUsers = getUsersFromStorage(STORAGE_KEYS.displayedUsers);

            console.log('Данные получены из localStorage');
            console.log(displayedUsers);
            renderUsers(displayedUsers);
            status.textContent = '';

            return;
        }

        status.textContent = 'Данные загружаются';

        await new Promise(resolve => setTimeout(resolve, 2000));

        const response = await fetch('./users.json');
        //const response = await fetch('./users-error.json');для проверки ошибки при получении данных

        if (!response.ok) {
            throw new Error('Ошибка при получении данных');
        }

        const data = await response.json();

        localStorage.setItem(STORAGE_KEYS.allUsers, JSON.stringify(data.users));
        localStorage.setItem(STORAGE_KEYS.displayedUsers, JSON.stringify(data.users));
        renderUsers(data.users);
        status.textContent = '';

        console.log('Данные получены из JSON');
        console.log(data.users);

    } catch (error) {
        status.textContent = error.message;
        console.log(error.message);
    }
}
loadUsers();

//Удаление одного пользователя(объекта)


//dataset.id — получает значение data-id из HTML-кнопки.
//Number() — превращает строку в число.
//.filter() — оставляет в массиве только элементы, прошедшие проверку.

usersList.addEventListener('click', function(event) { //addEventListener — добавляет обработчик события.
    if (event.target.classList.contains('delete-user')) { //event.target — элемент, по которому кликнули.
        const userId = Number(event.target.dataset.id);

        const displayedUsers = getUsersFromStorage(STORAGE_KEYS.displayedUsers);

        const updatedUsers = displayedUsers.filter(user => user.id !== userId);

        localStorage.setItem(STORAGE_KEYS.displayedUsers, JSON.stringify(updatedUsers));

        renderUsers(updatedUsers);
    }
});


//Удалить все карточки

deleteAllButton.addEventListener('click', function() {
    localStorage.setItem(STORAGE_KEYS.displayedUsers, JSON.stringify([]));

    renderUsers([]);

    status.textContent = 'Все карточки удалены';
});

//Вернуть все карточки

getAllButton.addEventListener('click', function() {
    const allUsers = getUsersFromStorage(STORAGE_KEYS.allUsers);

    const displayedUsers = getUsersFromStorage(STORAGE_KEYS.displayedUsers);

    if (allUsers === null) {
        status.textContent = 'Данные ещё не загружены';
        return;
    }

    if (displayedUsers.length === allUsers.length) {
        status.textContent = 'Все карточки уже отображены';
        return;
    }

    localStorage.setItem(STORAGE_KEYS.displayedUsers, JSON.stringify(allUsers));

    renderUsers(allUsers);

    status.textContent = 'Все карточки восстановлены';
});