function inputWithLabel(labelName) {
  
}

export default function ProjectModal() {
  const modal_container = document.createElement("div");
  const content_container = document.createElement("div");
  const modal_label_container = document.createElement("div");
  const grouped_button_container = document.createElement("div");
  const modal_label = document.createElement("h2");
  const add_button = document.createElement("button");
  const cancel_button = document.createElement("button");

  modal_container.setAttribute("class", "modal__container");
  content_container.setAttribute("class", "content__container");
  modal_label_container.setAttribute("class", "label__container");
  grouped_button_container.setAttribute("class", "button__container");
  modal_label.setAttribute("class", "modal__label");
  
  return modal_container;
}
