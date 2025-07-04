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

// Select the scroll container element
const slider = document.querySelector(".pet-scroll-container");

// These variables will keep track of the scroll state
let isDown = false; // Is the mouse currently pressed down?
let startX; // Mouse X position when drag started
let scrollLeft; // Scroll position when drag started

// When mouse button is pressed down over the slider
slider.addEventListener("mousedown", (e) => {
  isDown = true; // Mark that dragging has started
  slider.classList.add("active"); // Optional: add CSS class for styling while dragging
  startX = e.pageX - slider.offsetLeft; // Calculate mouse X relative to slider
  scrollLeft = slider.scrollLeft; // Remember current scroll position
});

// When the mouse leaves the slider area, stop dragging
slider.addEventListener("mouseleave", () => {
  isDown = false; // Dragging stopped
  slider.classList.remove("active"); // Remove optional active class
});

// When mouse button is released, stop dragging
slider.addEventListener("mouseup", () => {
  isDown = false; // Dragging stopped
  slider.classList.remove("active"); // Remove optional active class
});

// When the mouse moves, if we're in dragging mode, scroll the slider
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return; // If mouse is not pressed, do nothing
  e.preventDefault(); // Prevent text selection while dragging
  const x = e.pageX - slider.offsetLeft; // Current mouse X relative to slider
  const walk = (x - startX) * 2; // Amount to scroll; multiplier controls speed
  slider.scrollLeft = scrollLeft - walk; // Update scroll position
});
