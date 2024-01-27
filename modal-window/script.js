"use strict";

const modal = document.querySelector(".modal");
const overalay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");

// querySelector selects only one element, if more elements have same class.
// So, we use querySelectorAll
const btnsOpenModal = document.querySelectorAll(".show-modal");
console.log(btnsOpenModal, typeof btnsOpenModal);

const cloasModal = function () {
  modal.classList.add("hidden");
  overalay.classList.add("hidden");
};

const openModal = function () {
  // Don't use "." before class name. "." is only for selector.
  modal.classList.remove("hidden");
  overalay.classList.remove("hidden");

  // another method
  // modal.style.display = "block";
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  // Each of them is a element
  // console.log(btnsOpenModal[i]);
  btnsOpenModal[i].addEventListener("click", openModal);
}

btnCloseModal.addEventListener("click", cloasModal);
overalay.addEventListener("click", cloasModal);

// KEYBOARD events - global events
// EvenObject - stores information which happened when an event is occurred.
document.addEventListener("keydown", function (e) {
  //   console.log(e);
  if (e.key === "q" && !modal.classList.contains("hidden")) {
    // Close the modal if it does not contain "hidden" class.
    cloasModal();
  }
});

// CLASSES - act as containers, aggregate multiple CSS properties.
// by adding and removing them, we activate and deactivate certain styles at the same time.
