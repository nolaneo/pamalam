export default props => {
  return (
    <html>
      <head>
        <title>{props.title}</title>
        <title>PAMALAM | New Collection</title>
        <meta
          name="viewport"
          content="initial-scale=1, width=device-width"
          class="next-head"
        />
        <link rel="icon" type="image/png" href="/assets/images/favicon.png" />

        <link
          href="https://fonts.googleapis.com/css?family=Raleway"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css"
        />
        <meta
          name="google-site-verification"
          content="Y6dm8MPTD0FD9GRHaSmo2F2_frqVtL4sr8Tj42umD5o"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Raleway:100,300,400,400i,700"
          rel="stylesheet"
        />
        <link href="/stylesheets/index.css" rel="stylesheet" />
        <script type="text/javascript" src="/javascripts/index.js" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/js/swiper.min.js" />
        <script src="http://sdks.shopifycdn.com/buy-button/0.9.1/buybutton.js" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-141344238-1"
        />
      </head>

      <body>
        <div class="main-nav-title dark-text">
          <a class="t__link dark-text" href="/">
            PAMALAM
          </a>
        </div>
        {props.children}
        <div class="layout__box footer o__centers-horizontally">
          <div class="layout__box footer-boxes">
            <div class="footer-item-container">
              <a class="footer-item" href="mailto:info@pamalam.com">
                info@pamalam.com
              </a>
            </div>
            <div class="footer-item-container">
              <a
                class="footer-item"
                href="https://instagram.com/pamalam_studio"
                target="_blank"
              >
                Follow us on Instagram
              </a>
            </div>
            <div class="footer-item-container">
              <a class="footer-item chat-with-us">Chat with us</a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};
