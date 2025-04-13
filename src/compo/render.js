import { getProjectById } from "./project";
import DisplayProject from "./displayTask";
import { disProjSidebar } from "./sideBar";
import { displayPages } from "./displayTask";
import { getAllTask } from "./tasks";
import { getProject } from "./project";

export function renderProjects(projectId, container) {
  const project = getProjectById(projectId);

  container.replaceChildren(DisplayProject(project));
}

export function renderPages(tasks, container, page) {
  if (page === "All") {
    container.replaceChildren(displayPages(tasks, page));
  } else if (page === "Today") {
    container.replaceChildren(displayPages(tasks, page));
  } else if (page === "Weekly") {
    container.replaceChildren(displayPages(tasks, page));
  } else if (page === "Completed") {
    container.replaceChildren(displayPages(tasks, page));
  } else {
    console.error(`Unknown page: ${page}`);
  }
}

export function renderSidebarProjects(container) {
  container.innerHTML = "";

  disProjSidebar();
}

export default function Render(
  currentPage,
  currentProjectId,
  contentsContainer
) {
  return currentPage === "Project"
    ? renderProjects(currentProjectId, contentsContainer)
    : renderPages(getAllTask(getProject()), contentsContainer, currentPage);
}
