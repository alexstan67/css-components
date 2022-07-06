// Add a listener on dropdown buttons
const buttons = document.querySelectorAll(".dropbtn")
buttons.forEach((link) => {
  link.addEventListener("click", (event) => {
    if (link.nextElementSibling.classList.contains("show")) {
      link.nextElementSibling.classList.toggle("show")
    }
    else
    {
      reset(buttons)
      link.nextElementSibling.classList.toggle("show")
    }
  })
})

// When clicked on link, we hide again the menu list
const links = document.querySelectorAll(".dropdown-content")
links.forEach((link) => {
  link.addEventListener("click", (event) => {
    link.classList.toggle("show")
  })
})

// Function to avoid showing simultaneously menu lists, so we reset before
function reset(buttons) {
  buttons.forEach((button) => {
    button.nextElementSibling.classList.remove("show")
  })
}
