/*eslint for-direction: "error"*/
export const saveTasks = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Define the functions for adding tasks
export const addTask = (description, tasks) => {
  const task = {
    description,
    completed: false,
    index: tasks.length + 1,
  };
  tasks.push(task);
  saveTasks(tasks);
  return task;
};

// Function for deleting or removing tasks
export const deleteTask = (index, tasks) => {
  tasks.splice(index, 1);
  for (let i = index; i < tasks.length; i -= 1) {
    tasks[i].index = i + 1;
  }
  saveTasks(tasks);
};

// Function for editing task description.
export const editTask = (index, description, tasks) => {
  tasks[index].description = description;
  saveTasks(tasks);
};