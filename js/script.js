// Hamburger Menu
let menu = document.getElementById("menu");
let navbar = document.getElementById("navbar");
let closeBtn = document.getElementById("closeMenu");

menu.addEventListener("click", () => {
  navbar.classList.add("active");
});
closeBtn.addEventListener("click", () => {
  navbar.classList.remove("active");
});

// Changing navbar baground on Scroll


window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    navbar.classList.add("isScrolled");

  } else {
    navbar.classList.remove("isScrolled");
  }
});

//Scroll to top button
let scrollToTop = document.querySelector(".scrollToTop");
window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    scrollToTop.classList.add("isScrolled");
  } else {
    scrollToTop.classList.remove("isScrolled");
  }
});

// Next Slide Function
let slides = document.querySelectorAll(".slide");
let index = 0;

function next() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

function prev() {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
}

setInterval(next, 5000);

// Counter Script
const counters = document.querySelectorAll(".counter");
const speed = 200;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    const inc = target / speed;
    if (count < target) {
      counter.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 1);
    } else {
      count.innerText = target;
    }
  };

  window.addEventListener("scroll", function () {
    if (window.scrollY > 2350) {
      updateCount();
    }
  });
});

// Swiper Js Link
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: false,
  grabCursor: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1500: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 2,
    },
    500: {
      slidesPerView: 1,
    },
    300: {
      slidesPerView: 1,
    },
  },
});

// Our Work Section

const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

const images = document.querySelectorAll(".project__img");
images.forEach((image) => {
  image.addEventListener("click", (e) => {
    lightbox.classList.add("active");
    const img = document.createElement("img");
    img.src = image.src;
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.appendChild(img);
  });
});

lightbox.addEventListener("click", (e) => {
  if (e.target !== e.currentTarget) return;
  lightbox.classList.remove("active");
});
