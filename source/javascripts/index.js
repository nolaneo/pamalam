document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".details__thumbnail").forEach(thumbnail => {
    thumbnail.addEventListener("click", e => {
      document.querySelector(".details__main-image").style.backgroundImage =
        e.target.style.backgroundImage;
    });
  });
});
