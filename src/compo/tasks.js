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
