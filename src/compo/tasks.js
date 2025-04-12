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

export function deleteTask(taskId, projectId) {
  const allProjects = getProject();
  const index = allProjects.findIndex((p) => p.id === projectId);
  let filterTask = undefined;

  allProjects.forEach((project) => {
    filterTask = project.tasks.filter((el) => el.id !== taskId);
  });

  allProjects[index].removeTask(filterTask);

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
