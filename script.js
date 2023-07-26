// card functionality
const cards = document.querySelectorAll(".card2");
const imageCards = document.querySelectorAll(".boxIMG");
document.addEventListener("click", (event) => {
  const clickedElement = event.target;
  if (
    !clickedElement.classList.contains("card2") &&
    !clickedElement.classList.contains("boxIMG")
  )
    removeAllMaximize();
});
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
cards.forEach((card, index) => {
  card.addEventListener("click", (event) => {
    event.stopPropagation();
    if (card.classList.contains("maximize")) {
      card.classList.remove("maximize");
      imageCards[index].classList.remove("maximize");
      const showDetailsBtn = card.querySelector(".show-details-btn");
      if (showDetailsBtn) showDetailsBtn.classList.remove("none");
      const cardIcons = card.querySelector(".card-icons");
      if (cardIcons) cardIcons.classList.remove("flex");
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
// activate the links
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
