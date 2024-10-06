document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('#create-task-form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let todo = document.getElementById('new-task-description').value;
    let priority = document.getElementById('priority').value;
    buildToDo(todo, priority);

    form.reset();
  });
});

function buildToDo(todo, priority) {
  let li = document.createElement('li');

  li.textContent = todo;
  if (priority === 'high') {
    li.style.color = 'red';
  } else if (priority === 'medium') {
    li.style.color = 'yellow';
  } else {
    li.style.color = 'green';
  }

  let btn = document.createElement('button');
  btn.textContent = 'x';
  btn.addEventListener('click', handleDelete);

  li.appendChild(btn);
  document.querySelector('#tasks').appendChild(li);
}

function handleDelete(e) {
  e.target.parentNode.remove();
}
