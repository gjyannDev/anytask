export default function AddProject(title, description, projectId) {
  this.id = projectId;
  this.title = title;
  this.description = description;
  this.tasks = [];
}

AddProject.prototype.addTask = function(task) {
  this.tasks.push(task);
};

AddProject.prototype.removeTask = function(task) {
  this.tasks = task
}

AddProject.prototype.getTask = function() {
  return this.tasks
}

export function createProject(title, description, projId) {
  return new AddProject(title, description, projId);
}

export function storeProject(projects) {
  localStorage.setItem("project_list", JSON.stringify(projects));
}

export function getProject() {
  const res = localStorage.getItem("project_list");
  const rawProjects = res ? JSON.parse(res) : [];

  return rawProjects.map((p) => {
    const project = new AddProject(p.title, p.description, p.id);
    project.tasks = p.tasks || [];
    return project;
  });
}

export function getProjectById(projectId) {
  return getProject().find((p) => p.id === projectId);
}

export function getFormData(formContainer) {
  const formData = new FormData(formContainer);
  const data = Object.fromEntries(formData.entries());

  return data
}