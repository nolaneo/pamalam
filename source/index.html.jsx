import Layout from "./layout.html.jsx";
import Hero from "./hero.html.jsx";
import GalleryWrapper from "./gallery-wrapper.html.jsx";

export default props => {
  return (
    <Layout title="Pamalam | New Collection">
      <Hero heroType={"candle"} detailText={"Elevate your space with our natural handcrafted scents"} link="/scents" linkText="Shop now"/>

      <div className="gallery">
        {props.data.pamalam.candles.slice(0, 3).map((candle, index) => {
          return <GalleryWrapper key={index} subpath={"/scents"} {...candle} />;
        })}
      </div>

      <div class="mobile-v-space" />
      <hr />
      <div class="mobile-v-space" />


      <Hero heroType={"collection"} detailText={"Contemporary & Handcrafted"} link="/collection" linkText="View collection"/>

      <div className="gallery">
        {props.data.pamalam.pieces.slice(0, 3).map((piece, index) => {
          return <GalleryWrapper key={index} subpath={"/pieces"} {...piece} />;
        })}
      </div>
    </Layout>
  );
};
