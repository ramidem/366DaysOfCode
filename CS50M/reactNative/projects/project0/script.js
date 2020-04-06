// const classNames = {
//   TODO_ITEM: "todo-container",
//   TODO_CHECKBOX: "todo-checkbox",
//   TODO_TEXT: "todo-text",
//   TODO_DELETE: "todo-delete",
// };

const todos = [];

const list = document.getElementById("todo-list");
const todoForm = document.getElementById("todo-form");

const itemCountSpan = document.getElementById("item-count");
const uncheckedCountSpan = document.getElementById("unchecked-count");

const todo = document.getElementById("addTodo");
// console.log(list);

function newTodo(e) {
  e.preventDefault();

  // generate id
  const chars = "123456789abcdef".split("");
  let id = [];
  for (let i = 0; i <= chars.length; i++) {
    let randomNums = Math.floor(Math.random() * 16);
    id.push(chars[randomNums]);
  }

  // add to `todos` array
  todos.push({ item: todo.value, isDone: false, id: id.join("") });

  // todoForm.reset();

  console.table(todos);
}

// todos.map((item) => `<li><p>${item.todo}</p></li>`);

// console.log(todos);

todoForm.addEventListener("submit", newTodo);
