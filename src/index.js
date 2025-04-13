import "/src/styles/style.css";
import "/src/styles/modernize.css";
import "./styles/styleCompo/sideBar.css";
import "./styles/styleCompo/dialogModals.css";
import "./styles/styleCompo/contents.css";
import SideBar from "./compo/sideBar";
import DialogModal from "./compo/dialogModals";
import { hideModal } from "./compo/dialogModals";
import {
  createProject,
  storeProject,
  getProject,
  getProjectById,
  getFormData,
} from "./compo/project";
import {
  createTask,
  getTaskByProject,
  getTaskById,
  updateTask,
  deleteTask,
  getAllTask,
} from "./compo/tasks";
import DisplayProject from "./compo/displayTask";
import {
  renderProjects,
  renderSidebarProjects,
  renderPages,
} from "./compo/render";
import Render from "./compo/render";
import { v4 as uuidv4 } from "uuid";

let contents_container = document.querySelector(".contents__container");
let side_bar = document.querySelector("#side__bar");
let side_bar_lower = document.querySelector(".side__bar-lower");
let add_project_btn = document.querySelector(".add__project-btn");
let dialog_container_project = document.querySelector(
  ".dialog__container-project"
);
let project_form = document.querySelector("#project__form");
let project_list = document.querySelector(".project__list");
let task_form = document.querySelector("#task__form");
let dialog_container_task = document.querySelector(".dialog__container-task");
let edit_form = document.querySelector("#edit__form");
let dialog_container_edit = document.querySelector(".dialog__container-edit");
let del_container = document.querySelector(".illustration__container");
let dialog_container_del = document.querySelector(".dialog__container-del");

let current_project_id = "";
let task_id = "";
let is_completed = false;
const allTask = getAllTask(getProject());
let current_page = "Today";

//This insert the sidebar before the project contents in the sidebar
side_bar.insertBefore(SideBar(), side_bar_lower);
//Default page
renderPages(allTask, contents_container, current_page);

//Open add project modal
add_project_btn.addEventListener("click", () => {
  project_form.replaceChildren();
  project_form.appendChild(DialogModal("Add Project"));
  dialog_container_project.classList.remove("hidden");
});

//Open add task modal
document.addEventListener("click", (e) => {
  if (e.target.closest(".add__task-container")) {
    task_form.replaceChildren();
    task_form.appendChild(DialogModal("Add Task"));
    dialog_container_task.classList.remove("hidden");
  }
});

// This line of code is for the closing the modal
document.querySelectorAll("[data-modal-action]").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const modal = e.currentTarget.getAttribute("data-modal-action");

    if (modal === "close_project") {
      hideModal("dialog__container-project");
    } else if (modal === "close_task") {
      hideModal("dialog__container-task");
    } else if (modal === "close_edit") {
      hideModal("dialog__container-edit");
    } else if (modal === "close_del") {
      hideModal("dialog__container-del");
    }
  });
});

//Add & Submit functionality
document.querySelectorAll("[data-add-target]").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const modal = e.currentTarget.getAttribute("data-add-target");

    if (modal === "project") {
      e.preventDefault();

      let projectId = uuidv4();

      const data = getFormData(project_form);

      const currentProjects = getProject();

      currentProjects.push(
        createProject(data.title, data.description, projectId)
      );

      storeProject(currentProjects);

      renderSidebarProjects(project_list);

      hideModal("dialog__container-project");
    } else if (modal === "task") {
      e.preventDefault();

      let taskId = uuidv4();

      const data = getFormData(task_form);

      const tasks = {
        id: taskId,
        project_id: getProjectById(current_project_id).id,
        is_completed: is_completed,
        ...data,
      };

      createTask(current_project_id, tasks);

      Render(current_page, current_project_id, contents_container);

      hideModal("dialog__container-task");
    } else if (modal === "edit") {
      e.preventDefault();

      let task_details = getTaskById(task_id);
      const data = getFormData(edit_form);

      task_details.title = data.title;
      task_details.description = data.description;
      task_details.date = data.date;
      task_details.priority = data.priority;

      updateTask(task_details);

      Render(current_page, current_project_id, contents_container);

      hideModal("dialog__container-edit");
    } else if (modal === "delete_task") {
      e.preventDefault();

      deleteTask(task_id, current_project_id);

      Render(current_page, current_project_id, contents_container);

      hideModal("dialog__container-del");
    }
  });
});

//This function is for the adding project on the sidebar
Array.from(project_list.children).forEach((project) => {
  project.addEventListener("click", (e) => {
    const project_id = e.currentTarget.getAttribute("data-id");
    const project = getProjectById(project_id);

    current_project_id = project_id;
    current_page = "Project";

    contents_container.replaceChildren(DisplayProject(project));
  });
});

// This function allow you to click specific task
document.addEventListener("click", (e) => {
  const task_container = e.target.closest(".display__project-list > *");
  const task_checkbox = e.target.closest(".task__checkbox");
  let task = {};

  if (task_container && task_container.hasAttribute("data-task-id")) {
    task_id = task_container.getAttribute("data-task-id");
    task = getTaskById(task_id);

    if (task_checkbox && task_checkbox.checked) {
      is_completed = true;

      let task_details = getTaskById(task_id);

      task_details.is_completed = is_completed;

      updateTask(task_details);

      Render(current_page, current_project_id, contents_container);
    }
  }

  //This show the modal of the edit form
  if (e.target.closest(".edit__btn")) {
    edit_form.replaceChildren();
    edit_form.appendChild(DialogModal("Edit Task", task));
    dialog_container_edit.classList.remove("hidden");
  }
});

document.addEventListener("click", (e) => {
  if (e.target.closest(".del__btn")) {
    del_container.replaceChildren();
    del_container.appendChild(
      DialogModal("Delete", {}, "Are you sure you want to delete this task?")
    );
    dialog_container_del.classList.remove("hidden");
  }
});

//This trigger what page is click
document.querySelectorAll("[data-target-page]").forEach((page) => {
  page.addEventListener("click", (e) => {
    current_page = e.currentTarget.getAttribute("data-target-page");
    renderPages(getAllTask(getProject()), contents_container, current_page);
  });
});
