import { getProject, storeProject } from "./project";

export function createTask(projectId, task) {
  const allProjects = getProject();

  const index = allProjects.findIndex((p) => p.id === projectId);

  if (index === -1) {
    console.error("Project not found");
    return;
  }

  allProjects[index].addTask(task);

  storeProject(allProjects);
}

export function getTaskByProject(projectId) {
  const allProjects = getProject();

  const index = allProjects.findIndex((p) => p.id === projectId);

  return allProjects[index].getTask();
}

export function getTaskById(taskId) {
  return getProject()
  .flatMap(project => project.tasks)
  .find(task => task.id === taskId);
}

export function updateTask(updatedTask) {
  const allProjects = getProject();

  allProjects.forEach((project) => {
    const taskIndex = project.tasks.findIndex((t) => t.id === updatedTask.id);

    if (taskIndex !== -1) {
      project.tasks[taskIndex] = updatedTask;
    }
  });

  storeProject(allProjects);
}

export function deleteTask(taskId) {
  const allProjects = getProject();

  const project = allProjects.find((p) => p.tasks.some((task) => task.id === taskId));

  if (!project) {
    console.error(`Task with ID ${taskId} not found in any project`);
    return;
  }

  const updatedTasks = project.tasks.filter((task) => task.id !== taskId);

  project.removeTask(updatedTasks);

  storeProject(allProjects);
}

export function filterTaskDataNotCompleted(tasks) {
  return tasks.filter((task) => task.is_completed === false);
}

export function filterTaskDataCompleted(tasks) {
  return tasks.filter((task) => task.is_completed === true);
}

export function getAllTask(allProjects) {
  return allProjects.reduce((acc, curr) => {
    acc.push(...curr.tasks)
    return acc
  }, [])
}

export function filterTodayTask(tasks) {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');

  const today = `${year}-${month}-${day}`;

  return tasks.filter((task) => task.date === today)
}

export function filterWeeklyTask(tasks) {
  const now = new Date();

  const startOfWeek = new Date(now);
  startOfWeek.setDate(now.getDate() - now.getDay() + 1); 
  startOfWeek.setHours(0, 0, 0, 0);

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);
  endOfWeek.setHours(23, 59, 59, 999);

  return tasks.filter(task => {
    const taskDate = new Date(task.date);
    return taskDate >= startOfWeek && taskDate <= endOfWeek;
  });
}
