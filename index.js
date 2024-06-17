/*================================ Toggle Icon Navbar =====================*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/*================================ Scroll Sections Active link =====================*/
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
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /*================================ Sticky Navbar =====================*/
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  //  /*================================ Remove Toggle Icon And Navbar When Click Navbar Link ( Scroll ) =====================*/
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/*================================ Scroll Reveal =====================*/
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form,  .timeline-items",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .skill-left, .about-img", {
  origin: "left",
});
ScrollReveal().reveal(".home-content p, .skill-right, .about-content", {
  origin: "right",
});

/*================================ Typed JS =====================*/
const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Software Engineer", "Content Creator"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

/*================================ Circle Skill =====================*/
const circles = document.querySelectorAll(".circle");
circles.forEach((elem) => {
  var dots = elem.getAttribute("data-dots");
  var marked = elem.getAttribute("data-percent");
  var percent = Math.floor((dots * marked) / 100);
  var points = "";
  var rotate = 360 / dots;

  for (let i = 0; i < dots; i++) {
    points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
  }
  elem.innerHTML = points;

  const pointsMarked = elem.querySelectorAll(".points");
  for (let i = 0; i < percent; i++) {
    pointsMarked[i].classList.add("marked");
  }
});

/*================================ For Skills Left Section Animation Reset =====================*/
document.addEventListener("DOMContentLoaded", function () {
  const observerOptions = {
    threshold: 0.1,
  };

  const skillBars = document.querySelectorAll(".skill-bar .bar span ");
  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = "none";
        entry.target.offsetHeight;
        entry.target.style.animation = null;
      }
    });
  }, observerOptions);

  skillBars.forEach((bar) => {
    observer.observe(bar);
  });
});

/*================================ Activate Light & Dark Mode ~ Toggle Icon =====================*/
// const themeToggle = document.getElementById("theme-toggle");
// const root = document.documentElement;

// themeToggle.addEventListener("click", function () {
//   root.classList.toggle("dark-mode");
// });

const toggleIcon = document.querySelector(".toggle-icon");

toggleIcon.addEventListener("click", () => {
  toggleIcon.classList.toggle("bx-sun");
});
