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
              Pamalam is about high quality affordable clothing that is made
              especially for you. All of our bodies are different and with
              Pamalam every piece is tailored to fit your shape. All of our
              clothes are handmade by our team of two, Pamela and Wiebke (our
              amazing tailor from Germany with years of experience in luxury
              menswear and theatre costume departments). Pamalam uses the
              highest quality fabrics and production techniques to ensure every
              piece feels and looks great. We want it to work hard in your
              wardrobe for years to come. Our look is bold and adventurous
              femininity, made to be functional for the fearless women who are
              busy doing their thing.
            </div>
          </div>
          <div class="quote">
            <div class="quote-subheading">About the Founder</div>
            <div>
              Pamalam was founded in Buenos Aires in 2019 by Pamela Murray. With
              a background in Theatre and Arts Management, Pamela is a long time
              lover of costume, believing our clothes are a soft armour,
              supporting us in the everyday hustle and bustle of our life. She
              first learned to sew when living in St Helena Island and has been
              designing and making clothes for herself and friends since 2015.
              This is her first collection.
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
