const cards = document.querySelectorAll(".card2");
const imageCards = document.querySelectorAll(".boxIMG");
const navbar = document.getElementById("navbar");
const checkbox = document.getElementById("checkbox");
const header = document.querySelector(".header");
// toggle the card when click out side
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
// expand the card when click
cards.forEach((card, index) => {
  card.addEventListener("click", (event) => {
    event.stopPropagation();
    if (card.classList.contains("maximize")) {
      removeAllMaximize();
    } else {
      removeAllMaximize();
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
  const navLinks = document.querySelectorAll(".nav-link");
  const navbar = document.getElementById("navbar");
  const navBarHeight = navbar.offsetHeight;
  const offset = navBarHeight + 10;
  window.addEventListener("scroll", function () {
    const scrollDistance = window.scrollY;
    document.querySelectorAll("section").forEach(function (section) {
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
