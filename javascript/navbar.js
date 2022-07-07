window.addEventListener("scroll", (event) => {
  // Get the navbar
  var navbar = document.querySelector(".navbar-container");

  // Get the offset position of the navbar
  var sticky = navbar.offsetTop;

  // Call the function
  myStickyFunction(sticky, navbar);
});

function myStickyFunction(sticky, navbar) {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
