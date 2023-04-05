const tasks = [
  {
    description: 'Walk the dog',
    completed: false,
    index: 1,
  },
  {
    description: 'Buy groceries',
    completed: true,
    index: 2,
  },
  {
    description: 'Do laundry',
    completed: false,
    index: 3,
  },
  {
    description: 'Pay bills',
    completed: false,
    index: 4,
  },
];

function renderTodoList(tasks) {
  const todoList = document.querySelector('#todo-list');
  const ul = document.createElement('ul');
  ul.style.listStyle = 'none'; // Remove default bullet points
  tasks.sort((a, b) => a.index - b.index);
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    li.appendChild(checkbox);
    li.innerHTML += `${task.description} <span class="task-more">&#8942;</span>`;
    ul.appendChild(li);
    if (index < tasks.length - 1) { // Add horizontal line for all items except the last one
      const hr = document.createElement('hr');
      ul.appendChild(hr);
    }
  });
  todoList.appendChild(ul);
}

renderTodoList(tasks);
