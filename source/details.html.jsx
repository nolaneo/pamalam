import Layout from "./layout.html.jsx";

export default props => {
  let piece = props.data.pamalam.pieces.find(
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
      `/assets/images/pieces/${piece.path}/${piece.imagePath}${i}.jpg`
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
                "background-image": `url(/assets/images/pieces/${piece.path}/${
                  piece.imagePath
                }1.jpg)`
              }}
            />
          </div>
          <div className="details__information layout__box o__has-rows">
            <div className="details__title">{piece.title}</div>
            <div className="panel-spacer" />

            {piece.details.map(detail => {
              return <p className="panel-description">{detail}</p>;
            })}
            <div className="panel-spacer" />
            <p className="panel-description">{piece.fabric}</p>
            <div className="panel-spacer" />
            <p className="panel-description bold">
              Every item is handmade to order in your size.
            </p>
            <div className="layout__box o__flexes-to-1" />
            {/* <p className="panel-price">{piece.price}</p>
            <p className="panel-shipping-details">
              Free international shipping
            </p>
            <p className="panel-handmade-details">
              Every item is handmade to order and shipped by registered mail.
              <br />
              Please allow 4 - 8 weeks for delivery.
            </p>
            <div className="panel-spacer" />
            <div className="panel-spacer" />
            <a
              className="panel-order-now-button order-now-button layout__box o__centers-all"
              data-shopify-id={piece.shopify_id}
            >
              ADD TO CART
            </a> */}
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

          {piece.details.map(detail => {
            return <p className="panel-description">{detail}</p>;
          })}
          <div className="panel-spacer" />
          <p className="panel-description">{piece.fabric}</p>
          <div className="panel-spacer" />
          <p className="panel-description bold">
            Every item is handmade to order in your size.
          </p>
          <div className="layout__box o__flexes-to-1" />
          <div className="panel-spacer" />
          <p className="mobile-panel-price">{piece.price}</p>
          <div className="panel-spacer" />
          <div className="panel-spacer" />
          <div className="panel-spacer" />
          <div className="panel-spacer" />
          <div className="panel-spacer" />
          <a
            className="mobile-order-now-button order-now-button layout__box o__centers-all"
            data-shopify-id={piece.shopify_id}
          >
            ADD TO CART
          </a>
          <div className="panel-spacer" />
          <div className="panel-spacer" />
          <p className="panel-shipping-details">Free international shipping</p>
          <p className="panel-handmade-details">
            Every item is handmade to order and shipped by registered mail.
            <br />
            Please allow 4 - 8 weeks for delivery.
          </p>
        </div>
      </div>
    </Layout>
  );
};
