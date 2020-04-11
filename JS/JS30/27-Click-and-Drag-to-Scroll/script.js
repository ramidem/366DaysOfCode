const slider = document.querySelector(".items");
let isDown = false; // is mouse down?
let startX; // get anchor where mouse was clicked down
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");

  // get anchor where mouse was clicked down
  startX = e.pageX - slider.offsetLeft;

  // get initial scroll
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mousemove", (e) => {
  e.preventDefault();

  // only work if mouse is down
  if (!isDown) return;

  // get mouse move loacation - x
  const x = e.pageX - slider.offsetLeft;

  // how far from last location
  const walk = x - startX;

  slider.scrollLeft = scrollLeft - walk;
});
