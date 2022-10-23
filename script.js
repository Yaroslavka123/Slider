const slids = document.querySelectorAll(".slide");
const container = document.querySelector(".container");
container.addEventListener("click", (event) => {
  if (event.target.tagName === "H3") {
    return;
  }
  removeClass();
  event.target.classList.add("active");
});
function removeClass() {
  slids.forEach((slide) => {
    slide.classList.remove("active");
  });
}
