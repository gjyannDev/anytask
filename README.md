

# Any Task

A productivity-focused to-do list application that enables users to create and manage projects and tasks based on their personal or professional goals. Designed to help users stay organized and efficient, the app is built entirely with JavaScript, SCSS, and HTML. It leverages the browser’s local storage to securely save user data without the need for a backend or external database.

This application allows user to:
* Create and manage multiple projects

* Add, complete, or delete tasks within those projects

* Persist data using the browser’s local storage—no sign-up or internet required





## Features
* All user data is saved in the browser's local storage, ensuring tasks and projects remain intact even after a page refresh or browser restart.
* Users can create multiple projects to group tasks by category, goal, or context.
* Tasks can be created within specific projects, helping users stay organized and goal-focused.
* Users can create, read, update, and delete tasks as needed, with real-time updates reflected in the UI.

* Includes multiple task filters and views such as:

  * Today’s Tasks

  * This Week’s Tasks

  * Completed Tasks

  * Trashed Tasks


## Learnings

While building this project, I learned and refined several development skills:
* __Local Storage__: I learned how to persist user data using the Web Storage API, allowing the application to save and retrieve information even after a page reload.
* __Webpack__: I successfully integrated Webpack into the project to bundle and optimize JavaScript, SCSS, and asset files, improving both development efficiency and performance.
* __New Form Data__: I discovered cleaner and more efficient ways to retrieve form data, moving beyond outdated methods to use techniques like the FormData API and event-driven updates.
* __DOM__: After a long break from JavaScript, I re-familiarized myself with the Document Object Model (DOM) and applied that understanding to dynamically create, update, and manage UI elements in the app.
* __Higher Order Function__: This project gave me the opportunity to apply problem-solving techniques using JavaScript’s higher-order functions like map(), filter(), and forEach() to write more concise and functional code.
## Challenges Faced

* Early in the project, I struggled with creating a logical and scalable file/folder structure. As the app grew, it became clear that organizing scripts by functionality (e.g., tasks/, ui/, storage/) helped improve maintainability and clarity.
* I encountered bugs caused by attempting to attach event listeners to elements that hadn’t yet been rendered in the DOM. This taught me to delay DOM manipulation until elements are available, or to use event delegation when appropriate.
* Many components were initially written in a way that made them hard to reuse, leading to duplicated logic and inconsistent behavior across the app. Refactoring into modular, reusable functions improved both stability and flexibility.
## Future Plans
* Rebuilt the project using the MERN stack, implementing login and signup functionality for user authentication.
* Incorporated several new features that I found useful, and designed them to be practical for personal use as well.
* Added additional pages such as a calendar view and a Kanban board for enhanced project management and organization.
  
## Preview
![image](https://github.com/user-attachments/assets/453838b3-ea42-4f05-a2b0-6a9a7789b956)
![image](https://github.com/user-attachments/assets/ebbff889-fabf-4df2-9f73-56674fb18d7c)
![image](https://github.com/user-attachments/assets/858921fa-1201-479b-9475-a7bd29b81905)
![image](https://github.com/user-attachments/assets/db011867-4885-4288-a341-c7885cc22933)
![image](https://github.com/user-attachments/assets/fc3ee63b-9c6f-41bb-9e7c-dbd65cfbc699)
![image](https://github.com/user-attachments/assets/6e5fd959-173b-4243-b95d-abb009762420)
![image](https://github.com/user-attachments/assets/0bf22b37-708c-473a-972e-ec686fb1a50f)






