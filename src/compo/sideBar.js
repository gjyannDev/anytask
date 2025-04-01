import allIcon from "/src/assets/icons/bx-border-all.svg";

export function sidebarNavLink(navText, navImage) {
  const nav_links = document.createElement("ul");
  const links = document.createElement("li");
  const links_container = document.createElement("div");
  const nav_img = document.createElement("img");
  const link_text = document.createElement("p");

  nav_links.setAttribute("class", "nav__links");
  links_container.setAttribute("class", "links__container");
  nav_img.setAttribute("class", "nav__icon");
  link_text.setAttribute("class", "link__text");

  nav_img.src = navImage;
  nav_img.alt = "nav icon";
  nav_img.style.width = "1.875rem";
  nav_img.style.height = "1.875rem";
  nav_img.style.objectFit = "cover";
  link_text.textContent = navText;

  links_container.appendChild(nav_img);
  links_container.appendChild(link_text);
  links.appendChild(links_container);
  nav_links.appendChild(links);

  return nav_links;
}

export default function SideBar() {
  const side_bar_container = document.createElement("div");
  const upper_container = document.createElement("div");
  const lower_container = document.createElement("div");
  const middle_container = document.createElement("div");
  const project_container = document.createElement("div");

  side_bar_container.setAttribute("class", "sidebar__container");
  upper_container.setAttribute("class", "upper__container");
  lower_container.setAttribute("class", "lower__container");
  middle_container.setAttribute("class", "middle__container");
  project_container.setAttribute("class", "project__container");

  upper_container.appendChild(sidebarNavLink("All", allIcon));
  side_bar_container.appendChild(upper_container);

  return side_bar_container;
}
