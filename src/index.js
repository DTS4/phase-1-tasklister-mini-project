document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('#create-task-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let todo = document.getElementById(`new-task-description`).value;
    buildToDo(todo);
    form.reset()
  });
});


function buildToDo(todo) {
  let li = document.createElement('li');
  let btn = document.createElement('button')
  btn.textContent = 'x';
  btn.addEventListener('click', handleDelete);
  li.textContent = todo;
  li.appendChild(btn);
  document.querySelector('#tasks').appendChild(li);
}

function handleDelete(e) {
  e.target.parentNode.remove();
}