// ****** select items **********

const form = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");
const grocery = document.getElementById("grocery");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const submitBtn = document.querySelector(".submit-btn");
const clearBtn = document.querySelector(".clear-btn");

// edit option
let editElement;
let editFlag = false;
let editID = "";

// ****** event listeners **********

// form submit
form.addEventListener("submit", addItem);

// clear the list items
clearBtn.addEventListener("click", clearItem);

// ****** functions **********

// add item
function addItem(e) {
  e.preventDefault();

  const value = grocery.value;
  const id = new Date().getTime().toString();

  // condition for input
  if (value && !editFlag) {
    // add article section
    const element = document.createElement("article");

    // add class
    element.classList.add("grocery-item");

    // add id
    const attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);

    element.innerHTML = `
              <p class="title">${value}</p>
            <div class="btn-container">
              <!-- edit btn -->
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <!-- delete btn -->
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
    `;

    // edit and single delete btn
    const deleteBtn = element.querySelector(".delete-btn");
    const editBtn = element.querySelector(".edit-btn");

    deleteBtn.addEventListener("click", deleteItem);
    editBtn.addEventListener("click", editItem);
    // append child
    list.appendChild(element);

    // display alert
    displayAlert(`${value} added to the list`, "success");

    //show container
    container.classList.add("show-container");

    // add to local storage
    addToLocalStorage(id, value);

    // set back to default
    setBackToDefault();
  } else if (value && editFlag) {
    editElement.innerHTML = value;
    displayAlert(`${value} edited`, "success");

    // edit local storage
    editLocalStorage(editID, value);
    setBackToDefault();
  } else {
    displayAlert("Please enter value", "danger");
  }
}

// display alert
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  // remove alert
  setInterval(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

// delete single item function
function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  list.removeChild(element);

  displayAlert("item removed", "danger");

  if (list.children.length === 0) {
    container.classList.remove("show-container");
  }
  setBackToDefault();

  // delete from local storage
  // removeFromLocalStorage(id);
}

// edit item function
function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;

  editElement = e.currentTarget.parentElement.previousElementSibling;

  // set form value
  grocery.value = editElement.innerHTML;

  editFlag = true;
  editID = element.dataset.id;
  submitBtn.textContent = "edit";
}

// clear item function
function clearItem() {
  const items = document.querySelectorAll(".grocery-item");

  if (items.length > 0) {
    items.forEach(function (item) {
      list.removeChild(item);
    });
  }
  container.classList.remove("show-container");
  displayAlert("empty list", "danger");
  // setBackToDefault();
}

// set back to default
function setBackToDefault() {
  grocery.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "submit";
}

// ****** local storage **********
function addToLocalStorage(id, value) {
  const grocery = { id: id, value: value };
  console.log(grocery);

  // console.log("item added");
}

function removeFromLocalStorage(id) {
  //code here
}

function editLocalStorage(id, value) {
  // code here
}

// local storage API
// setItem
// getItem
// removeItem
// save as strings

// localStorage.setItem("orange", JSON.stringify(["item", "item2", "noteBook"]));

// const storage = JSON.parse(localStorage.getItem("orange"));

// console.log(storage);
// localStorage.removeItem("orange");

// ****** setup items **********
