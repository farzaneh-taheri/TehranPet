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

// Drag-to-Scroll برای doctor-cards
// انتخاب کانتینر دکترها
const doctorCardsContainer = document.querySelector(".doctor-cards");

// این متغیرها وضعیت اسکرول رو نگه می‌دارند
let isDown = false; // وقتی موس پایین هست
let startX; // موقعیت اولیه موس
let scrollLeft; // موقعیت اسکرول در لحظه شروع

// برای دسکتاپ: وقتی موس پایین می‌آید، قابلیت دراگ فعال می‌شود
doctorCardsContainer.addEventListener("mousedown", (e) => {
  isDown = true;
  doctorCardsContainer.classList.add("active");
  startX = e.pageX - doctorCardsContainer.offsetLeft;
  scrollLeft = doctorCardsContainer.scrollLeft;
});

// برای موبایل: وقتی لمس شروع می‌شود، قابلیت دراگ فعال می‌شود
doctorCardsContainer.addEventListener("touchstart", (e) => {
  isDown = true;
  doctorCardsContainer.classList.add("active");
  startX = e.touches[0].pageX - doctorCardsContainer.offsetLeft; // استفاده از touch برای موبایل
  scrollLeft = doctorCardsContainer.scrollLeft;
});

// وقتی موس از کانتینر خارج می‌شود یا لمس تمام می‌شود، دراگ متوقف می‌شود
doctorCardsContainer.addEventListener("mouseleave", () => {
  isDown = false;
  doctorCardsContainer.classList.remove("active");
});

doctorCardsContainer.addEventListener("touchend", () => {
  isDown = false;
  doctorCardsContainer.classList.remove("active");
});

// وقتی موس بالا می‌رود یا حرکت لمسی تمام می‌شود
doctorCardsContainer.addEventListener("mouseup", () => {
  isDown = false;
  doctorCardsContainer.classList.remove("active");
});

// وقتی موس حرکت می‌کند یا لمس ادامه می‌یابد، اسکرول افقی انجام می‌شود
doctorCardsContainer.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - doctorCardsContainer.offsetLeft;
  const walk = (x - startX) * 2;
  doctorCardsContainer.scrollLeft = scrollLeft - walk;
});

// برای موبایل: وقتی حرکت لمس ادامه می‌یابد، اسکرول افقی انجام می‌شود
doctorCardsContainer.addEventListener("touchmove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.touches[0].pageX - doctorCardsContainer.offsetLeft; // استفاده از touch برای موبایل
  const walk = (x - startX) * 2;
  doctorCardsContainer.scrollLeft = scrollLeft - walk;
});
