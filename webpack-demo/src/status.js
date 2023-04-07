/* eslint-disable linebreak-style */
export const saveTasks = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const addCheckboxEventListener = (checkbox, task, input, tasks) => {
  checkbox.addEventListener('change', () => {
    task.completed = checkbox.checked;
    input.classList.toggle('activated');
    saveTasks(tasks);
  });
};

export const handlerClearText = (tasks) => {
  tasks = tasks.filter((task) => !task.completed);
  tasks.forEach((task, i) => {
    task.index = i + 1;
  });
  saveTasks(tasks);
  return tasks;
};
