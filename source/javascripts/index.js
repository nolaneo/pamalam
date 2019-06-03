document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".details__thumbnail").forEach(thumbnail => {
    thumbnail.addEventListener("click", e => {
      document.querySelector(".details__main-image").style.backgroundImage =
        e.target.style.backgroundImage;
    });
  });
  if (document.querySelector(".swiper-container")) {
    new Swiper(".swiper-container", {
      direction: "horizontal",
      loop: true,
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
});
