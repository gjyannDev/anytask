function inputWithLabel(labelName, inputType, name) {
  const inputContainer = document.createElement("div");
  const inputLabel = document.createElement("p");
  const input = document.createElement("input");
  const textarea = document.createElement("textarea");

  inputContainer.setAttribute("class", "input__container");
  inputContainer.setAttribute("type", inputType);
  inputContainer.setAttribute("name", name);
  inputLabel.setAttribute("class", "input__label");
  input.setAttribute("class", "input");
  textarea.setAttribute("class", "text__area");

  inputLabel.textContent = labelName;

  inputContainer.appendChild(inputLabel);
  inputType !== "textarea"
    ? inputContainer.appendChild(input)
    : inputContainer.appendChild(textarea);

  return inputContainer;
}

export default function DialogModal(modalLabel) {
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
  add_button.setAttribute("class", "add__btn btn");
  cancel_button.setAttribute("class", "cancel__btn btn");

  modal_label.textContent = modalLabel;
  add_button.textContent = "Add";
  cancel_button.textContent = "Cancel";

  modal_label_container.appendChild(modal_label);
  content_container.appendChild(inputWithLabel("Title", "text", "title"));
  content_container.appendChild(
    inputWithLabel("Description", "text", "description")
  );
  modal_container.appendChild(modal_label_container);
  modal_container.appendChild(content_container);

  return modal_container;
}
