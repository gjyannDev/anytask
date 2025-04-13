import addTaskIcon from "/src/assets/icons/plus.svg";
import delTaskIcon from "/src/assets/icons/bx-trash.svg";
import editTaskIcon from "/src/assets/icons/bx-edit.svg";
import {
  getTaskByProject,
  filterTaskDataNotCompleted,
  filterTaskDataCompleted,
  filterTodayTask,
  filterWeeklyTask
} from "./tasks";

//TODO: Refactor code and make them much more reusable

export function displayTask(tasks, completed) {
  const container = document.createDocumentFragment();

  tasks.forEach((task, index) => {
    const task_container = document.createElement("div");
    const right_contents = document.createElement("div");
    const left_contents = document.createElement("div");
    const text_contents = document.createElement("div");
    const checkbox = document.createElement("input");
    const task_name = document.createElement("h3");
    const task_description = document.createElement("p");
    const edit_btn = document.createElement("img");
    const del_btn = document.createElement("img");

    task_container.setAttribute("class", "task__container");
    task_container.setAttribute("data-task-id", task.id);
    right_contents.setAttribute("class", "task__right-contents");
    left_contents.setAttribute("class", "task__left-contents");
    text_contents.setAttribute("class", "task__text-contents");
    task_name.setAttribute("class", "task__name");
    task_description.setAttribute("class", "task__description");
    edit_btn.setAttribute("class", "edit__btn");
    del_btn.setAttribute("class", "del__btn");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "task__checkbox");

    task_name.textContent = task.title;
    task_description.textContent = task.description;
    edit_btn.src = editTaskIcon;
    edit_btn.alt = "edit task icon";
    edit_btn.style.width = "1.3rem";
    edit_btn.style.height = "1.3rem";
    del_btn.src = delTaskIcon;
    del_btn.alt = "trash task icon";
    del_btn.style.width = "1.3rem";
    del_btn.style.height = "1.3rem";

    text_contents.appendChild(task_name);
    text_contents.appendChild(task_description);
    (completed !== true) && left_contents.appendChild(checkbox);
    left_contents.appendChild(text_contents);
    right_contents.appendChild(edit_btn);
    right_contents.appendChild(del_btn);
    task_container.appendChild(left_contents);
    task_container.appendChild(right_contents);

    container.appendChild(task_container);
  });
  return container;
}

export default function DisplayProject(data) {
  const project_container = document.createElement("div");
  const proj_list_container = document.createElement("div");
  const lower_container = document.createElement("div");
  const add_task_container = document.createElement("div");
  const project_title = document.createElement("h1");
  const add_task_text = document.createElement("p");
  const add_task_icon = document.createElement("img");
  const add_task_btn = document.createElement("button");

  project_container.setAttribute("class", "display__project-container");
  proj_list_container.setAttribute("class", "display__project-list");
  lower_container.setAttribute("class", "lower__container");
  add_task_container.setAttribute("class", "add__task-container");
  add_task_btn.setAttribute("data-open-modal", "task");
  add_task_btn.setAttribute("class", "add__task-modal");
  project_title.setAttribute("class", "project__title");
  add_task_text.setAttribute("class", "add__task-text");

  project_title.textContent = data.title;
  add_task_text.textContent = "Add Task";
  add_task_icon.src = addTaskIcon;
  add_task_icon.alt = "add task plus icon";
  add_task_icon.style.width = "1.5rem";
  add_task_icon.style.height = "1.5rem";

  add_task_btn.appendChild(add_task_icon);
  add_task_btn.appendChild(add_task_text);
  add_task_container.appendChild(add_task_btn);
  proj_list_container.appendChild(
    displayTask(filterTaskDataNotCompleted(data.tasks), false)
  );
  project_container.appendChild(project_title);
  project_container.appendChild(proj_list_container);
  project_container.appendChild(add_task_container);

  return project_container;
}

export function displayAllTask(taskData) {
  const project_container = document.createElement("div");
  const proj_list_container = document.createElement("div");
  const lower_container = document.createElement("div");
  const page_title = document.createElement("h1");

  project_container.setAttribute("class", "display__project-container");
  proj_list_container.setAttribute("class", "display__project-list");
  lower_container.setAttribute("class", "lower__container");
  page_title.setAttribute("class", "page__title");

  page_title.textContent = "All";

  proj_list_container.appendChild(
    displayTask(filterTaskDataNotCompleted(taskData), false)
  );
  project_container.appendChild(page_title);
  project_container.appendChild(proj_list_container);

  return project_container;
}

export function displayCompletedTask(taskData) {
  const project_container = document.createElement("div");
  const proj_list_container = document.createElement("div");
  const lower_container = document.createElement("div");
  const page_title = document.createElement("h1");

  project_container.setAttribute("class", "display__project-container");
  proj_list_container.setAttribute("class", "display__project-list");
  lower_container.setAttribute("class", "lower__container");
  page_title.setAttribute("class", "page__title");

  page_title.textContent = "Completed";

  proj_list_container.appendChild(
    displayTask(filterTaskDataCompleted(taskData), true)
  );
  project_container.appendChild(page_title);
  project_container.appendChild(proj_list_container);

  return project_container;
}

export function displayTodayTask(taskData) {
  const project_container = document.createElement("div");
  const proj_list_container = document.createElement("div");
  const lower_container = document.createElement("div");
  const page_title = document.createElement("h1");

  project_container.setAttribute("class", "display__project-container");
  proj_list_container.setAttribute("class", "display__project-list");
  lower_container.setAttribute("class", "lower__container");
  page_title.setAttribute("class", "page__title");

  page_title.textContent = "Today";

  proj_list_container.appendChild(
    displayTask(filterTodayTask(filterTaskDataNotCompleted(taskData)), false)
  );
  project_container.appendChild(page_title);
  project_container.appendChild(proj_list_container);

  return project_container;
}

export function displayWeeklyTask(taskData) {
  const project_container = document.createElement("div");
  const proj_list_container = document.createElement("div");
  const lower_container = document.createElement("div");
  const page_title = document.createElement("h1");

  project_container.setAttribute("class", "display__project-container");
  proj_list_container.setAttribute("class", "display__project-list");
  lower_container.setAttribute("class", "lower__container");
  page_title.setAttribute("class", "page__title");

  page_title.textContent = "Weekly";

  proj_list_container.appendChild(
    displayTask(filterWeeklyTask(filterTaskDataNotCompleted(taskData)), false)
  );
  project_container.appendChild(page_title);
  project_container.appendChild(proj_list_container);

  return project_container;
}


