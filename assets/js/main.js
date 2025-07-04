// Drag-to-Scroll برای pet-scroll-container
const petScrollContainer = document.querySelector(".pet-scroll-container");

if (petScrollContainer) {
  let isDownPet = false;
  let startXPet;
  let scrollLeftPet;

  petScrollContainer.addEventListener("mousedown", (e) => {
    isDownPet = true;
    petScrollContainer.classList.add("active");
    startXPet = e.pageX - petScrollContainer.offsetLeft;
    scrollLeftPet = petScrollContainer.scrollLeft;
  });

  petScrollContainer.addEventListener("mouseleave", () => {
    isDownPet = false;
    petScrollContainer.classList.remove("active");
  });

  petScrollContainer.addEventListener("mouseup", () => {
    isDownPet = false;
    petScrollContainer.classList.remove("active");
  });

  petScrollContainer.addEventListener("mousemove", (e) => {
    if (!isDownPet) return;
    e.preventDefault();
    const x = e.pageX - petScrollContainer.offsetLeft;
    const walk = (x - startXPet) * 2;
    petScrollContainer.scrollLeft = scrollLeftPet - walk;
  });
}

// Drag-to-Scroll برای product-list
const productList = document.querySelector(".product-list");

if (productList) {
  let isDownProduct = false;
  let startXProduct;
  let scrollLeftProduct;

  productList.addEventListener("mousedown", (e) => {
    isDownProduct = true;
    productList.classList.add("active");
    startXProduct = e.pageX - productList.offsetLeft;
    scrollLeftProduct = productList.scrollLeft;
  });

  productList.addEventListener("mouseleave", () => {
    isDownProduct = false;
    productList.classList.remove("active");
  });

  productList.addEventListener("mouseup", () => {
    isDownProduct = false;
    productList.classList.remove("active");
  });

  productList.addEventListener("mousemove", (e) => {
    if (!isDownProduct) return;
    e.preventDefault();
    const x = e.pageX - productList.offsetLeft;
    const walk = (x - startXProduct) * 2;
    productList.scrollLeft = scrollLeftProduct - walk;
  });
}

// تب‌ها
const tabs = document.querySelectorAll(".vet-tabs .tab");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
  });
});

// Drag-to-Scroll برای vet-card-list
const slider = document.querySelector(".vet-cards");

if (slider) {
  let isDownSlider = false;
  let startXSlider;
  let scrollLeftSlider;

  slider.addEventListener("mousedown", (e) => {
    isDownSlider = true;
    slider.classList.add("active");
    startXSlider = e.pageX - slider.offsetLeft;
    scrollLeftSlider = slider.scrollLeft;
  });
  slider.addEventListener("mouseleave", () => {
    isDownSlider = false;
    slider.classList.remove("active");
  });
  slider.addEventListener("mouseup", () => {
    isDownSlider = false;
    slider.classList.remove("active");
  });
  slider.addEventListener("mousemove", (e) => {
    if (!isDownSlider) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startXSlider) * 2;
    slider.scrollLeft = scrollLeftSlider - walk;
  });
}
