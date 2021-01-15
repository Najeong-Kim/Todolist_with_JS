const btn = document.querySelector('#button');
const list = document.querySelector('#list');
const todo = document.createElement('li');

btn.onclick = function() {
    let thing = prompt('할 일을 입력하세요');
    todo.textContent = thing;
    list.append(todo);
    alert('할 일이 추가되었습니다!');
}