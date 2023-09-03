/* responsiv nav*/
let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('open');
}
/*=asda==*/

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};


/*SCROLL */
document.addEventListener("DOMContentLoaded", function () {
  var prevScrollPos = window.scrollY;

  window.addEventListener("scroll", function () {
    var currentScrollPos = window.scrollY;

    if (prevScrollPos > currentScrollPos) {
      // Scrolling up
      document.querySelector("header").classList.remove("hidden");
    } else {
      // Scrolling down
      document.querySelector("header").classList.add("hidden");
    }

    prevScrollPos = currentScrollPos;
  });
});


ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(".home-img", { origin: "bottom" });
