let slideIndex = 0;
let timer = null;

showSlides();

function nextSlide() {
  clearInterval(timer); 
  slideIndex++;
  showSlides();
  timer = setInterval(nextSlide, 4000); 
}

function prevSlide() {
  clearInterval(timer);
  slideIndex--;
  showSlides();
  timer = setInterval(nextSlide, 4000); 
}

function currentSlide(n) {
  clearInterval(timer);
  slideIndex = n - 1;
  showSlides();
  timer = setInterval(nextSlide, 4000); 
}

function showSlides() {
  let slides = document.querySelectorAll(".mySlides");
  let dots = document.querySelectorAll(".dots");

  if (slideIndex >= slides.length) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;

  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  slides[slideIndex].style.display = "block";

  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  dots[slideIndex].classList.add("active");
}

timer = setInterval(nextSlide, 4000);


function updateCountdown() {
  var countDownDate = new Date("July 16, 2023 00:00:00").getTime();
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }
}

var x = setInterval(updateCountdown, 1000);


