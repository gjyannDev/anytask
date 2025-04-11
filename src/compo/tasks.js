import { getProject, storeProject } from "./project";

export function createTask(projectId, task) {
  const allProjects = getProject()

  const index = allProjects.findIndex(p => p.id === projectId);
  
  if (index === -1) {
    console.error("Project not found");
    return;
  }

  allProjects[index].addTask(task);

  storeProject(allProjects);
}

export function getTaskByProject(projectId) {
  const allProjects = getProject()

  const index = allProjects.findIndex(p => p.id === projectId);

  return allProjects[index].getTask();
}

export function getTaskById(projectId, taskId) {
  return getTaskByProject(projectId).find((p) => p.id === taskId)
}

export function updateTask(updatedTask) {
  const allProjects = getProject()
  
  allProjects.forEach((project) => {
    const taskIndex = project.tasks.findIndex((t) => t.id === updatedTask.id);

    if (taskIndex !== -1) {
      project.tasks[taskIndex] = updatedTask;
    }
  });

  storeProject(allProjects);
}
