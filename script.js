document.getElementById("volunteerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  document.getElementById("formMessage").textContent =
    "Thank you for joining A. Rashid Foundation. We will contact you soon.";

  this.reset();
});
