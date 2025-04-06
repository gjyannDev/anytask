import "/src/styles/style.css";
import "/src/styles/modernize.css";
import "./styles/styleCompo/sideBar.css";
import "./styles/styleCompo/dialogModals.css";
import SideBar from "./compo/sideBar";
import DialogModal from "./compo/dialogModals";

let main_container = document.querySelector(".main__container");
let contents_container = document.querySelector(".contents__container");
let side_bar = document.querySelector("#side__bar");
let side_bar_lower = document.querySelector(".side__bar-lower");
let add_project_btn = document.querySelector(".add__project-btn");
let dialog_container = document.querySelector(".dialog__container");
let dialog_form = document.querySelector("#dialog__form");
let close_dialog_btn = document.querySelector(".close__dialog");

side_bar.insertBefore(SideBar(), side_bar_lower);

add_project_btn.addEventListener("click", () => {
  dialog_form.replaceChildren();
  dialog_form.appendChild(DialogModal("Add Project"));
  dialog_container.classList.remove("hidden");
});

close_dialog_btn.addEventListener("click", () => {
  dialog_container.classList.add("hidden");
});
