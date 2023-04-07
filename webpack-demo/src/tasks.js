/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable linebreak-style */
export const saveTasks = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const addTask = (description, tasks) => {
  const newTask = { description, completed: false };
  tasks.push(newTask);
  saveTasks(tasks);
};

export const deleteTask = (index, tasks) => {
  tasks.splice(index, 1);
  saveTasks(tasks);
};

export const editTask = (index, description, tasks) => {
  tasks[index].description = description;
  saveTasks(tasks);
};
