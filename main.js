// ************WARNING****************
// 1. camel case preffered

// 2. Undeclared Variables:
// Issue: The checker flags document, window, console, and localStorage as undeclared. These are global objects in the browser environment, but the checker may not always recognize them implicitly.
// Solution:
// If you're using a strict mode environment, you might need to explicitly declare them (e.g., const { document } = window;). However, this is generally not necessary in most browser contexts.

// 3. Line Length:
// Issue: The checker warns about a line exceeding 80 characters.
// Solution:
// Break the long line

// ************END****************


//*******************DARK MODE************************ 
// reaching the element and storing
const darkModeToggleBtn = document.getElementById("dark-mode-toggle");

// adding addEventListener
darkModeToggleBtn.addEventListener("click", darkModeToggle);

// functions
function darkModeToggle() {
  let currentBg =
    window.getComputedStyle(document.body).backgroundColor;
  //window's getComputedStyle method
  if (currentBg === "rgba(0, 0, 0, 0)") {
    document.body.classList.toggle("dark-mode");
  }
}

// *************************************************