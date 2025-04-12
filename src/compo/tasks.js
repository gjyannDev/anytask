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

export function getCompleteTask(allTask) {
  return allTask
}
