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

// event listener

// Form submit
form.addEventListener("submit", addItem);

// cleat button
clearBtn.addEventListener("click", clearItem);

// add item
function addItem(e) {
  e.preventDefault();

  const value = grocery.value;
  const id = new Date().getTime().toString();

  //condition

  if (value && !editFlag) {
    const element = document.createElement("article");

    element.classList.add("grocery-item");

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

    list.appendChild(element);

    displayAlert("item added to the list", "success");

    container.classList.add("show-container");

    // local storage
    addToLocalStorage(id, value);

    // set default
    setBackToDefault();
  } else if (value && editFlag) {
    console.log("Edited done");
  } else {
    displayAlert("please add item", "danger");
  }
}

// display alert
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  // remove alert
  setInterval(() => {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
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
  setBackToDefault();
}

// set default function
function setBackToDefault() {
  grocery.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "submit";
}

// local storage function
function addToLocalStorage(id, value) {
  console.log("local storage");
}
