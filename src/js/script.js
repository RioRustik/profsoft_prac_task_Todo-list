// const todotemplete = document.querySelector('#todo-list').content

// const todo = todotemplete.querySelector('.todo')

const list = document.querySelector('.list')
const template = document.querySelector('#template')

// Клонируем содержимое тега <template>
const item = template.content.cloneNode(true)

// Находим тег <li> и помещаем текст внутрь
item.querySelector('li').textContent = 'Молоко'

// Вставляем склонированный контент на страницу
list.append(item)