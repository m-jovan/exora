document.documentElement.dataset.scroll = window.scrollY;

document.addEventListener("scroll", () => {
  document.documentElement.dataset.scroll = window.scrollY;
});
