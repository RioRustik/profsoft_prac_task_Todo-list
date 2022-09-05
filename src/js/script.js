const list = document.querySelector('#todo-list');
const template = document.querySelector('#template');
const addBtnTask = document.querySelector('.btn-add-task');
const contentText = document.querySelector('.field-add-task');

let listTasks = JSON.parse(localStorage.getItem('tasks')) || []

if(listTasks.length !== 0){
    update();
}
function addTask() {
  if (contentText.value == "") {
    return;
  };
  
  const newElem = {
    id: listTasks.length,
    content: contentText.value,
  };
  
  listTasks.push(newElem);
  localStorage.setItem('tasks', JSON.stringify(listTasks));
  
  list.innerHTML = "";
  update();
  contentText.value = "";
}
function displayTask(task) {
  const item = template.content.cloneNode(true);
  const li = item.querySelector('li');
  const checkbox = item.querySelector('input');

  li.textContent = task.content;
  list.append(item);

  const deleteTask = (e) => {
    listTasks = listTasks.filter((list) => list.id !== task.id);
    localStorage.setItem('tasks', JSON.stringify(listTasks));
    list.innerHTML = "";
    update();
  };

  checkbox.addEventListener('change', function () {
    setTimeout(deleteTask, 500);
  });
}

function update() {
  for (let task of listTasks) {
    displayTask(task);
  }
}

addBtnTask.addEventListener('click', addTask);