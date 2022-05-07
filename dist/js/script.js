const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
const navItem = document.querySelectorAll("#nav-menu a");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

navItem.forEach(function (elem) {
  elem.addEventListener("click", function () {
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
  });
});
