(function () {
  'use strict';

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".details__thumbnail").forEach(function (thumbnail) {
      thumbnail.addEventListener("click", function (e) {
        document.querySelector(".details__main-image").style.backgroundImage = e.target.style.backgroundImage;
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
  window.dataLayer = window.dataLayer || [];

  function gtag() {
    dataLayer.push(arguments);
  }

  gtag("js", new Date());
  gtag("config", "UA-141344238-1");
  window.intercomSettings = {
    app_id: "ec3q1hf4"
  };

  (function () {
    var w = window;
    var ic = w.Intercom;

    if (typeof ic === "function") {
      ic("reattach_activator");
      ic("update", w.intercomSettings);
    } else {
      var d = document;

      var i = function i() {
        i.c(arguments);
      };

      i.q = [];

      i.c = function (args) {
        i.q.push(args);
      };

      w.Intercom = i;

      var l = function l() {
        var s = d.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://widget.intercom.io/widget/ec3q1hf4";
        var x = d.getElementsByTagName("script")[0];
        x.parentNode.insertBefore(s, x);
      };

      if (w.attachEvent) {
        w.attachEvent("onload", l);
      } else {
        w.addEventListener("load", l, false);
      }
    }
  })();

}());
