import "/src/styles/style.css";
import "/src/styles/modernize.css";
import "./styles/styleCompo/sideBar.css"
import SideBar from "./compo/sideBar";

let main_container = document.querySelector(".main__container");
let contents_container = document.querySelector(".contents__container");
let side_bar = document.querySelector("#side__bar");
let side_bar_lower = document.querySelector(".side__bar-lower")

side_bar.insertBefore(SideBar(), side_bar_lower)


