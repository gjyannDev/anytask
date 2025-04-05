import "/src/styles/style.css";
import "/src/styles/modernize.css";
import "./styles/styleCompo/sideBar.css";
import SideBar from "./compo/sideBar";
import DialogModal from "./compo/dialogModals";

let main_container = document.querySelector(".main__container");
let contents_container = document.querySelector(".contents__container");
let side_bar = document.querySelector("#side__bar");
let side_bar_lower = document.querySelector(".side__bar-lower");
let add_project_btn = document.querySelector(".add__project-btn");
let dialog_container = document.querySelector(".dialog__container");

side_bar.insertBefore(SideBar(), side_bar_lower);
add_project_btn.addEventListener("click", () => {
  dialog_container.appendChild(DialogModal("Add Project"))
});
