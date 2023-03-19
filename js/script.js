document.documentElement.dataset.scroll = window.scrollY;

document.addEventListener(
  "scroll",
  () => {
    document.documentElement.dataset.scroll = window.scrollY;
  },
  { passive: true }
);

document.addEventListener("touchstart", () => {}, { passive: true });

document.getElementById("close-button").addEventListener("click", () => {
  document.getElementById("news-banner").classList.add("hide-banner");
  let cardsContainer = document.getElementsByClassName(
    "cards-container-with-banner"
  );

  if (cardsContainer && cardsContainer[0]) {
    cardsContainer[0].classList.remove("cards-container-with-banner");
  }
});
