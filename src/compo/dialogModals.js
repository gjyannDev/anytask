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

  //Appending the content to the DOM
  inputContainer.appendChild(inputLabel);
  if (inputType === "textarea") {
    inputContainer.appendChild(textarea)
  } else {
    inputContainer.appendChild(input)
  }

  return inputContainer;
}

export default function DialogModal(modalLabel) {
  const modal_container = document.createElement("div");
  const content_container = document.createElement("div");
  const modal_label_container = document.createElement("div");
  const modal_label = document.createElement("h2");

  modal_container.setAttribute("class", "modal__container");
  content_container.setAttribute("class", "content__container");
  modal_label_container.setAttribute("class", "label__container");
  modal_label.setAttribute("class", "modal__label");

  modal_label.textContent = modalLabel;

  //Appending the content
  modal_label_container.appendChild(modal_label);
  if (modalLabel === "Add Project") {
    content_container.appendChild(inputWithLabel("Title", "text", "title"));
    content_container.appendChild(
      inputWithLabel("Description", "textarea", "description")
    );
  } else if (modalLabel === "Edit Task") {
    content_container.appendChild(inputWithLabel("Title", "text", "title"));
  }
  modal_container.appendChild(modal_label_container);
  modal_container.appendChild(content_container);

  return modal_container;
}
