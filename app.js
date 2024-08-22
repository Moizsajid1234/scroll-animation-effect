let layerEl = document.querySelector(".layer");
window.addEventListener("scroll", function () {
  let value = window.scrollY;
  layerEl.style.left = value * 2 + "px";
});
