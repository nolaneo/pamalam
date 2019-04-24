import Layout from "./layout.html.jsx"

export default (props) => {
  let piece = props.data.pamalam.pieces.find(piece => piece.path === props.path);

  return (
    <Layout title={`Pamalam | ${piece.title}`}>
      <div className="main-panel grey">
        <div className="main-panel-inner layout__box o__has-columns o__flexes-to-1">
          <div className="panel-text layout__box o__has-rows o__flexes-to-1">
            <h1 className="panel-title">{piece.title}</h1>
            {piece.details.map(detail => {
              return <p className="panel-description">{detail}</p>
            })}
            <div className="panel-spacer"></div>
            <p className="panel-description">{piece.fabric}</p>
            <div className="panel-spacer"></div>
            <p className="panel-description bold">Every item is handmade to order in your size.</p>
            <div className="layout__box o__flexes-to-1"></div>
            <p className="panel-price">{piece.price}</p>
            <p className="panel-shipping-details">
              Free international shipping
            </p>
            <p className="panel-handmade-details">
              Every item is handmade to order and shipped by registered mail.<br/>
              Please allow 4 - 8 weeks for delivery.
            </p>
            <div className="panel-spacer"></div>
            <div className="panel-order-now-button layout__box o__centers-all">
              Order Now
            </div>
          </div>
          <img className="hero-model" alt="Model in Leopard Print Dress" src="/assets/images/leopardprintdress3.png"/>
        </div>
      </div>
    </Layout>
  )
}