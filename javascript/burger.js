"use strict";

const burgerButton = document.querySelector(".btn-burger");
const menu = document.querySelector(".burger-menu-content");

function openMenu() {
  menu.classList.toggle("hidden");
}

function closeMenu() {
  menu.classList.toggle("hidden");
}

burgerButton.addEventListener("click", openMenu);

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Escape" && !menu.classList.contains("hidden")) {
    closeMenu();
  }
});
