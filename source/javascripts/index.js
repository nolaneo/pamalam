document.addEventListener("scroll", () => {
  if (!window.showingIntercom) {
    window.showingIntercom = true;
    setTimeout(function() {
      Intercom("update", {
        hide_default_launcher: false
      });
    }, 500);
  }
});

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".chat-with-us").addEventListener("click", function() {
    Intercom("showNewMessage");
  });

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

  let client = ShopifyBuy.buildClient({
    domain: "pamalamstudio.myshopify.com",
    storefrontAccessToken: "9dd1ea25a2614fb14cd14f48543d4846"
  });
  let shopifyUI = ShopifyBuy.UI.init(client);

  let buyButton = document.querySelector(".order-now-button");
  if (buyButton) {
    shopifyUI.createComponent("product", {
      id: 3883821269070,
      node: buyButton,
      options: {
        product: {
          variantId: "all",
          contents: {
            img: false,
            imgWithCarousel: false,
            title: false,
            variantTitle: false,
            price: false,
            description: false,
            buttonWithQuantity: false,
            quantity: false
          },
          styles: {
            button: {
              "font-weight": 700,
              cursor: "pointer",
              "border-radius": "2px",
              width: "300px",
              height: "50px",
              "font-size": "14px",
              "text-transform": "uppercase",
              background: "#f1c40f",
              color: "white",
              outline: "none",
              "text-decoration": "none",
              ":hover": {
                background: "#f4d03f"
              },
              "@media (max-device-width: 667px)": {
                "font-weight": "500",
                cursor: "pointer",
                "border-radius": "3px",
                width: "100%",
                height: "3rem",
                "font-size": "1rem",
                "text-transform": "uppercase",
                background: "#f1c40f",
                color: "white",
                "text-decoration": "none"
              }
            },
            title: {
              "font-size": "26px"
            }
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

(function() {
  var w = window;
  var ic = w.Intercom;
  if (typeof ic === "function") {
    ic("reattach_activator");
    ic("update", w.intercomSettings);
  } else {
    var d = document;
    var i = function() {
      i.c(arguments);
    };
    i.q = [];
    i.c = function(args) {
      i.q.push(args);
    };
    w.Intercom = i;
    var l = function() {
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
