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
