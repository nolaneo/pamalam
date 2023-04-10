(function () {
  'use strict';

  document.addEventListener("scroll", function () {
    if (!window.showingIntercom) {
      window.showingIntercom = true;
      setTimeout(function () {
        Intercom("update", {
          hide_default_launcher: false
        });
      }, 500);
    }
  });
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".chat-with-us").addEventListener("click", function () {
      Intercom("showNewMessage");
    });
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
    function loadScript() {
      console.log("Script should be here");
    }
    function ShopifyBuyInit() {
      var client = ShopifyBuy.buildClient({
        domain: "pamalamstudio.myshopify.com",
        storefrontAccessToken: "9dd1ea25a2614fb14cd14f48543d4846"
      });
      console.log("Created shopify client");
      var shopifyUI = ShopifyBuy.UI.init(client);
      var buyButtons = Array.from(document.querySelectorAll(".order-now-button"));
      if (buyButtons) {
        buyButtons.forEach(function (buyButton) {
          console.log("Attempting to create shopify component for ", buyButton.getAttribute("data-shopify-id"));
          shopifyUI.createComponent("product", {
            id: buyButton.getAttribute("data-shopify-id"),
            moneyFormat: "%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D",
            node: buyButton,
            options: {
              product: {
                variantId: "all",
                iframe: false,
                contents: {
                  img: false,
                  imgWithCarousel: false,
                  title: false,
                  variantTitle: false,
                  price: false,
                  description: false,
                  buttonWithQuantity: false,
                  quantity: false
                }
              },
              cart: {
                contents: {
                  button: true
                },
                styles: {
                  button: {
                    "background-color": "#f1c40f",
                    ":hover": {
                      "background-color": "#d9b00e"
                    },
                    "border-radius": "2px",
                    ":focus": {
                      "background-color": "#d9b00e"
                    }
                  },
                  footer: {
                    "background-color": "#ffffff"
                  }
                }
              },
              toggle: {
                styles: {
                  toggle: {
                    "background-color": "#f1c40f",
                    ":hover": {
                      "background-color": "#d9b00e"
                    },
                    ":focus": {
                      "background-color": "#d9b00e"
                    }
                  },
                  count: {
                    "font-size": "16px"
                  }
                }
              },
              productSet: {
                styles: {
                  products: {
                    "@media (min-width: 601px)": {
                      "margin-left": "-20px"
                    }
                  }
                }
              }
            }
          });
        });
      }
    }
    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }
  });
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "UA-141344238-1");
  window.intercomSettings = {
    app_id: "ec3q1hf4",
    hide_default_launcher: true
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

})();
