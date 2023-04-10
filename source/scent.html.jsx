import Layout from "./layout.html.jsx";

export default props => {
  let piece = props.data.pamalam.candles.find(
    piece => piece.path === props.path
  );
  piece.imagePath = piece.path.replace(/-/g, "_");
  let imageURLs = [];
  for (
    let i = 1;
    i <= piece.number_of_images && piece.number_of_images > 1;
    ++i
  ) {
    imageURLs.push(
      `/assets/images/scents/${piece.path}/${piece.imagePath}${i}.jpg`
    );
  }
  return (
    <Layout title={`Pamalam | ${piece.title}`}>
      <div className="desktop details__wrapper-container layout__box o__has-columns o__centers-horizontally">
        <div className="details__wrapper layout__box o__has-columns">
          <div className="details__thumbnail-gallery layout__box o__has-rows">
            {imageURLs.map(url => {
              return (
                <div
                  className="details__thumbnail"
                  style={{ "background-image": `url(${url})` }}
                />
              );
            })}
          </div>
          <div className="layout__box o__has-rows">
            <div
              className="details__main-image"
              style={{
                "background-image": `url(/assets/images/scents/${piece.path}/${
                  piece.imagePath
                }1.jpg)`
              }}
            />
          </div>
          <div className="details__information layout__box o__has-rows">
            <div className="details__title">{piece.title}</div>

            <div className="inner-details">
              {props.children}

              <p className="panel-price">{piece.price}</p>

              <div className="layout__box o__centers-all">
                <a
                  className="panel-order-now-button order-now-button layout__box o__centers-all"
                  data-shopify-id={piece.shopify_id}
                >
                  ADD TO CART
                </a>
              </div>

              <br />

              <div className="scent-small-font">
                <p>Why we only use coconut and rapeseed wax:</p>
                <ol>
                  <li>Environmental sustainability: Both coconut and rapeseed wax are more sustainable and eco-friendly than paraffin or soy wax. Coconut wax is made from the meat of coconuts, which are a renewable resource, while rapeseed wax is made from the oil of the rapeseed plant, which is a non-toxic and biodegradable crop.</li>
                  <li>Better scent throw: Coconut and rapeseed wax candles have a stronger scent throw than soy wax candles.</li>
                  <li>Longer burn time: Both coconut and rapeseed wax have a higher melting point than soy wax, they burn more slowly and last longer.</li>
                  <li>Cleaner burning: Coconut and rapeseed wax produce less soot than soy wax.</li>
                </ol>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="mobile">
        <div className="details__mobile-hero swiper-container">
          <div class="swiper-wrapper">
            {imageURLs.map(url => {
              return (
                <div
                  className="swiper-slide details__mobile-thumbnail"
                  style={{ "background-image": `url(${url})` }}
                />
              );
            })}
          </div>
          <div class="swiper-pagination" />
        </div>

        <div className="details__mobile-information layout__box o__has-rows">
          <div className="panel-spacer" />
          <div className="details__mobile-title">{piece.title}</div>
          <div className="panel-spacer" />

          {props.children}

          <p className="panel-price">{piece.price}</p>
          <br/>

          <div className="layout__box o__centers-all">
            <a
              className="panel-order-now-button order-now-button layout__box o__centers-all"
              data-shopify-id={piece.shopify_id}
            >
              ADD TO CART
            </a>
          </div>

          <br />

          <div className="scent-small-font">
            <p>Why we only use coconut and rapeseed wax:</p>
            <ol>
              <li>Environmental sustainability: Both coconut and rapeseed wax are more sustainable and eco-friendly than paraffin or soy wax. Coconut wax is made from the meat of coconuts, which are a renewable resource, while rapeseed wax is made from the oil of the rapeseed plant, which is a non-toxic and biodegradable crop.</li>
              <li>Better scent throw: Coconut and rapeseed wax candles have a stronger scent throw than soy wax candles.</li>
              <li>Longer burn time: Both coconut and rapeseed wax have a higher melting point than soy wax, they burn more slowly and last longer.</li>
              <li>Cleaner burning: Coconut and rapeseed wax produce less soot than soy wax.</li>
            </ol>
          </div>

          <div className="layout__box o__flexes-to-1" />

        </div>
      </div>
    </Layout>
  );
};
