export default function AddProject(title, description) {
  this.title = title;
  this.description = description;
  this.tasks = [];
}

AddProject.prototype.addTask = function (task) {
  this.tasks.push(task);
};

export function createProject(title, description) {
  return new AddProject(title, description)
}

export function storeProject(projects) {
  localStorage.setItem("project_list", JSON.stringify(projects))
}

export function getProject() {
  const res = localStorage.getItem("project_list")
  return res ? JSON.parse(res) : [];
}

function deleteProject() {

}
