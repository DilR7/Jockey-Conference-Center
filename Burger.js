const hamburger = document.querySelector(".hamburger");
const linkRight = document.querySelector(".link-right");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  linkRight.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    linkRight.classList.remove("active");
  })
);
