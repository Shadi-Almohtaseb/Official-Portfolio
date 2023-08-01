const cards = document.querySelectorAll(".card2");
const imageCards = document.querySelectorAll(".boxIMG");
const navbar = document.getElementById("navbar");
const checkbox = document.getElementById("checkbox");
const header = document.querySelector(".header");
const navLinks = document.querySelectorAll(".nav-link");
const homeLink = document.querySelector(".nav-link");
// Function to remove 'maximize' class from all cards
function removeAllMaximize() {
  cards.forEach((card, index) => {
    card.classList.remove("maximize");
    imageCards[index].classList.remove("maximize");
    const showDetailsBtn = card.querySelector(".show-details-btn");
    if (showDetailsBtn) showDetailsBtn.classList.remove("none");
    const cardIcons = card.querySelector(".card-icons");
    if (cardIcons) cardIcons.classList.remove("flex");
  });
}
// Attach click event listener to each navigation item
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.toggle("clicked");
    navbar.classList.toggle("unClicked");
    checkbox.checked = false;
  });
});
// handle clicks outside cards
document.addEventListener("click", (event) => {
  const clickedElement = event.target;
  if (!clickedElement.closest(".card2") && !clickedElement.closest(".boxIMG")) {
    removeAllMaximize();
  }
});
// Expand the card when clicked
cards.forEach((card, index) => {
  card.addEventListener("click", (event) => {
    event.stopPropagation();
    const isMaximized = card.classList.contains("maximize");
    removeAllMaximize();
    if (!isMaximized) {
      card.classList.add("maximize");
      imageCards[index].classList.add("maximize");
      const showDetailsBtn = card.querySelector(".show-details-btn");
      if (showDetailsBtn) showDetailsBtn.classList.add("none");
      const cardIcons = card.querySelector(".card-icons");
      if (cardIcons) cardIcons.classList.add("flex");
    }
  });
});
// toggle the menu
navbar.classList.add("unClicked");
checkbox.addEventListener("click", () => {
  navbar.classList.toggle("unClicked");
  navbar.classList.toggle("clicked");
  header.classList.toggle("bg-blur", navbar.classList.contains("clicked"));
});
// activate the licks when scroll
document.addEventListener("DOMContentLoaded", function () {
  const navBarHeight = navbar.offsetHeight;
  const offset = navBarHeight + 10;
  const homeLink = document.querySelector(".nav-link[href='#home']");
  window.addEventListener("scroll", function () {
    const scrollDistance = window.scrollY;
    const sections = document.querySelectorAll("section");
    if (scrollDistance < 700) {
      navLinks.forEach(function (link) {
        link.classList.remove("active");
      });
      homeLink.classList.add("active");
    } else homeLink.classList.remove("active");
    sections.forEach(function (section) {
      const sectionTop =
        section.getBoundingClientRect().top + window.pageYOffset;
      const sectionBottom = sectionTop + section.offsetHeight;
      const sectionId = section.getAttribute("id");
      const correspondingLink = document.querySelector(
        `.nav-link[href="#${sectionId}"]`
      );
      if (
        scrollDistance >= sectionTop - offset &&
        scrollDistance < sectionBottom - offset
      ) {
        navLinks.forEach(function (link) {
          link.classList.remove("active");
        });
        correspondingLink.classList.add("active");
      }
    });
  });
});
