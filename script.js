// LOADER

window.addEventListener("load", () => {

  const loader =
  document.getElementById("loader");

  loader.style.opacity = "0";

  setTimeout(() => {

    loader.style.display = "none";

  }, 700);

});

// FADE SECTION

const fadeSections =
document.querySelectorAll(".fade-section");

const revealSection = () => {

  fadeSections.forEach(section => {

    const top =
    section.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){

      section.classList.add("show");

    }

  });

};

window.addEventListener(
  "scroll",
  revealSection
);

revealSection();

// PARALLAX HERO

const hero =
document.querySelector(".hero");

window.addEventListener("scroll", () => {

  const scrollY =
  window.scrollY;

  hero.style.backgroundPositionY =
  `${scrollY * 0.5}px`;

});

// SLIDER DOT ACTIVE

const slider =
document.querySelector(".work-slider");

const dots =
document.querySelectorAll(".dot");

slider.addEventListener("scroll", () => {

  const scrollX =
  slider.scrollLeft;

  const cardWidth =
  document.querySelector(".work-card")
  .offsetWidth + 24;

  const activeIndex =
  Math.round(scrollX / cardWidth);

  dots.forEach(dot => {
    dot.classList.remove("active");
  });

  if(dots[activeIndex]){
    dots[activeIndex]
    .classList.add("active");
  }

});

// IMAGE LOADED

const images =
document.querySelectorAll("img");

images.forEach(img => {

  img.onload = () => {

    img.classList.add("loaded");

  };

});

