const modalContainer = document.querySelector(".modal-overlay");
const modalBtnOpen = document.querySelector(".modal-btn-open");
const modalBtnClose = document.querySelector(".modal-btn-close");

modalBtnOpen.addEventListener("click", () => {
  modalContainer.classList.add("open-modal");
});

modalBtnClose.addEventListener("click", function () {
  modalContainer.classList.remove("open-modal");
});
