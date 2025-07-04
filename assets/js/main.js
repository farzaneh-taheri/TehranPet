/*
 * 🔄 Drag-to-Scroll for Pet Product Categories Section
 * This script adds click-and-drag horizontal scrolling to the
 * .pet-scroll-container element, which contains the horizontal list
 * of pet product category images.
 *
 * Users can:
 * - On mobile: scroll by swiping naturally.
 * - On desktop: click and drag to scroll left/right.
 *
 * Improves UX by hiding the scrollbar and enabling smooth navigation.
 */

// Select the first scroll container element for pet categories
const petScrollContainer = document.querySelector(".pet-scroll-container");

// These variables will keep track of the scroll state
let isDown = false; // Is the mouse currently pressed down?
let startX; // Mouse X position when drag started
let scrollLeft; // Scroll position when drag started

// When mouse button is pressed down over the slider
petScrollContainer.addEventListener("mousedown", (e) => {
  isDown = true; // Mark that dragging has started
  petScrollContainer.classList.add("active"); // Optional: add CSS class for styling while dragging
  startX = e.pageX - petScrollContainer.offsetLeft; // Calculate mouse X relative to slider
  scrollLeft = petScrollContainer.scrollLeft; // Remember current scroll position
});

// When the mouse leaves the slider area, stop dragging
petScrollContainer.addEventListener("mouseleave", () => {
  isDown = false; // Dragging stopped
  petScrollContainer.classList.remove("active"); // Remove optional active class
});

// When mouse button is released, stop dragging
petScrollContainer.addEventListener("mouseup", () => {
  isDown = false; // Dragging stopped
  petScrollContainer.classList.remove("active"); // Remove optional active class
});

// When the mouse moves, if we're in dragging mode, scroll the slider
petScrollContainer.addEventListener("mousemove", (e) => {
  if (!isDown) return; // If mouse is not pressed, do nothing
  e.preventDefault(); // Prevent text selection while dragging
  const x = e.pageX - petScrollContainer.offsetLeft; // Current mouse X relative to slider
  const walk = (x - startX) * 2; // Amount to scroll; multiplier controls speed
  petScrollContainer.scrollLeft = scrollLeft - walk; // Update scroll position
});

// Select the second scroll container element for product list
const productList = document.querySelector(".product-list");

// Initialize flags and variables for the drag action
let isDownProductList = false; // Track if the mouse is pressed down
let startXProductList; // Store the starting position of the mouse (horizontal axis)
let scrollLeftProductList; // Store the current scroll position of the list

// When the mouse is pressed down, enable the drag feature for product list
productList.addEventListener("mousedown", (e) => {
  isDownProductList = true; // Mark the dragging state as active
  productList.classList.add("active"); // Optional: add a class for active state (for styling)

  // Capture the initial mouse position relative to the container
  startXProductList = e.pageX - productList.offsetLeft;
  scrollLeftProductList = productList.scrollLeft; // Store the initial scroll position
});

// When the mouse leaves the product list, disable the drag feature
productList.addEventListener("mouseleave", () => {
  isDownProductList = false; // Mark dragging state as inactive
  productList.classList.remove("active"); // Remove active class when dragging stops
});

// When the mouse button is released, stop the drag action for product list
productList.addEventListener("mouseup", () => {
  isDownProductList = false; // Mark dragging state as inactive
  productList.classList.remove("active"); // Remove active class when dragging stops
});

// When the mouse is moved, adjust the scroll position based on the mouse movement for product list
productList.addEventListener("mousemove", (e) => {
  // If the mouse is not pressed, do nothing
  if (!isDownProductList) return;

  e.preventDefault(); // Prevent default behavior (like text selection) during drag

  // Calculate the movement of the mouse horizontally
  const x = e.pageX - productList.offsetLeft;

  // Determine how far to scroll based on mouse movement (multiplied for speed control)
  const walk = (x - startXProductList) * 2;

  // Update the scroll position of the product list container
  productList.scrollLeft = scrollLeftProductList - walk;
});
