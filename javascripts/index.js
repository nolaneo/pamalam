(function () {
  'use strict';

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".details__thumbnail").forEach(function (thumbnail) {
      thumbnail.addEventListener("click", function (e) {
        document.querySelector(".details__main-image").style.backgroundImage = e.target.style.backgroundImage;
      });
    });
  });

}());
