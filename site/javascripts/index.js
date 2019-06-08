(function () {
  'use strict';

  // document.addEventListener("scroll", () => {
  //   if (!window.showingIntercom) {
  //     window.showingIntercom = true;
  //     setTimeout(function() {
  //       Intercom("update", {
  //         hide_default_launcher: false
  //       });
  //     }, 500);
  //   }
  // });
  document.addEventListener("DOMContentLoaded", function () {
    // document.querySelector(".chat-with-us").addEventListener("click", function() {
    //   Intercom("showNewMessage");
    // });
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
  gtag("config", "UA-141344238-1"); // window.intercomSettings = {

  !function () {
    var t = window.driftt = window.drift = window.driftt || [];

    if (!t.init) {
      if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
      t.invoked = !0, t.methods = ["identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on"], t.factory = function (e) {
        return function () {
          var n = Array.prototype.slice.call(arguments);
          return n.unshift(e), t.push(n), t;
        };
      }, t.methods.forEach(function (e) {
        t[e] = t.factory(e);
      }), t.load = function (t) {
        var e = 3e5,
            n = Math.ceil(new Date() / e) * e,
            o = document.createElement("script");
        o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
        var i = document.getElementsByTagName("script")[0];
        i.parentNode.insertBefore(o, i);
      };
    }
  }();
  drift.on("ready", function (api) {
    api.widget.hide();
    document.addEventListener("scroll", function () {
      if (!window.showingDrift) {
        window.showingDrift = true;
        setTimeout(function () {
          api.widget.show();
        }, 500);
      }
    });
    document.querySelector(".chat-with-us").addEventListener("click", function () {
      api.sidebar.open();
    });
  });
  drift.SNIPPET_VERSION = "0.3.1";
  drift.load("62n6fp4hvuex");
  drift.config({
    enableWelcomeMessage: false
  });

}());
