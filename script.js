// Custom Cursor
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// Skill animation on scroll
const progresses = document.querySelectorAll(".progress");

window.addEventListener("scroll", () => {
  progresses.forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      bar.style.width = bar.dataset.width;
    }
  });
});

// Magnetic Button
document.querySelectorAll(".magnetic").forEach(btn => {
  btn.addEventListener("mousemove", e => {
    const rect = btn.getBoundingClientRect();
    btn.style.transform = `translate(
      ${(e.clientX - rect.left - rect.width/2) * 0.2}px,
      ${(e.clientY - rect.top - rect.height/2) * 0.2}px
    )`;
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translate(0,0)";
  });
});
