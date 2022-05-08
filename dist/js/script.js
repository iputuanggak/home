const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
const navItemMenu = navMenu.querySelectorAll("a");
const sections = document.querySelectorAll("section");
const navItem = document.querySelectorAll("header a");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});


navItemMenu.forEach((elem) => {
  elem.addEventListener("click", function(){
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden"); 
  });
});

navItem.forEach((elem) => {
  elem.addEventListener("click", function(e){
    e.preventDefault();
    var hastag = this.getAttribute("href");
    document.querySelector(hastag).scrollIntoView();
  });
});

window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 2) {
      current = section.getAttribute("id");
      console.log(current);
    }
  });

  navItem.forEach((elem) => {
    // console.log(elem);
    elem.classList.remove("nav-link-active");
    var hastag = elem.getAttribute("href");
    var linkId = hastag.substring(1);
    if (linkId == current) {
      elem.classList.add("nav-link-active");
    }
  });
};

// document.querySelectorAll('header a').forEach(anchor => {
//   anchor.addEventListener('click', function (e) {
//       e.preventDefault();

//       document.querySelector(this.getAttribute('href')).scrollIntoView();
//   });
// });