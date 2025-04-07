import "/src/styles/style.css";
import "/src/styles/modernize.css";
import "./styles/styleCompo/sideBar.css";
import "./styles/styleCompo/dialogModals.css";
import SideBar from "./compo/sideBar";
import DialogModal from "./compo/dialogModals";
import { hideModal } from "./compo/dialogModals";
import { createProject, storeProject, getProject } from "./compo/addProject";

let main_container = document.querySelector(".main__container");
let contents_container = document.querySelector(".contents__container");
let side_bar = document.querySelector("#side__bar");
let side_bar_lower = document.querySelector(".side__bar-lower");
let add_project_btn = document.querySelector(".add__project-btn");
let dialog_container = document.querySelector(".dialog__container");
let dialog_form = document.querySelector("#dialog__form");
let cancel__btn = document.querySelector(".cancel__btn");
let add_project = document.querySelector(".add__proj-btn");

side_bar.insertBefore(SideBar(), side_bar_lower);

add_project_btn.addEventListener("click", () => {
  dialog_form.replaceChildren();
  dialog_form.appendChild(DialogModal("Add Project"));
  dialog_container.classList.remove("hidden");
});

add_project.addEventListener("click", (e) => {
  e.preventDefault();

  const formData = new FormData(dialog_form);
  const data = Object.fromEntries(formData.entries());

  const currentProjects = getProject();

  currentProjects.push(createProject(data.title, data.description));
  storeProject(currentProjects);

  hideModal();
});

cancel__btn.addEventListener("click", () => {
  hideModal();
});
