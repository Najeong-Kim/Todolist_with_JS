const btn = document.querySelector('#button');
const thing = document.querySelector('#addThing');
const list = document.querySelector('#list');
const todo = document.createElement('li');

function addTodo() {
  const newThing = thing.value;
  if (newThing) {
    todo.textContent = newThing;
    list.append(todo);
    alert('할 일이 추가되었습니다!');
  } else {
    alert('할 일을 입력하세요!')
  }
  thing.value = '';
}

btn.addEventListener('click',addTodo);

function addTodoByEnter (e) {
  if (e.key === 'Enter') {
    addTodo();
  }
}

thing.addEventListener('keypress', addTodoByEnter);