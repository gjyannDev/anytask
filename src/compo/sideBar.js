import allIcon from "/src/assets/icons/bx-border-all.svg";
import todayIcon from "/src/assets/icons/bx-calendar.svg";
import weeklyIcon from "/src/assets/icons/bx-calendar-week.svg";
import completedIcon from "/src/assets/icons/bx-check-square.svg";
import trashIcon from "/src/assets/icons/bx-trash.svg";

export function sidebarNavLink(navText, navImage) {
  const links = document.createElement("li");
  const links_container = document.createElement("div");
  const nav_img = document.createElement("img");
  const link_text = document.createElement("p");

  links_container.setAttribute("class", "links__container");
  nav_img.setAttribute("class", "nav__icon");
  link_text.setAttribute("class", "link__text");

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
  upper_container.appendChild(nav_links_upper)
  nav_links_middle.appendChild(sidebarNavLink("Today", todayIcon));
  nav_links_middle.appendChild(sidebarNavLink("Weekly", weeklyIcon));
  nav_links_middle.appendChild(sidebarNavLink("Completed", completedIcon));
  nav_links_middle.appendChild(sidebarNavLink("Trash", trashIcon));
  middle_container.appendChild(nav_links_middle)
  side_bar_container.appendChild(upper_container);
  side_bar_container.appendChild(middle_container)

  return side_bar_container;
}
