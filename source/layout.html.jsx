export default (props) => {
  return (
    <html>
      <head>
        <title>{props.title}</title>
        <title>PAMALAM | New Collection</title>
        <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet"></link>
        <meta name="google-site-verification" content="Y6dm8MPTD0FD9GRHaSmo2F2_frqVtL4sr8Tj42umD5o" />
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,300,400,400i,700" rel="stylesheet"></link>
        <link href="/stylesheets/index.css" rel="stylesheet"></link>
      </head>

      <body>
        <div class="main-nav-title dark-text">
          <a class="t__link dark-text" href="/">PAMALAM</a>
        </div>
        {props.children}
      </body>
    </html>
  )
}