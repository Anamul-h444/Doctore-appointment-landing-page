const mobileNav = document.querySelector(".mnav");
const closeBtn = document.querySelector(".mnav__close-btn");
const closeBtnIcn = document.querySelector(".mnav__close-btn-icon");

const navOpenedClass = "left-0";
const navClosedClass = "-left-[300px]";
const arrowLeftClass = "ri-arrow-left-s-line";
const arrowRightClass = "ri-arrow-right-s-line";

closeBtn.addEventListener("click", () => {
  mobileNav.classList.toggle(navOpenedClass);
  mobileNav.classList.toggle(navClosedClass);

  closeBtnIcn.classList.toggle(arrowLeftClass);
  closeBtnIcn.classList.toggle(arrowRightClass);
});

// Swiper
const swiper = new Swiper(".swiper", {
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//faq
const faqItems = document.querySelectorAll(".faq__item");

faqItems.forEach((item) => {
  const faqBtn = item.querySelector(".faq__btn");

  item.addEventListener("click", () => {
    const isOpen = item.classList.toggle("open");
    const iconClass = isOpen ? "ri-subtract-fill" : "ri-add-fill";
    const iconElement = faqBtn.querySelector("i");
    iconElement.classList = `${iconClass} text-2xl text-accent`;
  });
});

//scroll reveal animation
const sr = ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: 2000,
  delay: 300,
  //reset: true //resets animation
});

//hero
sr.reveal(".hero__text", { origin: "top" });
sr.reveal(".hero__img");

//stats
sr.reveal(".stats__item", {
  delay: 600,
  distance: "100px",
  interval: 100,
  origin: "top",
});

//services
sr.reveal(".services");
sr.reveal(".services__top");
sr.reveal(".services__item");

//appointment
sr.reveal(".appointment__title");
sr.reveal(".appointment__form");

//testimonials
sr.reveal(".testimonial");
sr.reveal(".testimonial__container");

//team
sr.reveal(".team__title");
sr.reveal(".team__slider");

//faw
sr.reveal(".faq__title");
sr.reveal(".faq__item");

//department
sr.reveal(".department__bg");
sr.reveal(".department__container");

//blog
sr.reveal(".blog__title");
sr.reveal(".blog__post");

//brands
sr.reveal(".brands__logo");

//newsletter
sr.reveal(".newsletter");
sr.reveal(".newsletter__container");

//footer
sr.reveal(".footer__item");
