/* eslint-disable linebreak-style */
export const updateStatus = (index, tasks, completed) => {
  tasks[index].completed = completed;
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const clearCompleted = (tasks) => {
  tasks = tasks.filter((task) => !task.completed);
  tasks.forEach((task, i) => {
    task.index = i + 1;
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
  return tasks;
};
