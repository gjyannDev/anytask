import allIcon from "/src/assets/icons/bx-border-all.svg";
import todayIcon from "/src/assets/icons/bx-calendar.svg";
import weeklyIcon from "/src/assets/icons/bx-calendar-week.svg";
import completedIcon from "/src/assets/icons/bx-check-square.svg";
import projectIcon from "/src/assets/icons/circle.svg";
import { getProject } from "./project";

export function sidebarNavLink(navText, navImage) {
  const links = document.createElement("li");
  const links_container = document.createElement("div");
  const nav_img = document.createElement("img");
  const link_text = document.createElement("p");

  links_container.setAttribute("class", "links__container");
  nav_img.setAttribute("class", "nav__icon");
  link_text.setAttribute("class", "link__text");
  links.setAttribute("data-target-page", navText)

  nav_img.src = navImage;
  nav_img.alt = "nav icon";
  nav_img.style.width = "1.5rem";
  nav_img.style.height = "1.5rem";
  nav_img.style.objectFit = "cover";
  link_text.textContent = navText;

  links_container.appendChild(nav_img);
  links_container.appendChild(link_text);
  links.appendChild(links_container);

  return links;
}

function disProjSidebar() {
  const project_list_container = document.querySelector(".project__list");
  const projects = getProject();

  projects.forEach((project) => {
    const list_name_container = document.createElement("div");
    const project_icon = document.createElement("img");
    const project_list_name = document.createElement("p");

    list_name_container.setAttribute(
      "class",
      "list__name-container proj__name"
    );
    list_name_container.setAttribute("data-id", project.id);
    project_list_name.setAttribute("class", "project__list-name");
    project_icon.setAttribute("class", "proj__icon");

    project_icon.src = projectIcon;
    project_icon.alt = "Circle icon";
    project_icon.style.width = "1.5rem";
    project_icon.style.height = "1.5rem";
    project_list_name.textContent = project.title;

    list_name_container.appendChild(project_icon);
    list_name_container.appendChild(project_list_name);
    project_list_container.appendChild(list_name_container);
  });

  return project_list_container;
}

export default function SideBar() {
  const nav_links_middle = document.createElement("ul");
  const nav_links_upper = document.createElement("ul");
  const side_bar_container = document.createElement("div");
  const upper_container = document.createElement("div");
  const lower_container = document.createElement("div");
  const middle_container = document.createElement("div");

  nav_links_middle.setAttribute("class", "nav__links");
  nav_links_upper.setAttribute("class", "nav__links");
  side_bar_container.setAttribute("class", "sidebar__container");
  upper_container.setAttribute("class", "upper__container");
  lower_container.setAttribute("class", "lower__container");
  middle_container.setAttribute("class", "middle__container");

  nav_links_upper.appendChild(sidebarNavLink("All", allIcon));
  upper_container.appendChild(nav_links_upper);
  nav_links_middle.appendChild(sidebarNavLink("Today", todayIcon));
  nav_links_middle.appendChild(sidebarNavLink("Weekly", weeklyIcon));
  nav_links_middle.appendChild(sidebarNavLink("Completed", completedIcon));
  middle_container.appendChild(nav_links_middle);
  disProjSidebar();
  side_bar_container.appendChild(upper_container);
  side_bar_container.appendChild(middle_container);

  return side_bar_container;
}
