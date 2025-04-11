function inputWithLabel(labelName, inputType, name, options = [], value = "") {
  const inputContainer = document.createElement("div");
  const inputLabel = document.createElement("p");
  const input = document.createElement("input");
  const textarea = document.createElement("textarea");
  const select = document.createElement("select");

  inputContainer.setAttribute("class", "input__container");
  input.setAttribute("type", inputType);
  input.setAttribute("name", name);
  inputLabel.setAttribute("class", "input__label");
  input.setAttribute("class", "input");
  textarea.setAttribute("class", "text__area");
  textarea.setAttribute("name", name);
  select.setAttribute("class", "select");
  select.setAttribute("name", name);
  input.value = value
  textarea.value = value
  
  inputLabel.textContent = labelName;

  if (inputType === "select") {
    options.forEach((opt) => {
      const option = document.createElement("option");
      option.value = opt.value;
      option.textContent = opt.label;
      select.appendChild(option);
    });
  }

  select.value = value

  //Appending the content to the DOM
  inputContainer.appendChild(inputLabel);
  if (inputType === "textarea") {
    inputContainer.appendChild(textarea);
  } else if (inputType === "select") {
    inputContainer.appendChild(select);
  } else {
    inputContainer.appendChild(input);
  }

  return inputContainer;
}

export default function DialogModal(modalLabel, data = {}) {
  const modal_container = document.createElement("div");
  const content_container = document.createElement("div");
  const modal_label_container = document.createElement("div");
  const modal_label = document.createElement("h2");

  modal_container.setAttribute("class", "modal__container");
  content_container.setAttribute("class", "content__container");
  modal_label_container.setAttribute("class", "label__container");
  modal_label.setAttribute("class", "modal__label");

  console.log("data in modal: ", data)
  modal_label.textContent = modalLabel;

  //Appending the content
  modal_label_container.appendChild(modal_label);
  if (modalLabel === "Add Project") {
    content_container.appendChild(inputWithLabel("Title", "text", "title"));
    content_container.appendChild(
      inputWithLabel("Description", "textarea", "description")
    );
  } else if (modalLabel === "Add Task") {
    content_container.appendChild(inputWithLabel("Title", "text", "title"));
    content_container.appendChild(
      inputWithLabel("Description", "textarea", "description")
    );
    content_container.appendChild(inputWithLabel("Due Date", "date", "date"));
    content_container.appendChild(
      inputWithLabel("Priority", "select", "priority", [
        { value: "low", label: "Low Priority" },
        { value: "medium", label: "Medium Priority" },
        { value: "high", label: "High Priority" },
        { value: "critical", label: "Critical" },
      ])
    );
  } else if (modalLabel === "Edit Task") {
    content_container.appendChild(inputWithLabel("Title", "text", "title", [], data.title));
    content_container.appendChild(
      inputWithLabel("Description", "textarea", "description", [], data.description)
    );
    content_container.appendChild(inputWithLabel("Due Date", "date", "date", [], data.date));
    content_container.appendChild(
      inputWithLabel("Priority", "select", "priority", [
        { value: "low", label: "Low Priority" },
        { value: "medium", label: "Medium Priority" },
        { value: "high", label: "High Priority" },
        { value: "critical", label: "Critical" },
      ], data.priority)
    );
  }
  modal_container.appendChild(modal_label_container);
  modal_container.appendChild(content_container);

  return modal_container;
}

export function hideModal(modalContainer) {
  document.querySelector(`.${modalContainer}`).classList.add("hidden");
}

