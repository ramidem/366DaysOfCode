const classNames = {
  TODO_ITEM: "todo-container",
  TODO_CHECKBOX: "todo-checkbox",
  TODO_DELETE: "todo-delete",
};

const list = document.getElementById("todo-list");
const itemCountSpan = document.getElementById("item-count");
const uncheckedCountSpan = document.getElementById("unchecked-count");

function newTodo() {
  let todo = promptData();

  // avoid blank todo item
  if (todo == "" || todo == null) return;

  // create elements
  var li = document.createElement("li");
  var label = document.createElement("label");
  var checkBox = document.createElement("input");
  var todoDelete = document.createElement("span");

  // modify elements
  li.className = classNames.TODO_ITEM;
  label.innerText = todo;
  checkBox.type = "checkbox";
  checkBox.className = classNames.TODO_CHECKBOX;
  todoDelete.innerText = "delete";
  todoDelete.className = classNames.TODO_DELETE;
  todoDelete.onclick = deleteTodo;

  // combine elements
  li.appendChild(checkBox);
  li.appendChild(label);
  li.appendChild(todoDelete);

  // remove "all done" message if there is li element
  if (document.getElementById("nothing")) {
    document.getElementById("nothing").remove();
  }

  // add li to the list
  list.appendChild(li);

  // update item count
  itemCountSpan.innerHTML = list.childElementCount;

  // if nothing is checked, set remaining count to match item count
  if (document.querySelectorAll("input:checked").length == 0) {
    uncheckedCountSpan.innerHTML = list.childElementCount;
  }
}

function promptData() {
  var thePrompt = prompt("What are you doing?");
  if (thePrompt == null || thePrompt == "" || thePrompt == undefined) {
    thePrompt = prompt("What are you doing?");
  }
  return thePrompt;
}

function deleteTodo(e) {
  e.target.parentElement.parentElement.removeChild(e.target.parentElement);
  itemCountSpan.innerHTML = list.childElementCount;
  updateRemainingCount();

  // display all done message
  allDone();
}

window.addEventListener("keyup", function (e) {
  if (e.keyCode == 78) {
    newTodo();
  }
});

function updateRemainingCount() {
  var allItems = list.childElementCount;
  var allChecked = document.querySelectorAll("input:checked").length;

  // set remaining to 1 if there one unchecked to do left
  if (allItems == 1 && allChecked == 0) {
    return (uncheckedCountSpan.innerHTML = 1);
  }

  return (uncheckedCountSpan.innerHTML = allItems - allChecked);
}

// handles remaining count when items are checked
window.addEventListener("change", updateRemainingCount);

// display all done message
function allDone() {
  if (list.childElementCount == 0) {
    return (list.innerHTML =
      "<h2 id='nothing'>All done.<br /><span>press <code>n</code> to add a todo.</span></h2>");
  }
}

allDone();
