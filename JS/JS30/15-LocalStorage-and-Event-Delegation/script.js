const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
// ---------------------- Get LocalStorage. else, blank array
const items = JSON.parse(localStorage.getItem("items")) || [];

function addItem(e) {
  e.preventDefault();

  const text = this.querySelector("[name=item]").value;

  const item = {
    text,
    done: false
  };
  items.push(item);

  populateList(items, itemsList);

  // Set LocalStorage
  // ------------------ key ---- stringify value
  localStorage.setItem("items", JSON.stringify(items));

  this.reset();
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map((plate, index) => {
      return `
      <li>
        <input type="checkbox" data-index=${index} id="item${index}" ${
        plate.done ? "checked" : ""
      } />
        <label for="item${index}">${plate.text}</label>
      </li>
    `;
    })
    .join("");
}

function toggleDone(e) {
  const el = e.target;
  const index = el.dataset.index;

  if (!el.matches("input")) return; // skip unless it's an input

  items[index].done = !items[index].done;

  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
  console.log(el);
}

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);

// On Page Load
populateList(items, itemsList);
