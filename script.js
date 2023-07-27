const cards = document.querySelectorAll(".card2");
const imageCards = document.querySelectorAll(".boxIMG");
const navbar = document.getElementById("navbar");
const checkbox = document.getElementById("checkbox");
const header = document.querySelector(".header");
const navLinks = document.querySelectorAll(".nav-link");
const homeLink = document.querySelector(".nav-link");
function removeAllMaximize() {
  cards.forEach((card, index) => {
    card.classList.remove("maximize"); // Function to remove 'maximize' class from all cards
    imageCards[index].classList.remove("maximize");
    const showDetailsBtn = card.querySelector(".show-details-btn");
    if (showDetailsBtn) showDetailsBtn.classList.remove("none");
    const cardIcons = card.querySelector(".card-icons");
    if (cardIcons) cardIcons.classList.remove("flex");
  });
}
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.toggle("clicked"); // Attach click event listener to each navigation item
    navbar.classList.toggle("unClicked");
    checkbox.checked = false;
  });
});
document.addEventListener("click", (event) => {
  const clickedElement = event.target; // handle clicks outside cards
  if (!clickedElement.closest(".card2") && !clickedElement.closest(".boxIMG")) {
    removeAllMaximize();
  }
});
cards.forEach((card, index) => {
  card.addEventListener("click", (event) => {
    event.stopPropagation(); // Expand the card when clicked
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
navbar.classList.add("unClicked"); // toggle the menu
checkbox.addEventListener("click", () => {
  navbar.classList.toggle("unClicked");
  navbar.classList.toggle("clicked");
  header.classList.toggle("bg-blur", navbar.classList.contains("clicked"));
});
document.addEventListener("DOMContentLoaded", function () {
  const navBarHeight = navbar.offsetHeight; // activate the licks when scroll
  const offset = navBarHeight + 10;
  const homeLink = document.querySelector(".nav-link[href='#home']");
  window.addEventListener("scroll", function () {
    const scrollDistance = window.scrollY;
    const sections = document.querySelectorAll("section");
    if (scrollDistance < 700) homeLink.classList.add("active");
    else homeLink.classList.remove("active");
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
      if (scrollDistance < 700) link.classList.remove("active");
    });
  });
});
