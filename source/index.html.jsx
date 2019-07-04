import Layout from "./layout.html.jsx";
import Hero from "./hero.html.jsx";
import GalleryWrapper from "./gallery-wrapper.html.jsx";

export default props => {
  return (
    <Layout title="Pamalam | New Collection">
      <Hero />
      <div className="gallery">
        {props.data.pamalam.pieces.map((piece, index) => {
          return <GalleryWrapper key={index} {...piece} />;
        })}
      </div>
      <div class="layout__box o__has-rows o__centers-horizontally">
        <div class="layout__box o__has-rows quote-wrapper">
          <div class="quote">
            <div class="quote-subheading">Our story</div>
            <div>
              Pamalam is contemporary premium clothing made especially for you.
              All of our bodies are different and with Pamalam every piece is
              tailored to fit your shape. Each piece is handmade by our small
              team and uses the best quality fabrics and production techniques
              to ensure it feels and looks great. We want every piece to work
              hard in your wardrobe for years to come. Our style is bold and
              adventurous femininity, made to be functional for the fearless
              women who are busy doing their thing.
            </div>
          </div>
          <div class="quote">
            <div class="quote-subheading">About the Founder</div>
            <div>
              Pamalam was founded in Buenos Aires in 2019 by Irish designer
              Pamela Murray. With a background in Theatre and Arts Management,
              Pamela is a lover of costume. She believes our clothes are a soft
              armour, where the best ones make us feel well, confident and
              equipped to be our true self. This is her first collection.
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
