// Function to open a specific tab
function opentab(event, tabname) {
  // Select all tab links and contents
  var tablinks = document.querySelectorAll(".tab-links");
  var tabcontents = document.querySelectorAll(".tab-contents");

  // Remove active class from all tabs and contents
  tablinks.forEach((link) => link.classList.remove("active-link"));
  tabcontents.forEach((content) => content.classList.remove("active-tab"));

  // Add active class to the clicked tab and corresponding content
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// Function to toggle the navigation menu
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  const menuButton = document.getElementById("menuButton");
  const closeButton = document.getElementById("closeButton");

  // Toggle the 'active' class
  navLinks.classList.toggle("active");

  // Hide/show buttons based on menu state
  if (navLinks.classList.contains("active")) {
    menuButton.style.display = "none"; // Hide menu button
    closeButton.style.display = "block"; // Show close button
  } else {
    menuButton.style.display = "block"; // Show menu button
    closeButton.style.display = "none"; // Hide close button
  }
}

// Event listeners for menu button and close button
document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menuButton");
  const closeButton = document.getElementById("closeButton");

  // Toggle menu when the menu button is clicked
  menuButton.addEventListener("click", toggleMenu);

  // Toggle menu when the close button is clicked
  closeButton.addEventListener("click", toggleMenu);
});

// contact form google sheet

const scriptURL =
  "https://script.google.com/macros/s/AKfycbzKuIXhd7h69CAmRUKISLYV-QRIlj4SWFfhYg3NOKMHR0BypvdNrhvDtrGZe5WkFVWnnw/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Submitting form...");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});

// Scroll to Top Button
const scrollTopButton = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollTopButton.classList.add("visible");
  } else {
    scrollTopButton.classList.remove("visible");
  }
});

scrollTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
