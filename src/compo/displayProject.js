import addTaskIcon from "/src/assets/icons/plus.svg";

export default function DisplayProject(data) {
  const project_container = document.createElement("div");
  const proj_list_container = document.createElement("div");
  const lower_container = document.createElement("div");
  const add_task_container = document.createElement("div");
  const project_title = document.createElement("h1");
  const add_task_text = document.createElement("p");
  const add_task_icon = document.createElement("img");

  project_container.setAttribute("class", "display__project-container");
  proj_list_container.setAttribute("class", "display__project-list");
  lower_container.setAttribute("class", "lower__container");
  add_task_container.setAttribute("class", "add__task-container");
  project_title.setAttribute("class", "project__title");
  add_task_text.setAttribute("class", "add__task-text");

  project_title.textContent = data.title;
  add_task_text.textContent = "Add Task";
  add_task_icon.src = addTaskIcon;
  add_task_icon.alt = "add task plus icon";
  add_task_icon.style.width = "1.5rem";
  add_task_icon.style.height = "1.5rem";
  
  add_task_container.appendChild(add_task_icon);
  add_task_container.appendChild(add_task_text);
  project_container.appendChild(project_title);
  project_container.appendChild(add_task_container);

  return project_container;
}
