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
      <div class="details__wrapper-container layout__box o__has-columns o__centers-horizontally">
        <div class="details__wrapper layout__box o__has-columns">
          <div class="details__thumbnail-gallery layout__box o__has-rows">
            {imageURLs.map(url => {
              return (
                <div
                  class="details__thumbnail"
                  style={{ "background-image": `url(${url})` }}
                />
              );
            })}
          </div>
          <div class="layout__box o__has-rows">
            <div
              class="details__main-image"
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
            <p className="panel-price">{piece.price}</p>
            <p className="panel-shipping-details">
              Free international shipping
            </p>
            <p className="panel-handmade-details">
              Every item is handmade to order and shipped by registered mail.
              <br />
              Please allow 4 - 8 weeks for delivery.
            </p>
            <div className="panel-spacer" />
            <a
              href={piece.link}
              className="panel-order-now-button layout__box o__centers-all"
              target="_blank"
            >
              Buy now on Etsy
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};
