import AddProject from "./project";
import { getProject, storeProject } from "./project";

export function createTask(projectId, task) {
  const allProjects = getProject()

  const index = allProjects.findIndex(p => p.id === projectId);
  
  if (index === -1) {
    console.error("Project not found");
    return;
  }

  const project = new AddProject(
    allProjects[index].title,
    allProjects[index].description,
    allProjects[index].id
  );
  project.tasks = allProjects[index].tasks || [];

  project.addTask(task);

  allProjects[index] = project;
  storeProject(allProjects);
}
