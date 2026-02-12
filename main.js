// Smooth scrolling for navbar links
const buttons = document.querySelectorAll(".skill-btn");
const skillBoxes = document.querySelectorAll(".skills-box");

buttons.forEach(button => {
  button.addEventListener("click", () => {

    // Remove active from all buttons
    buttons.forEach(btn => btn.classList.remove("active"));

    // Hide all skill boxes
    skillBoxes.forEach(box => box.classList.remove("active"));

    // Add active to clicked button
    button.classList.add("active");

    // Show selected skill box
    const target = document.getElementById(button.dataset.target);
    target.classList.add("active");
  });
});

document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});
